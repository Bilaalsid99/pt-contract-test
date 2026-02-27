import { NextResponse } from "next/server";
import { validateAnswers } from "@/lib/agreement/schema";
import { renderAgreementHtml } from "@/lib/agreement/renderAgreementHtml";
import { hashDraft } from "@/lib/agreement/hash";
import { createDraft } from "@/lib/storage/drafts";
import { idTrace } from "@/lib/idtrace";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const answers = validateAnswers(body);

    const html = renderAgreementHtml(answers);
    const answersJson = JSON.stringify(answers);
    const assembledHash = hashDraft({ html, answersJson });

    const draft = await createDraft({ answers, html, assembledHash });

    idTrace("drafts:created_draft.id", draft.id);

    return NextResponse.json({ draftId: draft.id });
  } catch (err: any) {
    const status = err?.status ?? 500;
    return NextResponse.json(
      { error: err?.message ?? "Something went wrong" },
      { status }
    );
  }
}
