import { NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe/client";
import { getDraft, lockDraft, markFulfilled } from "@/lib/storage/drafts";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  if (!sig) return NextResponse.json({ error: "Missing stripe-signature" }, { status: 400 });

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json({ error: "Missing STRIPE_WEBHOOK_SECRET" }, { status: 500 });
  }

  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Invalid signature";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const draftId = session.metadata?.draftId;
    const sessionId = session.id;

    if (!draftId) {
      return NextResponse.json({ error: "Missing draftId metadata" }, { status: 400 });
    }

    // ✅ Make it robust for V1: if draft is still "draft", lock it first
    const current = await getDraft(draftId);
    if (!current) {
      return NextResponse.json({ error: "Draft not found" }, { status: 404 });
    }

    if (current.status === "draft") {
      await lockDraft({ draftId, stripeSessionId: sessionId });
    }

    await markFulfilled(draftId);

    console.log("Webhook fulfilled:", { draftId, sessionId });
  }

  return NextResponse.json({ received: true });
}