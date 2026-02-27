import { kv } from "@vercel/kv";
import type { AgreementAnswers, DraftRecord } from "@/types/agreement";

const KEY = (id: string) => `draft:${id}`;
const TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days

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

  await kv.set(KEY(id), record, { ex: TTL_SECONDS });
  return record;
}

export async function getDraft(draftId: string): Promise<DraftRecord | null> {
  if (!draftId) return null;
  const record = (await kv.get(KEY(draftId))) as DraftRecord | null;
  return record ?? null;
}

export async function lockDraft(params: {
  draftId: string;
  stripeSessionId: string;
}): Promise<DraftRecord> {
  const record = await getDraft(params.draftId);
  if (!record) throw new Error("Draft not found");

  // idempotent: allow re-lock with same session id
  if (record.status === "locked") {
    if (record.stripeSessionId && record.stripeSessionId !== params.stripeSessionId) {
      throw new Error("Draft already locked with a different session");
    }
    return record;
  }

  if (record.status !== "draft") {
    throw new Error(`Cannot lock draft in status: ${record.status}`);
  }

  const updated: DraftRecord = {
    ...record,
    status: "locked",
    stripeSessionId: params.stripeSessionId,
    updatedAt: now(),
  };

  await kv.set(KEY(params.draftId), updated, { ex: TTL_SECONDS });
  return updated;
}

export async function markFulfilled(draftId: string): Promise<DraftRecord> {
  const record = await getDraft(draftId);
  if (!record) throw new Error("Draft not found");

  // idempotent
  if (record.status === "fulfilled") return record;

  if (record.status !== "locked") {
    throw new Error(`Cannot fulfill draft in status: ${record.status}`);
  }

  const updated: DraftRecord = {
    ...record,
    status: "fulfilled",
    fulfilledAt: now(),
    updatedAt: now(),
  };

  await kv.set(KEY(draftId), updated, { ex: TTL_SECONDS });
  return updated;
}