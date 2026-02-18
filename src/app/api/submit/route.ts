import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    console.log("NEW_LEAD:", email);

    if (!process.env.RESEND_API_KEY) {
      console.error("Resend env missing");
      return NextResponse.json({ success: false }, { status: 500 });
    }

    const templateUrl = process.env.TEMPLATE_FORCE_COPY_URL;
    if (!templateUrl) {
      console.error("Missing TEMPLATE_FORCE_COPY_URL env");
      return NextResponse.json({ success: false }, { status: 500 });
    }

    // 1) Owner notification (unchanged, just slightly improved HTML)
    await resend.emails.send({
      from: "PT Templates <onboarding@resend.dev>",
      to: "owner@siddiqholdings.com",
      subject: "New PT Template Lead",
      html: `<p>New lead: <strong>${email}</strong></p><p>Template link: <a href="${templateUrl}">${templateUrl}</a></p>`,
    });

    // 2) User delivery (NEW)
    await resend.emails.send({
      from: "PT Templates <onboarding@resend.dev>",
      to: email,
      replyTo: "owner@siddiqholdings.com",
      subject: "Your Personal Trainer Contract Template (UK)",
      text: `Hi,

Your Personal Trainer Services Agreement (UK) template is ready.

Create your private copy below:

${templateUrl}

This will generate an editable version in your own Google Drive.

More professional templates for UK personal trainers will be released soon.

If you have any questions, simply reply to this email.

— PT Contract Templates`,
      html: `
<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 520px; margin: 0 auto;">
  <h2 style="margin-bottom: 16px;">Your template is ready</h2>

  <p>Your Personal Trainer Services Agreement (UK) template is ready to use.</p>

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
    — PT Contract Templates
  </p>
</div>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SUBMIT_ERROR:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
