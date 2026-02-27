import type { AgreementAnswers } from "@/types/agreement";

export function clausePayment(a: AgreementAnswers): string {
  return `
    <h2>3. Fees & Payment</h2>
    <p>The Client agrees to pay the Trainer <strong>£${escapeHtml(a.sessionPrice)}</strong> per session (or as otherwise agreed in writing).</p>
    <p>Payment is due in advance unless the parties agree otherwise in writing.</p>
  `;
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}