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
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-3xl px-6 py-5 flex items-center justify-between">
          <a
            href="/"
            className="text-sm font-semibold tracking-wide text-slate-900"
          >
            PT Templates UK
          </a>
          <div className="text-sm text-slate-500">
            Terms & Conditions
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-6 py-12">
        {/* H1 */}
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Personal Trainer Terms and Conditions Template UK
        </h1>

        {/* Intro */}
        <p className="mt-6 text-lg leading-relaxed text-slate-700">
          Terms and conditions set the practical rules clients agree to before
          training begins. They typically cover payments, cancellations,
          session policies, responsibilities, and boundary wording so
          expectations are clear from day one.
        </p>

        {/* CTA (Top) */}
        <div className="mt-8">
          <a
            href="/client-onboarding-pack"
            className="inline-block rounded-md border border-slate-900 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-900 hover:text-white transition"
          >
            Build Your Structured Client Onboarding Pack
          </a>
        </div>

        <hr className="my-12 border-slate-200" />

        {/* What this covers */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900">
            What these terms and conditions cover
          </h2>

          <ul className="mt-6 list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
            <li>Scope of services and session delivery</li>
            <li>Scheduling and location rules</li>
            <li>Payment timing and refunds</li>
            <li>Cancellation and no-show rules</li>
            <li>Client and trainer responsibilities</li>
            <li>Risk and limitation wording</li>
            <li>Governing law (England & Wales)</li>
          </ul>
        </section>

        <hr className="my-12 border-slate-200" />

        {/* Template Section */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900">
            Template Preview
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Below is a structured terms and conditions template suitable for
            UK personal trainers.
          </p>

          {/* Document Box */}
          <div className="mt-8 rounded-md border border-slate-300 bg-white p-8 shadow-sm text-sm leading-relaxed text-slate-800">

            <div className="text-center">
              <div className="text-base font-semibold text-slate-900">
                Personal Training Terms & Conditions
              </div>
              <div className="mt-1 text-xs text-slate-500">
                Business Rules & Policies
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-slate-900">
                1. Services
              </h3>
              <p className="mt-2">
                Personal training services will be delivered as agreed
                between trainer and client.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-slate-900">
                2. Payments
              </h3>
              <p className="mt-2">
                Fees: ___________________________
              </p>
              <p>
                Payment terms: ___________________________
              </p>
              <p>
                Late payment may result in sessions being paused.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-slate-900">
                3. Cancellations & Rescheduling
              </h3>
              <p className="mt-2">
                Sessions cancelled with less than ______ hours notice may be charged.
              </p>
              <p>
                No-shows may be treated as a used session.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-slate-900">
                4. Client Responsibilities
              </h3>
              <p className="mt-2">
                Clients must disclose relevant health information and follow
                instructions during sessions.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-slate-900">
                5. Trainer Responsibilities
              </h3>
              <p className="mt-2">
                Sessions will be delivered with reasonable care and skill,
                within agreed scope.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-slate-900">
                6. Risk & Liability
              </h3>
              <p className="mt-2">
                Exercise carries inherent risk. Nothing in these terms
                excludes liability where unlawful to do so.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-slate-900">
                7. Governing Law
              </h3>
              <p className="mt-2">
                These terms are governed by the laws of England & Wales.
              </p>
            </div>
          </div>

          {/* CTA (After Template) */}
          <div className="mt-10">
            <a
              href="/client-onboarding-pack"
              className="inline-block rounded-md border border-slate-900 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-900 hover:text-white transition"
            >
              Build Your Structured Client Onboarding Pack
            </a>
          </div>
        </section>

        <hr className="my-12 border-slate-200" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>

          <div className="mt-6 space-y-6 text-sm text-slate-700">
            <div>
              <div className="font-medium text-slate-900">
                Is this the same as a contract?
              </div>
              <p className="mt-2">
                Not exactly. Terms set business rules. Some trainers include
                them inside a contract.
              </p>
            </div>

            <div>
              <div className="font-medium text-slate-900">
                Is this legal advice?
              </div>
              <p className="mt-2">
                No. It is a practical template example.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-12 border-slate-200" />

        {/* Footer */}
        <footer className="pb-10">
          <div className="text-sm font-medium text-slate-900">
            Related documents:
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="/" className="underline underline-offset-4">
                Personal Trainer Contract Template UK
              </a>
            </li>
            <li>
              <a
                href="/templates/personal-trainer-par-q-form-uk"
                className="underline underline-offset-4"
              >
                PAR-Q Form Template UK
              </a>
            </li>
            <li>
              <a
                href="/templates/personal-trainer-waiver-form-uk"
                className="underline underline-offset-4"
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