import { kv } from "@vercel/kv";
import { kvKeys } from "./kvKeys";

export async function rateLimitOrThrow(opts: {
  bucket: "draft-create" | "checkout-create";
  ip: string;
  limit: number;
  windowSeconds: number;
}) {
  const key = kvKeys.rate(opts.bucket, opts.ip);

  const count = await kv.incr(key);

  if (count === 1) {
    await kv.expire(key, opts.windowSeconds);
  }

  if (count > opts.limit) {
    throw Object.assign(new Error("Rate limited"), { status: 429 });
  }
}