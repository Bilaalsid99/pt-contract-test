// src/lib/email/sendAgreementEmail.ts
import { Resend } from "resend";

const resend = new Resend(mustEnv("RESEND_API_KEY"));

function mustEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing ${name}`);
  return v;
}

export async function sendAgreementEmail(params: {
  to: string;
  pdfBuffer: Buffer;
  filename?: string;
}) {
  const to = String(params.to || "").trim();
  if (!to.includes("@")) throw new Error("Invalid recipient email");

  const from = mustEnv("FROM_EMAIL");
  const filename = params.filename || "client-onboarding-pack.pdf";

  await resend.emails.send({
    from,
    to,
    subject: "Your Client Onboarding Pack (PDF)",
    text: "Attached is your Client Onboarding Pack PDF.",
    attachments: [
      {
        filename,
        content: params.pdfBuffer.toString("base64"),
      },
    ],
  });
}