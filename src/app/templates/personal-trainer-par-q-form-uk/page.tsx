// src/app/templates/personal-trainer-par-q-form-uk/page.tsx

import { EmailCaptureForm } from "@/components/EmailCaptureForm";

export const metadata = {
  title: "Personal Trainer PAR-Q Form UK (Editable + Free via Email)",
  description:
    "Personal trainer PAR-Q form UK for client health screening before 1-to-1 sessions. Printable + editable template. Get the editable version by email.",
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
          Personal Trainer PAR-Q Form UK
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-slate-700">
          Use this to screen clients for medical
          risk before starting 1-to-1 training sessions. It helps you capture
          health disclosures clearly, spot red flags early, and document consent
          in a professional way.
        </p>

        <div className="mt-6 text-sm text-slate-600 space-y-1">
          <div>✓ Pre-exercise health screening format</div>
          <div>✓ Suitable for UK self-employed PT onboarding</div>
          <div>✓ Printable + editable version</div>
        </div>

        {/* Top CTA */}
        <section className="mt-10 border border-slate-300 bg-white p-8">
          <h2 className="text-base font-semibold text-slate-900">
            Email the editable PAR-Q form
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Get the Google Docs / Word version so you can edit placeholders and
            keep a clean copy for each client.
          </p>

          <EmailCaptureForm templateId="parq" />

          <p className="mt-4 text-xs text-slate-500">
            No spam. No urgency tricks. Just the template.
          </p>
        </section>

        <hr className="my-12 border-slate-300" />

        {/* What’s included */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            What this PAR-Q form includes
          </h2>
          <ul className="mt-6 list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
            <li>Client personal details section</li>
            <li>Health conditions checklist (clear yes/no)</li>
            <li>Injury history disclosure</li>
            <li>Medication declaration</li>
            <li>Trigger wording for “seek GP clearance if needed”</li>
            <li>Client declaration + signature/date section</li>
          </ul>
        </section>

        <hr className="my-12 border-slate-300" />

        {/* How to use */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            How to use it
          </h2>
          <ol className="mt-6 list-decimal pl-6 space-y-2 text-slate-700 leading-relaxed">
            <li>Send the form before the first paid session (or have it ready on arrival).</li>
            <li>Ask the client to complete it honestly and in full.</li>
            <li>Review answers together and clarify anything unclear.</li>
            <li>
              If any answers flag risk, pause and request appropriate clearance
              before proceeding.
            </li>
            <li>Store a signed copy (digital or printed) with your onboarding docs.</li>
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
                Is this medical advice?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                No. It’s a screening template to help document health disclosures.
                If something is flagged, use sensible next steps (e.g. clearance)
                based on your process.
              </p>
            </div>

            <div>
              <div className="font-medium text-slate-900">
                Should I use this with a contract and waiver?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Usually, yes. PAR-Q covers health screening; a contract covers
                terms and cancellations; a waiver can cover informed risk and
                limitations. Use only what matches your real onboarding.
              </p>
            </div>

            <div>
              <div className="font-medium text-slate-900">
                Can I print it?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Yes. The layout is designed to be printable and also easy to
                fill digitally.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-14 border border-slate-300 bg-white p-8">
          <h2 className="text-base font-semibold text-slate-900">
            Want the editable PAR-Q form?
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Enter your email and we’ll send it.
          </p>

          <EmailCaptureForm templateId="parq" />
        </section>
      </div>
    </main>
  );
}