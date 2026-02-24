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
          <div className="text-sm text-slate-600">Health Screening Template</div>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-6 py-12">
        {/* H1 */}
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Personal Trainer PAR-Q Form Template UK
        </h1>

        {/* Opening paragraph */}
        <p className="mt-5 text-lg leading-relaxed text-slate-700">
          A PAR-Q form is used to screen clients for health risks before training
          begins. It helps you record key disclosures, identify potential red
          flags, and document that a client has answered health questions before
          starting exercise.
        </p>

        <hr className="my-12 border-slate-300" />

        {/* What this document covers */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            What this form covers
          </h2>

          <ul className="mt-6 list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
            <li>Client personal details</li>
            <li>Health conditions checklist (yes/no)</li>
            <li>Injury history disclosure</li>
            <li>Medication declaration</li>
            <li>Prompt wording for seeking appropriate clearance if needed</li>
            <li>Client declaration, signature, and date</li>
          </ul>
        </section>

        <hr className="my-12 border-slate-300" />

        {/* When trainers use it */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            When trainers use a PAR-Q form
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            UK personal trainers commonly use a PAR-Q form:
          </p>

          <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
            <li>Before the first paid session</li>
            <li>Before returning a client to training after time off</li>
            <li>When starting a new programme block</li>
            <li>When taking on online coaching clients (as part of onboarding)</li>
          </ul>
        </section>

        <hr className="my-12 border-slate-300" />

        {/* Common mistakes */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Common mistakes
          </h2>

          <ul className="mt-6 list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
            <li>Collecting a PAR-Q but not reading or clarifying the answers</li>
            <li>Starting training before the form is completed and signed</li>
            <li>Not recording follow-up notes when something is flagged</li>
            <li>Using outdated details without periodic updates</li>
            <li>Storing forms in an insecure way</li>
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
            Below is a structured PAR-Q style screening template suitable for UK
            personal training onboarding. Adapt the wording to match your
            process and record-keeping.
          </p>

          {/* Preview box (replace with your full PAR-Q template text) */}
          <div className="mt-6 border border-slate-300 bg-white p-6 text-sm text-slate-700 leading-relaxed">
            <p className="font-medium text-slate-900">
              PAR-Q / Health Screening Form (Template)
            </p>

            <p className="mt-4">
              <span className="font-medium">Client name:</span>{" "}
              <span className="italic">[Full name]</span>
              <br />
              <span className="font-medium">Date of birth:</span>{" "}
              <span className="italic">[DD/MM/YYYY]</span>
              <br />
              <span className="font-medium">Date completed:</span>{" "}
              <span className="italic">[DD/MM/YYYY]</span>
            </p>

            <p className="mt-4 font-medium text-slate-900">Health questions</p>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>
                Has a doctor ever said you have a heart condition or should only
                do physical activity recommended by a doctor?{" "}
                <span className="italic">Yes / No</span>
              </li>
              <li>
                Do you feel pain in your chest during physical activity?{" "}
                <span className="italic">Yes / No</span>
              </li>
              <li>
                In the past month, have you had chest pain when not doing
                physical activity? <span className="italic">Yes / No</span>
              </li>
              <li>
                Do you lose balance because of dizziness or ever lose
                consciousness? <span className="italic">Yes / No</span>
              </li>
              <li>
                Do you have a bone or joint problem that could be made worse by
                exercise? <span className="italic">Yes / No</span>
              </li>
              <li>
                Are you currently taking medication for blood pressure or a
                heart condition? <span className="italic">Yes / No</span>
              </li>
              <li>
                Is there any other reason why you should not do physical
                activity? <span className="italic">Yes / No</span>
              </li>
            </ul>

            <p className="mt-4">
              <span className="font-medium">If you answered “Yes” to any:</span>{" "}
              please provide details below and confirm what steps you will take
              before starting training (e.g. appropriate clearance if needed).
            </p>

            <p className="mt-3">
              <span className="italic">[Client notes / details]</span>
            </p>

            <p className="mt-4">
              <span className="font-medium">Client declaration:</span> I confirm
              the information provided is accurate to the best of my knowledge
              and I will inform the trainer of any changes.
            </p>

            <p className="mt-3">
              <span className="font-medium">Client signature:</span>{" "}
              <span className="italic">[Sign]</span> &nbsp;{" "}
              <span className="font-medium">Date:</span>{" "}
              <span className="italic">[DD/MM/YYYY]</span>
            </p>

            <p className="mt-4 text-xs text-slate-500">
              Replace the preview content above with your full PAR-Q template
              text.
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
            <li>Send the form before the first paid session (or on arrival).</li>
            <li>Ask the client to complete it honestly and in full.</li>
            <li>Review answers and clarify anything unclear.</li>
            <li>
              If any answers flag risk, pause and request appropriate clearance
              before proceeding.
            </li>
            <li>Store a signed copy securely with your onboarding records.</li>
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
                Is this medical advice?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                No. It’s a screening template to document health disclosures.
                If something is flagged, follow sensible next steps based on
                your process.
              </p>
            </div>

            <div>
              <div className="font-medium text-slate-900">
                Should I use this with a contract and waiver?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Often, yes. A PAR-Q covers health screening; a contract covers
                service terms; a waiver can cover risk acknowledgement. Use only
                what matches your real onboarding process.
              </p>
            </div>

            <div>
              <div className="font-medium text-slate-900">
                Can I print it?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Yes. It can be printed or completed digitally, depending on how
                you collect client information.
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
              <a
                href="/"
                className="text-slate-900 underline underline-offset-4"
              >
                Personal Trainer Contract Template UK
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
            <li>
              <a
                href="/templates/personal-trainer-terms-and-conditions-uk"
                className="text-slate-900 underline underline-offset-4"
              >
                Personal Trainer Terms and Conditions Template UK
              </a>
            </li>
          </ul>

          <p className="mt-6 text-xs text-slate-500">
            Note: If your existing template routes use different slugs, update
            the links above to match your current folder names under{" "}
            <span className="font-mono">src/app/templates</span>.
          </p>
        </footer>
      </div>
    </main>
  );
}