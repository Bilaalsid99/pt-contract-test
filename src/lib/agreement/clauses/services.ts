import type { AgreementAnswers } from "@/types/agreement";

export function clauseServices(a: AgreementAnswers): string {
  const locationLine =
    a.trainingType === "online"
      ? `<p><strong>Delivery</strong>: Online training.</p>`
      : `<p><strong>Delivery</strong>: ${a.trainingType === "hybrid" ? "Hybrid (online + in-person)" : "In-person"} training at: ${escapeHtml(
          a.sessionLocation ?? ""
        )}</p>`;

  return `
    <h2>2. Services</h2>
    <p>The Trainer will provide personal training services to the Client as agreed between the parties.</p>
    ${locationLine}
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