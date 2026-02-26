// src/app/templates/personal-trainer-waiver-form-uk/page.tsx

export const metadata = {
  title: "Personal Trainer Waiver Template UK",
  description:
    "Personal trainer waiver template UK to document informed participation and risk acknowledgement before training. Covers key declarations, responsibilities, optional media consent, and signatures.",
  alternates: {
    canonical: "/templates/personal-trainer-waiver-form-uk",
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
            Liability Waiver Template
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-6 py-12">
        {/* H1 */}
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Personal Trainer Waiver Template UK
        </h1>

        {/* Intro */}
        <p className="mt-6 text-lg leading-relaxed text-slate-700">
          A personal trainer waiver records that a client understands the risks
          of exercise and agrees to participate voluntarily. It supports
          informed participation alongside screening and service terms.
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

        {/* What this waiver covers */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900">
            What this waiver covers
          </h2>

          <ul className="mt-6 list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
            <li>Client details and emergency contact</li>
            <li>Plain-English risk acknowledgement</li>
            <li>Confirmation of health disclosure</li>
            <li>Agreement to follow trainer instructions</li>
            <li>Client responsibility to stop if symptoms occur</li>
            <li>Optional media consent line</li>
            <li>Client declaration and signature</li>
          </ul>

          <p className="mt-6 text-sm text-slate-600">
            A waiver supports informed participation but does not remove
            responsibility for negligence.
          </p>
        </section>

        <hr className="my-12 border-slate-200" />

        {/* Template Section */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900">
            Template Preview
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Below is a structured waiver template suitable for UK personal training.
          </p>

          {/* Document Box */}
          <div className="mt-8 rounded-md border border-slate-300 bg-white p-8 shadow-sm text-sm leading-relaxed text-slate-800">

            <div className="text-center">
              <div className="text-base font-semibold text-slate-900">
                Personal Training Waiver
              </div>
              <div className="mt-1 text-xs text-slate-500">
                Informed Participation & Risk Acknowledgement
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <p><strong>Client Name:</strong> ___________________________</p>
              <p><strong>Emergency Contact:</strong> ___________________________</p>
              <p><strong>Date:</strong> ___________________________</p>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-slate-900">
                1. Risk Acknowledgement
              </h3>
              <p className="mt-2">
                I understand that physical exercise involves inherent risks,
                including strains, sprains, dizziness, fainting, and other injury.
                I confirm I am participating voluntarily.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-slate-900">
                2. Health Disclosure
              </h3>
              <p className="mt-2">
                I confirm I have disclosed relevant health information and will
                inform the trainer of any changes.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-slate-900">
                3. Responsibilities
              </h3>
              <p className="mt-2">
                I agree to follow instructions, use equipment safely, and stop
                immediately if I feel pain, dizziness, or unusual symptoms.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-slate-900">
                4. Optional Media Consent
              </h3>
              <p className="mt-2">
                I do / do not consent to photos or video being taken during
                sessions for coaching or marketing purposes.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="font-semibold text-slate-900">
                Signature
              </h3>
              <div className="mt-6 space-y-3">
                <p>Client Signature: ___________________________</p>
                <p>Date: ___________________________</p>
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
                Does a waiver remove all liability?
              </div>
              <p className="mt-2">
                No. It documents informed participation but does not remove
                responsibility for negligence.
              </p>
            </div>

            <div>
              <div className="font-medium text-slate-900">
                Should this be used with screening and a contract?
              </div>
              <p className="mt-2">
                Usually yes. Screening covers health risks and a contract
                covers service terms.
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