import { NextResponse } from "next/server";
import { Resend } from "resend";

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

    await resend.emails.send({
      from: "PT Templates <onboarding@resend.dev>",
      to: "owner@siddiqholdings.com",
      subject: "New PT Template Lead",
      html: `<p>New lead: <strong>${email}</strong></p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SUBMIT_ERROR:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
