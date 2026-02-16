import { NextResponse } from "next/server";
import { appendFile } from "node:fs/promises";
import path from "node:path";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Basic guard
    if (typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ success: false, error: "Invalid email" }, { status: 400 });
    }

    // Save to a file in your project root: pt-contract-test/emails.txt
    const filePath = path.join(process.cwd(), "emails.txt");
    const line = `${new Date().toISOString()}  ${email}\n`;

    await appendFile(filePath, line, { encoding: "utf8" });

    console.log("New email submitted:", email);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
