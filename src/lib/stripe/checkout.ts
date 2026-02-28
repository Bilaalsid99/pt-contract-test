import { stripe } from "./client";
import { assertDraftId } from "@/lib/storage/draftId";

function getOrigin(req: Request) {
  const h = req.headers;
  const proto = h.get("x-forwarded-proto") ?? "https";
  const host = h.get("x-forwarded-host") ?? h.get("host");
  if (!host) throw new Error("Missing host header");
  return `${proto}://${host}`;
}

export async function createCheckoutSession(opts: {
  draftId: string;
  req: Request;
}) {
  const draftId = assertDraftId(opts.draftId);
  const origin = getOrigin(opts.req);

  const successUrl = `${origin}/client-onboarding-pack/success?draftId=${encodeURIComponent(
    draftId
  )}&session_id={CHECKOUT_SESSION_ID}`;

  const cancelUrl = `${origin}/client-onboarding-pack/preview?draftId=${encodeURIComponent(
    draftId
  )}`;

  return await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "gbp",
          product_data: { name: "Client Onboarding Pack" },
          unit_amount: 1999,
        },
        quantity: 1,
      },
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata: { draftId },
  });
}