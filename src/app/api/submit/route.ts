import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    console.log("NEW_LEAD:", email);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
