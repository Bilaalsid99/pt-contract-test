// src/lib/fulfillment/deliverAgreement.ts
import { kv } from "@vercel/kv";
import { kvKeys } from "@/lib/storage/kvKeys";
import { getDraft } from "@/lib/storage/drafts";
import { assertDraftId } from "@/lib/storage/draftId";
import { htmlToPdfBuffer } from "@/lib/pdf/htmlToPdf";
import { sendAgreementEmail } from "@/lib/email/sendAgreementEmail";

export async function deliverAgreement(draftIdRaw: string) {
  const draftId = assertDraftId(draftIdRaw);

  // Prevent concurrent delivery attempts
  const inProgressKey = `${kvKeys.deliverOnce(draftId)}:inprogress`;
  const inProgress = await (kv as any).set(inProgressKey, "1", {
    nx: true,
    ex: 10 * 60, // 10 minutes
  });
  if (!inProgress) return;

  try {
    // If already delivered, no-op
    const deliveredKey = kvKeys.deliverOnce(draftId);
    const alreadyDelivered = await kv.get(deliveredKey);
    if (alreadyDelivered) return;

    const draft = await getDraft(draftId);
    if (!draft) throw new Error("Draft not found");

    if (draft.status !== "fulfilled") {
      throw new Error(`Draft not fulfilled (status=${draft.status})`);
    }

    const to = draft.answers.trainerEmail;

    console.log("deliver:starting", { draftId, to });

    const pdf = await htmlToPdfBuffer(draft.html);

    await sendAgreementEmail({
      to,
      pdfBuffer: pdf,
      filename: "client-onboarding-pack.pdf",
    });

    console.log("deliver:sent", { draftId, to });

    // Mark delivered only after success
    await kv.set(deliveredKey, "1", { ex: 60 * 60 * 24 * 30 }); // 30 days
  } finally {
    // Always release in-progress lock (even on failure)
    await kv.del(inProgressKey);
  }
}