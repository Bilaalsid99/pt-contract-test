// src/app/templates/personal-trainer-par-q-form-uk/page.tsx

export const metadata = {
  title: "Personal Trainer PAR-Q Form Template UK",
  description:
    "Personal trainer PAR-Q form template UK for client health screening before training begins. Covers health conditions, injuries, medication, declarations, and signatures in a clear printable format.",
  alternates: {
    canonical: "/templates/personal-trainer-par-q-form-uk",
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
            Health Screening Template
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-6 py-12">
        {/* H1 */}
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Personal Trainer PAR-Q Form Template UK
        </h1>

        {/* Opening paragraph */}
        <p className="mt-6 text-lg leading-relaxed text-slate-700">
          A PAR-Q form is used to screen clients for health risks before
          training begins. It helps record key disclosures, identify potential
          red flags, and document that a client has answered health questions
          prior to starting exercise.
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

        {/* What this document covers */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900">
            What this form covers
          </h2>

          <ul className="mt-6 list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
            <li>Client personal details</li>
            <li>Health conditions checklist (yes/no)</li>
            <li>Injury history disclosure</li>
            <li>Medication declaration</li>
            <li>Prompt wording for seeking appropriate clearance</li>
            <li>Client declaration, signature, and date</li>
          </ul>
        </section>

        <hr className="my-12 border-slate-200" />

        {/* Template Section */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900">
            Template Preview
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Below is a structured PAR-Q screening template suitable for UK
            personal training onboarding.
          </p>

          {/* Document Box */}
          <div className="mt-8 rounded-md border border-slate-300 bg-white p-8 shadow-sm text-sm leading-relaxed text-slate-800">

            <div className="text-center">
              <div className="text-base font-semibold text-slate-900">
                PAR-Q / Health Screening Form
              </div>
              <div className="mt-1 text-xs text-slate-500">
                Physical Activity Readiness Questionnaire
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <p><strong>Client name:</strong> ___________________________</p>
              <p><strong>Date of birth:</strong> ___________________________</p>
              <p><strong>Date completed:</strong> ___________________________</p>
            </div>

            <div className="mt-10">
              <h3 className="font-semibold text-slate-900">
                Health Questions
              </h3>

              <ul className="mt-4 space-y-3">
                <li>Has a doctor ever said you have a heart condition? — Yes / No</li>
                <li>Do you feel chest pain during physical activity? — Yes / No</li>
                <li>Have you had chest pain in the past month when not active? — Yes / No</li>
                <li>Do you lose balance due to dizziness or fainting? — Yes / No</li>
                <li>Do you have a bone or joint problem worsened by exercise? — Yes / No</li>
                <li>Are you on medication for blood pressure or heart condition? — Yes / No</li>
                <li>Is there any other reason you should not exercise? — Yes / No</li>
              </ul>
            </div>

            <div className="mt-8">
              <p>
                <strong>If you answered YES to any question:</strong> Provide
                details below and confirm what steps you will take before
                starting training.
              </p>

              <div className="mt-4 border border-dashed border-slate-300 p-4 text-slate-500">
                Client notes:
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-semibold text-slate-900">
                Client Declaration
              </h3>

              <p className="mt-4">
                I confirm the information provided is accurate to the best of my
                knowledge and I will inform the trainer of any changes.
              </p>

              <div className="mt-6 space-y-3">
                <p><strong>Signature:</strong> ___________________________</p>
                <p><strong>Date:</strong> ___________________________</p>
              </div>
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
                Is this medical advice?
              </div>
              <p className="mt-2">
                No. This is a screening template to document health disclosures.
              </p>
            </div>

            <div>
              <div className="font-medium text-slate-900">
                Should I combine this with other documents?
              </div>
              <p className="mt-2">
                Many trainers use screening, consent, and service terms together
                as part of a structured onboarding process.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-12 border-slate-200" />

        {/* Footer Links */}
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
                href="/templates/personal-trainer-waiver-form-uk"
                className="underline underline-offset-4"
              >
                Personal Trainer Waiver Template UK
              </a>
            </li>
            <li>
              <a
                href="/templates/personal-trainer-terms-and-conditions-uk"
                className="underline underline-offset-4"
              >
                Personal Trainer Terms and Conditions Template UK
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </main>
  );
}