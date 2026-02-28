// src/lib/storage/drafts.ts
import { kv } from "@vercel/kv";
import type { AgreementAnswers, DraftRecord } from "@/types/agreement";
import { kvKeys } from "@/lib/storage/kvKeys";
import { assertDraftId } from "@/lib/storage/draftId";

const TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days
const LOCK_TTL_SECONDS = 15 * 60; // 15 minutes (enough for checkout)
const now = () => Date.now();

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
 * Lock draft before checkout is considered valid.
 * - Uses a separate lock key with NX + TTL to prevent concurrent locking.
 * - Still idempotent: if already locked with same session, returns record.
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

  // Acquire lock (best-effort atomic). If another request already locked, reject.
  const lockKey = kvKeys.draftLock(draftId);

  // @vercel/kv supports Redis options. Using `as any` avoids TS friction.
  const acquired = await (kv as any).set(lockKey, stripeSessionId, {
    nx: true,
    ex: LOCK_TTL_SECONDS,
  });

  if (!acquired) {
    // Someone else is currently locking/creating checkout.
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
 * Mark fulfilled (idempotent).
 * Must be locked first.
 */
export async function markFulfilled(draftIdRaw: string): Promise<DraftRecord> {
  const draftId = assertDraftId(draftIdRaw);
  const record = await getDraft(draftId);
  if (!record) throw new Error("Draft not found");

  // idempotent
  if (record.status === "fulfilled") return record;

  if (record.status !== "locked") {
    throw new Error(`Cannot fulfill draft in status: ${record.status}`);
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