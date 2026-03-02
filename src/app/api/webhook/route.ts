// src/app/api/webhook/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { kv } from "@vercel/kv";
import { stripe } from "@/lib/stripe/client";
import { getDraft, lockDraft, markFulfilled } from "@/lib/storage/drafts";
import { kvKeys } from "@/lib/storage/kvKeys";
import { assertDraftId } from "@/lib/storage/draftId";

export const runtime = "nodejs";

export async function POST(req: Request) {
  console.log("DEPLOY_SHA", process.env.VERCEL_GIT_COMMIT_SHA);

  const sig = req.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json(
      { error: "Missing stripe-signature" },
      { status: 400 }
    );
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Missing STRIPE_WEBHOOK_SECRET" },
      { status: 500 }
    );
  }

  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Invalid signature";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const sessionId = session.id;
  const draftIdRaw = session.metadata?.draftId;

  if (!sessionId) {
    console.log("webhook:missing_sessionId");
    return NextResponse.json({ received: true });
  }

  if (!draftIdRaw) {
    console.log("webhook:missing_draftId_metadata", { sessionId });
    return NextResponse.json({ received: true });
  }

  let draftId: string;
  try {
    draftId = assertDraftId(draftIdRaw);
  } catch {
    console.log("webhook:invalid_draftId", { sessionId, draftIdRaw });
    return NextResponse.json({ received: true });
  }

  // Idempotency: fulfill only once per session
  const onceKey = kvKeys.fulfillOnce(sessionId);
  const acquired = await (kv as any).set(onceKey, "1", {
    nx: true,
    ex: 60 * 60 * 24 * 7, // 7 days
  });

  if (!acquired) {
    return NextResponse.json({ received: true });
  }

  try {
    const current = await getDraft(draftId);

    if (!current) {
      console.log("webhook:draft_not_found", { draftId, sessionId });
      return NextResponse.json({ received: true });
    }

    if (current.status === "draft") {
      await lockDraft({ draftId, stripeSessionId: sessionId });
    }

    await markFulfilled({ draftId, stripeSessionId: sessionId });

    // ✅ Deliver PDF + email (idempotent inside deliverAgreement)

    const { deliverAgreement } = await import("@/lib/fulfillment/deliverAgreement");
    await deliverAgreement(draftId);

    console.log("webhook:fulfilled", { draftId, sessionId });
  } catch (err) {
    console.log("webhook:error", {
      draftId,
      sessionId,
      err: err instanceof Error ? err.message : err,
    });
  }

  return NextResponse.json({ received: true });
}