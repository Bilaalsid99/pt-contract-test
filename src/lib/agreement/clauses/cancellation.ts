import type { AgreementAnswers } from "@/types/agreement";

export function clauseCancellation(a: AgreementAnswers): string {
  return `
    <h2>4. Cancellation & Rescheduling</h2>
    <p>The Client must provide at least <strong>${a.cancellationNoticeHours}</strong> hours’ notice to cancel or reschedule a session.</p>
    <p>If insufficient notice is provided, the session may be charged in full (unless the Trainer agrees otherwise).</p>
  `;
}