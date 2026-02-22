// src/app/templates/personal-trainer-waiver-form-uk/page.tsx

import { EmailCaptureForm } from "@/components/EmailCaptureForm";

export const metadata = {
  title: "Personal Trainer Waiver Form UK (Editable + Printable)",
  description:
    "Personal trainer waiver form UK to confirm risk acknowledgement and participation terms before training. Printable + editable template for UK PTs. Get the editable version by email.",
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
          Personal Trainer Waiver Form UK
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-slate-700">
          Use this to record that the client
          understands the risks of exercise and agrees to participate
          voluntarily. This template supports onboarding alongside a PT contract
          and PAR-Q form.
        </p>

        <div className="mt-6 text-sm text-slate-600 space-y-1">
          <div>✓ Plain-English risk acknowledgement</div>
          <div>✓ Suitable for 1-to-1 PT sessions</div>
          <div>✓ Printable + editable template</div>
        </div>

        {/* Top CTA */}
        <section className="mt-10 border border-slate-300 bg-white p-8">
          <h2 className="text-base font-semibold text-slate-900">
            Email the editable waiver form
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Get the Google Docs / Word version so you can customise details and
            reuse it for each client.
          </p>

          <EmailCaptureForm templateId="waiver" />

          <p className="mt-4 text-xs text-slate-500">
            Note: A waiver supports risk acknowledgement, but it does not remove
            responsibility for negligence.
          </p>
        </section>

        <hr className="my-12 border-slate-300" />

        {/* What’s included */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            What this waiver includes
          </h2>
          <ul className="mt-6 list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
            <li>Client details + emergency contact</li>
            <li>Plain-English exercise risk acknowledgement</li>
            <li>Confirmation the client has disclosed relevant medical history</li>
            <li>Agreement to follow trainer instructions and stop if requested</li>
            <li>Client consent to stop if pain/dizziness occurs</li>
            <li>Optional photo/video consent line</li>
            <li>Client signature + date section</li>
          </ul>
        </section>

        <hr className="my-12 border-slate-300" />

        {/* When to use */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            When to use a waiver in UK PT onboarding
          </h2>
          <p className="mt-6 text-slate-700 leading-relaxed">
            Use a waiver before the first paid session, alongside your contract
            and PAR-Q. It documents that the client understands training involves
            physical risk and agrees to participate voluntarily.
          </p>
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
                Does a waiver remove all liability?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                No. A waiver documents informed participation and risk
                acknowledgement, but it does not remove responsibility for
                negligence. Use it as part of a sensible onboarding process.
              </p>
            </div>

            <div>
              <div className="font-medium text-slate-900">
                Should this be used with a contract and PAR-Q?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Usually, yes. PAR-Q covers health screening; a contract covers
                terms (fees, cancellations); a waiver supports informed risk and
                participation. Use only what matches your real process.
              </p>
            </div>

            <div>
              <div className="font-medium text-slate-900">
                Can I print this?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Yes. It’s designed to be printable and also easy to fill
                digitally.
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
            Enter your email and we’ll send the waiver template.
          </p>

          <EmailCaptureForm templateId="waiver" />
        </section>
      </div>
    </main>
  );
}