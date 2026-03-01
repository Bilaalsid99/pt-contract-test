import { NextResponse } from "next/server";
import { getDraft } from "@/lib/storage/drafts";
import { assertDraftId } from "@/lib/storage/draftId";

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
    return NextResponse.json({ status: "not_found" }, { status: 200 });
  }

  return NextResponse.json({
    status: draft.status, // "draft" | "locked" | "fulfilled"
    draftId: draft.id,
    fulfilledAt: (draft as any).fulfilledAt ?? null,
  });
}