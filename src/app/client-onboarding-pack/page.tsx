export const metadata = {
  title: "Client Onboarding for Personal Trainers (UK)",
  description:
    "How structured client onboarding works for UK personal trainers including PAR-Q screening, waivers, terms and agreement wording.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-3xl px-6 py-5 flex items-center justify-between">
          <a href="/" className="text-sm font-semibold tracking-wide text-slate-900">
            PT Templates UK
          </a>
          <div className="text-sm text-slate-500">
            Client onboarding
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-6 py-12">

        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Client Onboarding for Personal Trainers (UK)
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-slate-700">
          Professional client onboarding is the structured process a personal trainer
          follows before training begins. It ensures expectations are clear,
          health risks are screened, and responsibilities are documented.
        </p>

        <hr className="my-10 border-slate-200" />

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">
            What client onboarding normally includes
          </h2>

          <ul className="mt-6 list-disc pl-6 space-y-2 text-slate-700">
            <li>Health screening (PAR-Q or medical questionnaire)</li>
            <li>Informed consent and risk acknowledgement</li>
            <li>Service terms and cancellation policies</li>
            <li>Agreement wording signed before sessions begin</li>
          </ul>
        </section>

        <hr className="my-10 border-slate-200" />

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">
            Why documents work together
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            While each document can exist separately, many trainers use them
            in a structured order. Screening comes first, terms are agreed
            second, and signatures confirm understanding before training starts.
          </p>

          <p className="mt-4 text-slate-700 leading-relaxed">
            This structured approach helps reduce misunderstandings and keeps
            both trainer and client aligned from the beginning.
          </p>
        </section>

        <hr className="my-10 border-slate-200" />

        <section className="text-center">

          <div className="text-sm text-slate-600">
            A structured onboarding agreement generator is currently in development.
          </div>

          <div className="mt-6">
            <div className="inline-block rounded-md border border-slate-300 px-6 py-3 text-sm font-medium text-slate-400 cursor-not-allowed">
              Generate contracts — coming soon
            </div>
          </div>

          <p className="mt-6 text-sm text-slate-600">
            In the meantime you can review the individual templates below.
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <div>
              <a href="/templates/personal-trainer-contract-template-uk" className="underline underline-offset-4">
                Personal Trainer Contract Template
              </a>
            </div>

            <div>
              <a href="/templates/personal-trainer-par-q-form-uk" className="underline underline-offset-4">
                PAR-Q Form Template
              </a>
            </div>

            <div>
              <a href="/templates/personal-trainer-waiver-form-uk" className="underline underline-offset-4">
                Personal Trainer Waiver Template
              </a>
            </div>

            <div>
              <a href="/templates/personal-trainer-terms-and-conditions-uk" className="underline underline-offset-4">
                Personal Trainer Terms & Conditions
              </a>
            </div>
          </div>

        </section>

      </div>
    </main>
  );
}