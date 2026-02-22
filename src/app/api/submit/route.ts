import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

type TemplateId =
  | "contract"
  | "parq"
  | "waiver"
  | "terms"
  | "client-agreement";

const TEMPLATE_MAP: Record<
  TemplateId,
  { envKey: string; name: string; subject: string }
> = {
  contract: {
    envKey: "TEMPLATE_FORCE_COPY_URL_CONTRACT",
    name: "Personal Trainer Contract Template (UK)",
    subject: "Your Personal Trainer Contract Template (UK)",
  },
  parq: {
    envKey: "TEMPLATE_FORCE_COPY_URL_PARQ",
    name: "Personal Trainer PAR-Q Form (UK)",
    subject: "Your Personal Trainer PAR-Q Form (UK)",
  },
  waiver: {
    envKey: "TEMPLATE_FORCE_COPY_URL_WAIVER",
    name: "Personal Trainer Liability Waiver (UK)",
    subject: "Your Personal Trainer Liability Waiver (UK)",
  },
  terms: {
    envKey: "TEMPLATE_FORCE_COPY_URL_TERMS",
    name: "Personal Trainer Terms & Conditions (UK)",
    subject: "Your PT Terms & Conditions (UK)",
  },
  "client-agreement": {
    envKey: "TEMPLATE_FORCE_COPY_URL_CLIENT_AGREEMENT",
    name: "Personal Trainer Client Agreement (UK)",
    subject: "Your Personal Trainer Client Agreement (UK)",
  },
};

export async function POST(req: Request) {
  try {
    const { email, templateId } = (await req.json()) as {
      email?: unknown;
      templateId?: unknown;
    };

    if (typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    const id = String(templateId || "").trim() as TemplateId;
    if (!id || !(id in TEMPLATE_MAP)) {
      return NextResponse.json(
        { success: false, error: "Invalid templateId" },
        { status: 400 }
      );
    }

    console.log("NEW_LEAD:", email, "TEMPLATE:", id);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Resend env missing");
      return NextResponse.json(
        { success: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const cfg = TEMPLATE_MAP[id];
    const templateUrl = process.env[cfg.envKey];

    if (!templateUrl) {
      console.error(`Missing ${cfg.envKey} env`);
      return NextResponse.json(
        { success: false, error: `Missing ${cfg.envKey}` },
        { status: 500 }
      );
    }

    // Use verified domain sender (your current setup)
    const from =
      process.env.LEADS_FROM_EMAIL || "PT Templates <owner@siddiqholdings.com>";
    const notifyTo =
      process.env.LEADS_NOTIFY_EMAIL || "owner@siddiqholdings.com";

    // 1) Owner notification
    await resend.emails.send({
      from,
      to: notifyTo,
      subject: `New lead: ${cfg.name}`,
      html: `<p>New lead: <strong>${email}</strong></p>
             <p>Template: <strong>${cfg.name}</strong></p>
             <p>Template link: <a href="${templateUrl}">${templateUrl}</a></p>`,
    });

    // 2) User delivery
    await resend.emails.send({
      from,
      to: email,
      replyTo: notifyTo,
      subject: cfg.subject,
      text: `Hi,

Your ${cfg.name} is ready.

Create your private copy below:

${templateUrl}

This will generate an editable version in your own Google Drive.

More professional templates for UK personal trainers will be released soon.

If you have any questions, simply reply to this email.

— PT Templates UK`,
      html: `
<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 520px; margin: 0 auto;">
  <h2 style="margin-bottom: 16px;">Your template is ready</h2>

  <p>Your ${cfg.name} is ready to use.</p>

  <p style="margin: 24px 0;">
    <a href="${templateUrl}"
       style="background: #111; color: #fff; padding: 12px 18px;
              text-decoration: none; border-radius: 6px; display: inline-block;">
      Create My Copy
    </a>
  </p>

  <p style="font-size: 14px; color: #555;">
    The link will generate your own private copy in Google Drive.
  </p>

  <hr style="margin: 28px 0; border: none; border-top: 1px solid #eee;" />

  <p style="font-size: 14px;">
    We’re building a focused collection of professional documents designed specifically for UK personal trainers.
  </p>

  <p style="margin-top: 20px; font-size: 14px;">
    If you have questions, simply reply to this email.
  </p>

  <p style="margin-top: 24px; font-size: 14px; color: #777;">
    — PT Templates UK
  </p>
</div>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SUBMIT_ERROR:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}