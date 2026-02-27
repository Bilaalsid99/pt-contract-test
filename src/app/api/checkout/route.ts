// src/app/api/checkout/route.ts
import { NextResponse } from "next/server";
import { createCheckoutSession } from "@/lib/stripe/checkout";
import { idTrace } from "@/lib/idtrace";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as unknown;

    const draftId =
      typeof body === "object" && body !== null && "draftId" in body
        ? String((body as any).draftId || "")
        : "";

    idTrace("checkout:body.draftId_extracted", draftId);

    if (!draftId) {
      return NextResponse.json({ error: "Missing draftId" }, { status: 400 });
    }

    const origin =
      req.headers.get("origin") ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000");

    const encoded = encodeURIComponent(draftId);
    idTrace("checkout:encodedURIComponent(draftId)", encoded);

    const successUrl = `${origin}/client-onboarding-pack/success?draftId=${encoded}`;
    const cancelUrl = `${origin}/client-onboarding-pack/preview?draftId=${encoded}`;

    console.log("[IDTRACE] checkout:successUrl", successUrl);
    console.log("[IDTRACE] checkout:cancelUrl", cancelUrl);

    const session = await createCheckoutSession({
      draftId,
      successUrl,
      cancelUrl,
    });

    console.log("[IDTRACE] checkout:stripe_session_id", session.id);

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
