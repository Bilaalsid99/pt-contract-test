// src/lib/stripe/checkout.ts
import { stripe } from "./client";

export async function createCheckoutSession(params: {
  draftId: string;
  successUrl: string;
  cancelUrl: string;
}) {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "gbp",
          product_data: { name: "Client Onboarding Agreement (UK PT)" },
          unit_amount: 1900,
        },
        quantity: 1,
      },
    ],
    metadata: { draftId: params.draftId },
    success_url: params.successUrl,
    cancel_url: params.cancelUrl,
  });

  if (!session.url) throw new Error("Stripe session URL missing");
  return session;
}