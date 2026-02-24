// src/app/templates/personal-trainer-terms-and-conditions-uk/page.tsx

export const metadata = {
  title: "Personal Trainer Terms and Conditions Template UK",
  description:
    "Personal trainer terms and conditions template UK covering payments, cancellations, session rules, responsibilities and liability wording. Clear structure suitable for UK PT onboarding.",
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
          Personal Trainer Terms and Conditions Template UK
        </h1>

        {/* Opening paragraph */}
        <p className="mt-5 text-lg leading-relaxed text-slate-700">
          Terms and conditions set the practical rules clients agree to before
          training begins. They typically cover payments, cancellations, session
          policies, responsibilities, and boundary wording so expectations are
          clear from day one.
        </p>

        <hr className="my-12 border-slate-300" />

        {/* What this document covers */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            What these terms and conditions cover
          </h2>

          <ul className="mt-6 list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
            <li>Scope of services and session delivery</li>
            <li>Session duration, location, and scheduling</li>
            <li>Payment terms, timing, late payment wording, and refunds</li>
            <li>Cancellation, rescheduling, and no-show rules</li>
            <li>Client responsibilities and health disclosure expectations</li>
            <li>Trainer responsibilities and professional boundaries</li>
            <li>Assumption of risk and limitation of liability wording</li>
            <li>Governing law (England &amp; Wales)</li>
          </ul>
        </section>

        <hr className="my-12 border-slate-300" />

        {/* When trainers use it */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            When trainers use terms and conditions
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            UK personal trainers commonly use terms and conditions:
          </p>

          <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
            <li>Before the first paid session</li>
            <li>When selling packages or blocks of sessions</li>
            <li>When offering online coaching or hybrid services</li>
            <li>When working across multiple locations (gym, home, outdoors)</li>
          </ul>
        </section>

        <hr className="my-12 border-slate-300" />

        {/* Common mistakes */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Common mistakes
          </h2>

          <ul className="mt-6 list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
            <li>Being vague about cancellations and rescheduling</li>
            <li>Not stating when payment is due (and what happens if late)</li>
            <li>Using rules you don’t actually follow in practice</li>
            <li>Mixing waiver wording into payment terms without clarity</li>
            <li>Not recording when and how the client agreed to the terms</li>
          </ul>
        </section>

        <hr className="my-12 border-slate-300" />

        {/* Professional Note block */}
        <section className="border border-slate-300 bg-white p-8">
          <h3 className="text-base font-semibold text-slate-900">
            Professional Note
          </h3>

          <p className="mt-3 text-sm text-slate-700">
            Most UK personal trainers don’t use this document on its own.
          </p>

          <p className="mt-3 text-sm text-slate-700">
            Client onboarding normally includes health screening, informed
            consent, service terms, and agreement wording working together in a
            structured order before training begins.
          </p>

          <p className="mt-3 text-sm text-slate-700">
            Using documents separately can work, but many trainers prefer to
            follow a complete onboarding process.
          </p>

          <p className="mt-4 text-sm">
            <a
              href="/onboarding"
              className="font-medium text-slate-900 underline underline-offset-4"
            >
              → See how complete client onboarding works
            </a>
          </p>
        </section>

        <hr className="my-12 border-slate-300" />

        {/* Template preview / access */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Template Preview
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Below is a structured terms and conditions template suitable for UK
            personal trainers. Adapt it to your services, delivery method, and
            real operating policies.
          </p>

          {/* Preview box (replace with your full T&Cs text) */}
          <div className="mt-6 border border-slate-300 bg-white p-6 text-sm text-slate-700 leading-relaxed">
            <p className="font-medium text-slate-900">
              Personal Training Terms &amp; Conditions (Template)
            </p>

            <p className="mt-4">
              <span className="font-medium">1. Services</span>
              <br />
              Personal training services will be provided as agreed between the
              trainer and the client (session type, frequency, and delivery
              method).
            </p>

            <p className="mt-3">
              <span className="font-medium">2. Payments</span>
              <br />
              Fees are: <span className="italic">[Insert pricing]</span>. Payment
              is due <span className="italic">[in advance / on booking / monthly]</span>.
              Late payments may result in sessions being paused until paid.
            </p>

            <p className="mt-3">
              <span className="font-medium">3. Cancellations and rescheduling</span>
              <br />
              Sessions cancelled with less than{" "}
              <span className="italic">[X]</span> hours notice may be charged.
              No-shows may be treated as a used session.
            </p>

            <p className="mt-3">
              <span className="font-medium">4. Client responsibilities</span>
              <br />
              The client agrees to disclose relevant health information, follow
              instructions during sessions, and inform the trainer of any
              changes to health status.
            </p>

            <p className="mt-3">
              <span className="font-medium">5. Trainer responsibilities</span>
              <br />
              The trainer will deliver sessions with reasonable care and skill,
              within the scope of the agreed service.
            </p>

            <p className="mt-3">
              <span className="font-medium">6. Risk and liability</span>
              <br />
              Exercise carries inherent risk. These terms do not exclude
              liability where unlawful to do so.
            </p>

            <p className="mt-3">
              <span className="font-medium">7. Governing law</span>
              <br />
              These terms are governed by the laws of England &amp; Wales.
            </p>

            <p className="mt-4 text-xs text-slate-500">
              Replace the preview content above with your full terms and
              conditions template text.
            </p>
          </div>
        </section>

        <hr className="my-12 border-slate-300" />

        {/* How to use this template */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            How to use this template
          </h2>

          <ol className="mt-6 list-decimal pl-6 space-y-2 text-slate-700 leading-relaxed">
            <li>Customise placeholders (business name, payments, notice periods).</li>
            <li>Send before the first paid session (or include in onboarding).</li>
            <li>Ensure the client agrees before training begins.</li>
            <li>Keep a record of what was provided and when it was accepted.</li>
            <li>Use the same terms consistently to reduce disputes.</li>
          </ol>
        </section>

        {/* Soft upward link */}
        <p className="mt-8 text-slate-700 leading-relaxed">
          Many trainers combine screening, consent, and service terms into a
          structured onboarding process. Learn how it works here →{" "}
          <a
            href="/onboarding"
            className="font-medium text-slate-900 underline underline-offset-4"
          >
            Client Onboarding Explained
          </a>
        </p>

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
                Not exactly. Terms and conditions set the business rules
                (payments, cancellations, expectations). Some trainers include
                these inside a contract; others keep them separate.
              </p>
            </div>

            <div>
              <div className="font-medium text-slate-900">
                Is this legal advice?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                No. It’s a practical template. If you have complex needs, a
                solicitor can review your final wording.
              </p>
            </div>

            <div>
              <div className="font-medium text-slate-900">
                Can I use this for online coaching?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Yes. Adjust service delivery and communication boundaries to
                match remote work.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-12 border-slate-300" />

        {/* Minimal footer navigation */}
        <footer className="pb-10">
          <div className="text-sm font-medium text-slate-900">
            Related documents:
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="/" className="text-slate-900 underline underline-offset-4">
                Personal Trainer Contract Template UK
              </a>
            </li>
            <li>
              <a
                href="/templates/personal-trainer-par-q-form-uk"
                className="text-slate-900 underline underline-offset-4"
              >
                PAR-Q Form Template UK
              </a>
            </li>
            <li>
              <a
                href="/templates/personal-trainer-waiver-form-uk"
                className="text-slate-900 underline underline-offset-4"
              >
                Personal Trainer Waiver Template UK
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </main>
  );
}