// src/app/templates/personal-trainer-terms-and-conditions-uk/page.tsx

import { EmailCaptureForm } from "@/components/EmailCaptureForm";

export const metadata = {
  title: "Personal Trainer Terms & Conditions Template UK (Editable + Free via Email)",
  description:
    "Personal trainer terms and conditions template UK covering payments, cancellations, responsibilities and liability. Printable + editable version for self-employed PTs. Get the editable version by email.",
  alternates: {
    canonical: "/templates/personal-trainer-terms-and-conditions-uk",
  },
};

export const dynamic = "force-static";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-5 flex items-center justify-between">
          <a
            href="/"
            className="text-sm font-semibold tracking-wide text-slate-900"
          >
            PT Templates UK
          </a>
          <div className="text-sm text-slate-600">Terms &amp; Conditions</div>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-6 py-12">
        {/* H1 */}
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Personal Trainer Terms &amp; Conditions Template UK
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-slate-700">
          Use clear terms and conditions to set expectations before training begins.
          This template covers payments, cancellations, session policies, professional
          boundaries, responsibilities and liability wording for UK personal trainers.
        </p>

        <div className="mt-6 text-sm text-slate-600 space-y-1">
          <div>✓ Payment terms and refund wording</div>
          <div>✓ Cancellation, rescheduling and no-show policy structure</div>
          <div>✓ Responsibility and liability boundaries</div>
        </div>

        {/* Top CTA */}
        <section className="mt-10 border border-slate-300 bg-white p-8">
          <h2 className="text-base font-semibold text-slate-900">
            Email the editable terms and conditions
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Get the Google Docs / Word version so you can customise it with your business
            details and keep a clean copy.
          </p>

          <EmailCaptureForm templateId="terms" />

          <p className="mt-4 text-xs text-slate-500">
            No spam. No urgency tricks. Just the template.
          </p>
        </section>

        <hr className="my-12 border-slate-300" />

        {/* What’s included */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            What these terms and conditions include
          </h2>
          <ul className="mt-6 list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
            <li>Scope of services and session delivery</li>
            <li>Session duration, location and scheduling</li>
            <li>Payment terms, late payment wording and refunds</li>
            <li>Cancellation, rescheduling and no-show policy</li>
            <li>Client responsibilities and health disclosure expectations</li>
            <li>Trainer responsibilities and professional boundaries</li>
            <li>Limitation of liability and assumption of risk wording</li>
            <li>Governing law (England &amp; Wales)</li>
          </ul>
        </section>

        <hr className="my-12 border-slate-300" />

        {/* How to use */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            How to use it
          </h2>
          <ol className="mt-6 list-decimal pl-6 space-y-2 text-slate-700 leading-relaxed">
            <li>Customise the placeholders (business name, payments, notice periods).</li>
            <li>Send to the client before the first paid session (or include in onboarding).</li>
            <li>Make sure the client confirms they agree before training begins.</li>
            <li>Keep a copy of what was sent and the date it was accepted.</li>
            <li>Use the same terms consistently across all clients to avoid disputes.</li>
          </ol>
        </section>

        <hr className="my-12 border-slate-300" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            FAQ
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <div className="font-medium text-slate-900">
                Is this the same as a contract?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Not exactly. Terms and conditions set the business rules (payments,
                cancellations, expectations). A contract or client agreement can include
                terms, but many PTs use both depending on their onboarding.
              </p>
            </div>

            <div>
              <div className="font-medium text-slate-900">
                Is this legal advice?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                No. It’s a practical template. If you have complex needs, ask a solicitor
                to review your final wording.
              </p>
            </div>

            <div>
              <div className="font-medium text-slate-900">
                Can I use this for online coaching?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Yes. Adjust the services/delivery section and communication boundaries
                to match remote work.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-14 border border-slate-300 bg-white p-8">
          <h2 className="text-base font-semibold text-slate-900">
            Want the editable terms and conditions?
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Enter your email and we’ll send it.
          </p>

          <EmailCaptureForm templateId="terms" />
        </section>
      </div>
    </main>
  );
}