// src/lib/fulfillment/deliverAgreement.ts
import { kv } from "@vercel/kv";
import { kvKeys } from "@/lib/storage/kvKeys";
import { getDraft } from "@/lib/storage/drafts";
import { assertDraftId } from "@/lib/storage/draftId";
import { htmlToPdfBuffer } from "@/lib/pdf/htmlToPdf";
import { sendAgreementEmail } from "@/lib/email/sendAgreementEmail";

export async function deliverAgreement(draftIdRaw: string) {
  const draftId = assertDraftId(draftIdRaw);

  const deliveredKey = kvKeys.deliverOnce(draftId);

  // Fast no-op: if already delivered, stop immediately
  const alreadyDelivered = await kv.get(deliveredKey);
  if (alreadyDelivered) {
    console.log("deliver:already_delivered", { draftId });
    return;
  }

  // Prevent concurrent delivery attempts
  const inProgressKey = `${deliveredKey}:inprogress`;
  const inProgress = await (kv as any).set(inProgressKey, "1", {
    nx: true,
    ex: 10 * 60, // 10 minutes
  });

  if (!inProgress) {
    console.log("deliver:inprogress_lock_exists", { draftId });
    return;
  }

  console.log("deliver:start", { draftId });

  try {
    const draft = await getDraft(draftId);
    if (!draft) throw new Error("Draft not found");

    if (draft.status !== "fulfilled") {
      throw new Error(`Draft not fulfilled (status=${draft.status})`);
    }

    const to = String(draft.answers?.trainerEmail || "").trim();
    if (!to) throw new Error("Missing trainerEmail on draft");

    let pdf: Buffer;

    try {
      pdf = await htmlToPdfBuffer(draft.html);
      console.log("deliver:pdf_generated", {
        draftId,
        bytes: pdf?.length ?? 0,
      });
    } catch (err) {
      console.log("deliver:pdf_error", {
        draftId,
        err: err instanceof Error ? err.message : err,
      });
      throw err;
    }

    try {
      await sendAgreementEmail({
        to,
        pdfBuffer: pdf,
        filename: "client-onboarding-pack.pdf",
      });
      console.log("deliver:email_sent", { draftId, to });
    } catch (err) {
      console.log("deliver:email_error", {
        draftId,
        to,
        err: err instanceof Error ? err.message : err,
      });
      throw err;
    }

    // Mark delivered only after success
    await kv.set(deliveredKey, "1", { ex: 60 * 60 * 24 * 30 }); // 30 days
    console.log("deliver:marked_delivered", { draftId });
  } catch (err) {
    console.log("deliver:error", {
      draftId,
      err: err instanceof Error ? err.message : err,
    });
    throw err;
  } finally {
    // Always release in-progress lock (even on failure)
    await kv.del(inProgressKey);
    console.log("deliver:lock_released", { draftId });
  }
}