import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export const runtime = "nodejs";

export async function GET() {
  const key = `kv-health:${crypto.randomUUID()}`;

  await kv.set(key, "ok", { ex: 60 });

  const value = await kv.get(key);

  return NextResponse.json({
    key,
    value,
  });
}