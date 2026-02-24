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
          <div className="text-sm text-slate-600">Liability Waiver Template</div>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-6 py-12">
        {/* H1 */}
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Personal Trainer Waiver Template UK
        </h1>

        {/* Opening paragraph */}
        <p className="mt-5 text-lg leading-relaxed text-slate-700">
          A personal trainer waiver records that a client understands the risks
          of exercise and agrees to participate voluntarily. It supports
          informed participation alongside screening and service terms before
          training begins.
        </p>

        <hr className="my-12 border-slate-300" />

        {/* What this document covers */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            What this waiver covers
          </h2>

          <ul className="mt-6 list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
            <li>Client details and emergency contact</li>
            <li>Plain-English risk acknowledgement for exercise participation</li>
            <li>Confirmation the client has disclosed relevant medical history</li>
            <li>Agreement to follow trainer instructions and stop if requested</li>
            <li>Client commitment to stop if pain, dizziness, or unusual symptoms occur</li>
            <li>Optional photo/video consent line</li>
            <li>Client declaration, signature, and date</li>
          </ul>

          <p className="mt-6 text-sm text-slate-600">
            Note: A waiver can support informed participation, but it does not
            remove responsibility for negligence or override legal obligations.
          </p>
        </section>

        <hr className="my-12 border-slate-300" />

        {/* When trainers use it */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            When trainers use a waiver
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            UK personal trainers typically use a waiver:
          </p>

          <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
            <li>Before the first paid session</li>
            <li>When working with higher-intensity training or new modalities</li>
            <li>When starting outdoor sessions or sessions in non-gym environments</li>
            <li>When a client returns after a long break (as part of re-onboarding)</li>
          </ul>
        </section>

        <hr className="my-12 border-slate-300" />

        {/* Common mistakes */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Common mistakes
          </h2>

          <ul className="mt-6 list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
            <li>Using a waiver without health screening (PAR-Q) first</li>
            <li>Assuming a waiver removes all liability</li>
            <li>Using overly aggressive wording instead of clear informed participation</li>
            <li>Not ensuring the client reads and signs before training begins</li>
            <li>Missing an emergency contact or basic client details</li>
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
            Below is a plain-English waiver style template suitable for UK
            personal training onboarding. Adapt it to match your services and
            environment.
          </p>

          {/* Preview box (replace with your full waiver text) */}
          <div className="mt-6 border border-slate-300 bg-white p-6 text-sm text-slate-700 leading-relaxed">
            <p className="font-medium text-slate-900">
              Personal Training Waiver (Template)
            </p>

            <p className="mt-4">
              <span className="font-medium">Client name:</span>{" "}
              <span className="italic">[Full name]</span>
              <br />
              <span className="font-medium">Emergency contact:</span>{" "}
              <span className="italic">[Name + phone number]</span>
              <br />
              <span className="font-medium">Date:</span>{" "}
              <span className="italic">[DD/MM/YYYY]</span>
            </p>

            <p className="mt-4">
              <span className="font-medium">Risk acknowledgement:</span> I
              understand that physical exercise involves inherent risks,
              including (but not limited to) strains, sprains, dizziness,
              fainting, and other injury. I confirm I am participating
              voluntarily.
            </p>

            <p className="mt-3">
              <span className="font-medium">Health disclosure:</span> I confirm I
              have disclosed relevant health information to the trainer and will
              inform the trainer of any changes.
            </p>

            <p className="mt-3">
              <span className="font-medium">Responsibilities:</span> I agree to
              follow instructions, use equipment safely, and stop immediately if
              I feel pain, dizziness, or unusual symptoms (and inform the
              trainer).
            </p>

            <p className="mt-3">
              <span className="font-medium">Limitations:</span> I understand this
              waiver supports informed participation and does not exclude
              liability where unlawful to do so.
            </p>

            <p className="mt-4">
              <span className="font-medium">Optional media consent:</span> I{" "}
              <span className="italic">do / do not</span> consent to photos or
              video being taken during sessions for coaching or marketing
              purposes.{" "}
              <span className="italic">[Delete as needed]</span>
            </p>

            <p className="mt-4">
              <span className="font-medium">Client signature:</span>{" "}
              <span className="italic">[Sign]</span> &nbsp;{" "}
              <span className="font-medium">Date:</span>{" "}
              <span className="italic">[DD/MM/YYYY]</span>
            </p>

            <p className="mt-4 text-xs text-slate-500">
              Replace the preview content above with your full waiver template
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
            <li>Use alongside your PAR-Q and service terms/contract.</li>
            <li>Have the client complete and sign before the first paid session.</li>
            <li>Review key points (risk, stopping rules, disclosure) briefly with the client.</li>
            <li>Store a signed copy securely with your onboarding records.</li>
            <li>Update or re-confirm if the client returns after a long break.</li>
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
                Does a waiver remove all liability?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                No. A waiver documents informed participation and risk
                acknowledgement, but it does not remove responsibility for
                negligence.
              </p>
            </div>

            <div>
              <div className="font-medium text-slate-900">
                Should this be used with a contract and PAR-Q?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Usually, yes. PAR-Q covers health screening; a contract covers
                service terms; a waiver supports informed participation. Use
                only what matches your real process.
              </p>
            </div>

            <div>
              <div className="font-medium text-slate-900">
                Can I print this?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Yes. It can be printed or completed digitally, depending on how
                you collect signatures.
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
                href="/templates/personal-trainer-terms-and-conditions-uk"
                className="text-slate-900 underline underline-offset-4"
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