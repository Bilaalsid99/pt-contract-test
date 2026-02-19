import { EmailCaptureForm } from "@/components/EmailCaptureForm";

export const metadata = {
  title: "Personal Trainer Contract Template UK (Editable + Free via Email)",
  description:
    "Personal trainer contract template UK for 1-to-1 PT sessions. Covers fees, cancellations, liability and client responsibilities. Get the editable version by email.",
  verification: {
    google: "8gtyC-0Oe9BL_d3AaEZWbQdB0aP-jR6YVuWar_GTFf4",
  },
};


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
          <div className="text-sm text-slate-600">
            Personal Trainer Contract Template
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-6 py-12">
        {/* H1 */}
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Personal Trainer Contract Template UK
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-slate-700">
          Personal trainer contract template UK — use this to onboard clients
          clearly, define session rules, protect your time, and reduce disputes
          around payments and cancellations.
        </p>

        <div className="mt-6 text-sm text-slate-600 space-y-1">
          <div>✓ Built for 1-to-1 PT sessions</div>
          <div>✓ Plain-English structure</div>
          <div>✓ England & Wales context</div>
        </div>

        {/* Top CTA */}
        <section className="mt-10 border border-slate-300 bg-white p-8">
          <h2 className="text-base font-semibold text-slate-900">
            Email the editable template
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Get the Google Docs / Word version so you can edit placeholders
            (fees, notice periods, services).
          </p>

          <EmailCaptureForm />

          <p className="mt-4 text-xs text-slate-500">
            No spam. No urgency tricks. Just the template.
          </p>
        </section>

        <hr className="my-12 border-slate-300" />

        {/* What’s included */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            What’s included
          </h2>
          <ul className="mt-6 list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
            <li>Parties and services definition</li>
            <li>Session structure (length, location, scheduling)</li>
            <li>Fees and payment timing</li>
            <li>Cancellation and no-show rules</li>
            <li>Client responsibilities and disclosures</li>
            <li>Liability + insurance reference (non-dramatic wording)</li>
            <li>Termination</li>
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
            <li>Copy into Google Docs or Word.</li>
            <li>Replace placeholders (business name, fees, notice period).</li>
            <li>Make cancellations/no-shows match your real policy.</li>
            <li>Have the client sign before the first paid session.</li>
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
                Is this legal advice?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                No. It’s a practical template. For complex situations, get a
                solicitor review.
              </p>
            </div>

            <div>
              <div className="font-medium text-slate-900">
                Can I use it for online coaching?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Yes. Adjust the services/delivery section for remote sessions
                and boundaries.
              </p>
            </div>

            <div>
              <div className="font-medium text-slate-900">
                Do I need other forms as well?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Often yes, depending on how you onboard clients. This contract
                covers terms; add any additional paperwork only if it reflects
                your real process.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-14 border border-slate-300 bg-white p-8">
          <h2 className="text-base font-semibold text-slate-900">
            Want the editable version?
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Enter your email and we’ll send it.
          </p>

          <EmailCaptureForm />
        </section>
      </div>
    </main>
  );
}
