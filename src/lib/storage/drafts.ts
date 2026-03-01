// src/lib/storage/drafts.ts
import { kv } from "@vercel/kv";
import type { AgreementAnswers, DraftRecord } from "@/types/agreement";
import { kvKeys } from "@/lib/storage/kvKeys";
import { assertDraftId } from "@/lib/storage/draftId";

const TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days
const LOCK_TTL_SECONDS = 15 * 60; // 15 minutes (enough for checkout)
const now = () => Date.now();

function newToken() {
  return crypto.randomUUID();
}

export async function createDraft(input: {
  answers: AgreementAnswers;
  html: string;
  assembledHash: string;
}): Promise<DraftRecord> {
  const id = crypto.randomUUID();
  const ts = now();

  const record: DraftRecord = {
    id,
    status: "draft",
    createdAt: ts,
    updatedAt: ts,
    answers: input.answers,
    html: input.html,
    assembledHash: input.assembledHash,
  };

  await kv.set(kvKeys.draft(id), record, { ex: TTL_SECONDS });
  return record;
}

export async function getDraft(draftId: string): Promise<DraftRecord | null> {
  if (!draftId) return null;
  const id = assertDraftId(draftId);
  const record = (await kv.get(kvKeys.draft(id))) as DraftRecord | null;
  return record ?? null;
}

/**
 * Reserve the checkout lock BEFORE creating a Stripe session.
 * This prevents creating a payable session that cannot be associated to the draft.
 */
export async function reserveDraftCheckoutLock(
  draftIdRaw: string
): Promise<{ draftId: string; token: string }> {
  const draftId = assertDraftId(draftIdRaw);

  const record = await getDraft(draftId);
  if (!record) throw new Error("Draft not found");

  if (record.status === "fulfilled") throw new Error("Draft already fulfilled");
  if (record.status === "locked") throw new Error("Draft already locked");

  const lockKey = kvKeys.draftLock(draftId);
  const token = newToken();

  const acquired = await (kv as any).set(lockKey, token, {
    nx: true,
    ex: LOCK_TTL_SECONDS,
  });

  if (!acquired) throw new Error("Draft lock busy");

  return { draftId, token };
}

/**
 * Finalize lock AFTER Stripe session is created.
 * Only succeeds if the reservation token still owns the lock.
 */
export async function finalizeDraftCheckoutLock(params: {
  draftId: string;
  token: string;
  stripeSessionId: string;
}): Promise<DraftRecord> {
  const draftId = assertDraftId(params.draftId);
  const token = String(params.token || "");
  const stripeSessionId = String(params.stripeSessionId || "");

  if (!token) throw new Error("Missing reservation token");
  if (!stripeSessionId) throw new Error("Missing stripeSessionId");

  const lockKey = kvKeys.draftLock(draftId);
  const currentLock = (await kv.get(lockKey)) as string | null;

  if (!currentLock) throw new Error("Draft lock expired");
  if (currentLock !== token) throw new Error("Draft lock not owned");

  const record = await getDraft(draftId);
  if (!record) throw new Error("Draft not found");

  if (record.status === "fulfilled") throw new Error("Draft already fulfilled");

  // If already locked, allow only idempotency with same session id
  if (record.status === "locked") {
    if (record.stripeSessionId && record.stripeSessionId !== stripeSessionId) {
      throw new Error("Draft already locked with a different session");
    }
    return record;
  }

  if (record.status !== "draft") {
    throw new Error(`Cannot lock draft in status: ${record.status}`);
  }

  const ts = now();
  const updated: DraftRecord = {
    ...record,
    status: "locked",
    stripeSessionId,
    lockedAt: ts,
    lockExpiresAt: ts + LOCK_TTL_SECONDS * 1000,
    updatedAt: ts,
  };

  await kv.set(kvKeys.draft(draftId), updated, { ex: TTL_SECONDS });

  // Replace the reservation token with the session id for observability (keep TTL).
  await kv.set(lockKey, stripeSessionId, { ex: LOCK_TTL_SECONDS });

  return updated;
}

/**
 * Lock draft when you already have a Stripe session id.
 * - Uses a separate lock key with NX + TTL to prevent concurrent locking.
 * - Idempotent: if already locked with same session, returns record.
 */
export async function lockDraft(params: {
  draftId: string;
  stripeSessionId: string;
}): Promise<DraftRecord> {
  const draftId = assertDraftId(params.draftId);
  const stripeSessionId = String(params.stripeSessionId || "");
  if (!stripeSessionId) throw new Error("Missing stripeSessionId");

  const record = await getDraft(draftId);
  if (!record) throw new Error("Draft not found");

  // If already fulfilled, never allow locking again
  if (record.status === "fulfilled") {
    throw new Error("Draft already fulfilled");
  }

  // Idempotent: allow re-lock with same session id
  if (record.status === "locked") {
    if (record.stripeSessionId && record.stripeSessionId !== stripeSessionId) {
      throw new Error("Draft already locked with a different session");
    }
    return record;
  }

  if (record.status !== "draft") {
    throw new Error(`Cannot lock draft in status: ${record.status}`);
  }

  const lockKey = kvKeys.draftLock(draftId);

  const acquired = await (kv as any).set(lockKey, stripeSessionId, {
    nx: true,
    ex: LOCK_TTL_SECONDS,
  });

  if (!acquired) {
    throw new Error("Draft lock busy");
  }

  const ts = now();
  const updated: DraftRecord = {
    ...record,
    status: "locked",
    stripeSessionId,
    lockedAt: ts,
    lockExpiresAt: ts + LOCK_TTL_SECONDS * 1000,
    updatedAt: ts,
  };

  await kv.set(kvKeys.draft(draftId), updated, { ex: TTL_SECONDS });
  return updated;
}

/**
 * Mark fulfilled (idempotent, session-bound).
 * Must be locked first, and session must match.
 */
export async function markFulfilled(params: {
  draftId: string;
  stripeSessionId: string;
}): Promise<DraftRecord> {
  const draftId = assertDraftId(params.draftId);
  const stripeSessionId = String(params.stripeSessionId || "");
  if (!stripeSessionId) throw new Error("Missing stripeSessionId");

  const record = await getDraft(draftId);
  if (!record) throw new Error("Draft not found");

  // idempotent
  if (record.status === "fulfilled") return record;

  if (record.status !== "locked") {
    throw new Error(`Cannot fulfill draft in status: ${record.status}`);
  }

  if (!record.stripeSessionId || record.stripeSessionId !== stripeSessionId) {
    throw new Error("Draft locked with a different session");
  }

  const ts = now();
  const updated: DraftRecord = {
    ...record,
    status: "fulfilled",
    fulfilledAt: ts,
    updatedAt: ts,
  };

  await kv.set(kvKeys.draft(draftId), updated, { ex: TTL_SECONDS });
  return updated;
}