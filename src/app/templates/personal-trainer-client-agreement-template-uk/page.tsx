// src/app/templates/personal-trainer-client-agreement-template-uk/page.tsx

import { EmailCaptureForm } from "@/components/EmailCaptureForm";

export const metadata = {
  title: "Personal Trainer Client Agreement Template UK (Editable + Free via Email)",
  description:
    "Personal trainer client agreement template UK for onboarding new clients. Covers services, expectations, responsibilities and key legal protections. Printable + editable version.",
  alternates: {
    canonical: "/templates/personal-trainer-client-agreement-template-uk",
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
          <div className="text-sm text-slate-600">Client Agreement</div>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-6 py-12">
        {/* H1 */}
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Personal Trainer Client Agreement Template UK
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-slate-700">
          A structured client agreement template for UK personal trainers.
          Use this to formalise expectations, responsibilities and service terms
          before training begins.
        </p>

        <div className="mt-6 text-sm text-slate-600 space-y-1">
          <div>✓ Defines scope of training services</div>
          <div>✓ Clarifies responsibilities on both sides</div>
          <div>✓ Suitable for self-employed UK PTs</div>
        </div>

        {/* Top CTA */}
        <section className="mt-10 border border-slate-300 bg-white p-8">
          <h2 className="text-base font-semibold text-slate-900">
            Email the editable client agreement
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Get the Google Docs / Word version to customise with your business details.
          </p>

          <EmailCaptureForm templateId="client-agreement" />

          <p className="mt-4 text-xs text-slate-500">
            No spam. Just the template.
          </p>
        </section>

        <hr className="my-12 border-slate-300" />

        {/* What’s included */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            What this client agreement includes
          </h2>
          <ul className="mt-6 list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
            <li>Trainer and client details section</li>
            <li>Description of services</li>
            <li>Session structure and duration</li>
            <li>Payment terms and billing process</li>
            <li>Client responsibilities and conduct expectations</li>
            <li>Health disclosure reference (PAR-Q alignment)</li>
            <li>Limitation of liability wording</li>
            <li>Signature and agreement confirmation section</li>
          </ul>
        </section>

        <hr className="my-12 border-slate-300" />

        {/* How to use */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            How to use it
          </h2>
          <ol className="mt-6 list-decimal pl-6 space-y-2 text-slate-700 leading-relaxed">
            <li>Customise your business name, services and payment terms.</li>
            <li>Send to the client before the first paid session.</li>
            <li>Ensure the client reads and agrees before training begins.</li>
            <li>Store a signed copy digitally or in print.</li>
            <li>Keep terms consistent across all clients.</li>
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
                Is this the same as terms and conditions?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                A client agreement often incorporates terms and conditions,
                but it’s structured as a signed agreement between trainer and client.
              </p>
            </div>

            <div>
              <div className="font-medium text-slate-900">
                Do I still need a waiver?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Many PTs use a separate waiver for informed risk acknowledgment.
                Use what matches your onboarding process.
              </p>
            </div>

            <div>
              <div className="font-medium text-slate-900">
                Is this legal advice?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                No. This is a practical template. Consider legal review for complex cases.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-14 border border-slate-300 bg-white p-8">
          <h2 className="text-base font-semibold text-slate-900">
            Want the editable client agreement?
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Enter your email and we’ll send it.
          </p>

          <EmailCaptureForm templateId="client-agreement" />
        </section>
      </div>
    </main>
  );
}