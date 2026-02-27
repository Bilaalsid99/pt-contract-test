import type { AgreementAnswers } from "@/types/agreement";
import { assembleAgreementBody } from "./assemble";

export function renderAgreementHtml(a: AgreementAnswers): string {
  const body = assembleAgreementBody(a);

  return `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Client Onboarding Agreement</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font-family: Arial, sans-serif; font-size: 12pt; line-height: 1.4; color: #111; }
      h1 { font-size: 18pt; margin: 0 0 12px 0; }
      h2 { font-size: 13pt; margin: 18px 0 8px 0; }
      p { margin: 6px 0; }
      .meta { font-size: 10pt; color: #444; margin-bottom: 14px; }
      .wrap { max-width: 800px; margin: 0 auto; padding: 24px; }
      hr { border: none; border-top: 1px solid #ddd; margin: 16px 0; }
    </style>
  </head>
  <body>
    <div class="wrap">
      <h1>UK Personal Trainer Client Onboarding Agreement</h1>
      <div class="meta">
        <div><strong>Trainer:</strong> ${escapeHtml(a.trainerName)}</div>
        <div><strong>Client:</strong> ${escapeHtml(a.clientFullName)}</div>
      </div>
      <hr />
      ${body}
    </div>
  </body>
</html>
  `.trim();
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}