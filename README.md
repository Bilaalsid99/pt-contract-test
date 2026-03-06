# PT Contract Test

This repository is a sandbox project used to test the checkout and agreement generation flow for a personal trainer client onboarding pack.

The project focuses on validating:

* Stripe checkout flow
* Agreement generation
* Webhook verification
* Email and fulfillment logic

This is **not the final product structure**, but a technical sandbox used to review the payment implementation.

---

## Local Setup

Clone the repository:

```
git clone https://github.com/Bilaalsid99/pt-contract-test.git
cd pt-contract-test
```

Install dependencies:

```
npm install
```

---

## Environment Variables

Create a local environment file from the template:

```
cp .env.example .env.local
```

Then add your Stripe **sandbox keys** from the Stripe dashboard.

Example:

```
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Environment variables are not committed to the repository.

---

## Running the Project

Start the development server:

```
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Testing Checkout

Use Stripe test card details:

```
Card: 4242 4242 4242 4242
Expiry: Any future date
CVC: Any
Postcode: Any
```

---

## Project Structure

Key areas for checkout review:

```
src/app/api/checkout/route.ts
src/app/api/webhook/route.ts
src/lib/stripe/
src/lib/fulfillment/
src/lib/email/
```

Main flow:

1. Agreement form submission
2. Stripe checkout session creation
3. Stripe webhook verification
4. Agreement generation
5. Email and fulfillment

---

## Tech Stack

* Next.js
* TypeScript
* Stripe
* Vercel deployment

---

## Notes

This repository is used to validate the checkout and fulfillment system before integrating it into the larger ContractForge structure.
