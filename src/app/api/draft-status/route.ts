// src/app/api/draft-status/route.ts
import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { getDraft } from "@/lib/storage/drafts";
import { assertDraftId } from "@/lib/storage/draftId";
import { kvKeys } from "@/lib/storage/kvKeys";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const draftIdRaw = url.searchParams.get("draftId");

  if (!draftIdRaw) {
    return NextResponse.json({ error: "Missing draftId" }, { status: 400 });
  }

  const draftId = assertDraftId(draftIdRaw);
  const draft = await getDraft(draftId);

  if (!draft) {
    // Return 200 so UI can handle it without throwing
    return NextResponse.json(
      { status: "not_found", delivered: false },
      { status: 200 }
    );
  }

  // deliverAgreement() sets this only after email send succeeds
  const delivered = Boolean(await kv.get(kvKeys.deliverOnce(draftId)));

  return NextResponse.json({
    status: draft.status, // "draft" | "locked" | "fulfilled"
    delivered,
    draftId: draft.id,
    fulfilledAt: (draft as any).fulfilledAt ?? null,
  });
}