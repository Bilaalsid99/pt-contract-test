// src/app/api/checkout/route.ts
import { NextResponse } from "next/server";
import { assertDraftId } from "@/lib/storage/draftId";
import { rateLimitOrThrow } from "@/lib/storage/rateLimit";
import { createCheckoutSession } from "@/lib/stripe/checkout";
import {
  reserveDraftCheckoutLock,
  finalizeDraftCheckoutLock,
} from "@/lib/storage/drafts";

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();

    const draftIdRaw =
      typeof body === "object" && body !== null && "draftId" in body
        ? (body as Record<string, unknown>).draftId
        : "";

    const draftId = assertDraftId(draftIdRaw);

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    await rateLimitOrThrow({
      bucket: "checkout-create",
      ip,
      limit: 20,
      windowSeconds: 60,
    });

    // ✅ Reserve lock BEFORE creating a payable Stripe session
    const { token } = await reserveDraftCheckoutLock(draftId);

    const session = await createCheckoutSession({ draftId, req });

    // ✅ Finalize lock AFTER session exists (session-bound)
    await finalizeDraftCheckoutLock({
      draftId,
      token,
      stripeSessionId: session.id,
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (err: unknown) {
    const e = err as { message?: string; status?: number };
    return NextResponse.json(
      { error: e?.message ?? "Server error" },
      { status: e?.status ?? 500 }
    );
  }
}