import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // ensure Node runtime on Vercel

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = (await req.json()) as { email?: string };

    if (typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    console.log("NEW_LEAD:", email);

    // Send notification email (minimal)
    const to = process.env.LEADS_NOTIFY_EMAIL;
    const from = process.env.LEADS_FROM_EMAIL;

    if (!to || !from || !process.env.RESEND_API_KEY) {
      console.error("Missing env vars for Resend (RESEND_API_KEY / LEADS_NOTIFY_EMAIL / LEADS_FROM_EMAIL)");
      // Keep success true so lead capture isn't blocked if env is missing
      return NextResponse.json({ success: true });
    }

    await resend.emails.send({
      from,
      to,
      subject: `NEW_LEAD: ${email}`,
      text: `New lead captured:\n\n${email}\n\nSource: / (PT Contract Template UK)\nTime: ${new Date().toISOString()}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SUBMIT_ERROR:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
