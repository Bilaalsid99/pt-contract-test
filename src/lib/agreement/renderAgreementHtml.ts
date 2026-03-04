import type { AgreementAnswers } from "@/types/agreement";
import { assembleAgreementBody } from "./assemble";

type RenderMode = "preview" | "full";

/**
 * Renders the agreement as HTML.
 * - full: complete agreement (used for paid PDF + email)
 * - preview: redacts key protection sections so users can't copy the full doc
 */
export function renderAgreementHtml(
  a: AgreementAnswers,
  opts?: { mode?: RenderMode }
): string {
  const mode: RenderMode = opts?.mode ?? "full";
  const fullBody = assembleAgreementBody(a);

  const body = mode === "preview" ? redactForPreview(fullBody) : fullBody;

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

      /* Preview-only styling */
      .previewBadge {
        display: ${mode === "preview" ? "block" : "none"};
        background: #fff7d6;
        border: 1px solid #f1d48a;
        color: #5a4300;
        padding: 10px 12px;
        border-radius: 8px;
        font-size: 10.5pt;
        margin: 0 0 14px 0;
      }

      .redacted {
        background: #f6f6f6;
        border: 1px dashed #cfcfcf;
        padding: 10px 12px;
        border-radius: 8px;
        color: #333;
        margin: 8px 0 6px 0;
      }

      .muted {
        color: #666;
        font-size: 10.5pt;
        margin-bottom: 10px;
      }
    </style>
  </head>
  <body>
    <div class="wrap">
      <h1>UK Personal Trainer Client Onboarding Agreement</h1>

      <div class="previewBadge">
        <strong>Preview version</strong>
        <div class="muted">Some protection clauses are hidden until you unlock the full pack.</div>
      </div>

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

/**
 * Redacts the most copyable/high-value legal sections.
 * Uses <p> tags instead of <div> so the PDF parser can read them.
 */
function redactForPreview(fullBodyHtml: string): string {
  const sectionsToRedact = [
    /<h2>\s*3\.\s*Fees\s*&\s*Payment\s*<\/h2>[\s\S]*?(?=<h2>|$)/i,
    /<h2>\s*4\.\s*Cancellation\s*&\s*Rescheduling\s*<\/h2>[\s\S]*?(?=<h2>|$)/i,
    /<h2>\s*5\.\s*Health,\s*Safety\s*&\s*Liability\s*<\/h2>[\s\S]*?(?=<h2>|$)/i,
  ];

  let out = fullBodyHtml;

  for (const re of sectionsToRedact) {
    out = out.replace(re, (match) => {
      const headingMatch = match.match(/<h2>[\s\S]*?<\/h2>/i);
      const heading = headingMatch ? headingMatch[0] : "<h2>Section</h2>";

      return `
${heading}
<p class="redacted"><strong>Full clause hidden in preview</strong></p>
<p class="muted">Unlock the full pack to download the complete legal wording for this section.</p>
`.trim();
    });
  }

  return out;
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}