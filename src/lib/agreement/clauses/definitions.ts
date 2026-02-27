import type { AgreementAnswers } from "@/types/agreement";

export function clauseDefinitions(a: AgreementAnswers): string {
  const business = a.businessName ? ` (${a.businessName})` : "";
  return `
    <h2>1. Definitions</h2>
    <p><strong>Trainer</strong>: ${escapeHtml(a.trainerName)}${escapeHtml(business)}</p>
    <p><strong>Client</strong>: ${escapeHtml(a.clientFullName)}</p>
    <p><strong>Services</strong>: Personal training services as described in this Agreement.</p>
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