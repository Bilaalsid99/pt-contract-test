import type { AgreementAnswers } from "@/types/agreement";

export function clauseSignatures(a: AgreementAnswers): string {
  return `
    <h2>6. Signatures</h2>
    <table style="width:100%; border-collapse:collapse; margin-top:16px;">
      <tr>
        <td style="width:50%; padding:8px; vertical-align:top;">
          <p><strong>Trainer</strong></p>
          <p>Name: ${escapeHtml(a.trainerName)}</p>
          <p>Email: ${escapeHtml(a.trainerEmail)}</p>
          <p>Signature: ________________________</p>
          <p>Date: ________________________</p>
        </td>
        <td style="width:50%; padding:8px; vertical-align:top;">
          <p><strong>Client</strong></p>
          <p>Name: ${escapeHtml(a.clientFullName)}</p>
          <p>Email: ${escapeHtml(a.clientEmail)}</p>
          <p>Signature: ________________________</p>
          <p>Date: ________________________</p>
        </td>
      </tr>
    </table>
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