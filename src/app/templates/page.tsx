export const metadata = {
  title: "Personal Trainer Templates UK",
  description:
    "Download-ready personal trainer templates for UK coaches: contract, waiver, PAR-Q, and terms & conditions. Preview instantly and unlock the full onboarding pack.",
};

export default function TemplatesHubPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight">
        Personal Trainer Templates UK
      </h1>

      <p className="mt-3 text-slate-700">
        Preview each template instantly. Unlock the full onboarding pack when you’re ready.
      </p>

      <ul className="mt-8 space-y-3 text-base">
        <li>
          <a className="underline underline-offset-4" href="/">
            Personal Trainer Contract Template UK
          </a>
        </li>

        <li>
          <a className="underline underline-offset-4" href="/templates/personal-trainer-waiver-form-uk">
            Personal Trainer Waiver Template UK
          </a>
        </li>

        <li>
          <a className="underline underline-offset-4" href="/templates/personal-trainer-par-q-form-uk">
            PAR-Q Form UK (Personal Trainer)
          </a>
        </li>

        <li>
          <a className="underline underline-offset-4" href="/templates/personal-trainer-terms-and-conditions-uk">
            Personal Trainer Terms & Conditions Template UK
          </a>
        </li>
      </ul>

      <div className="mt-10">
        <a className="inline-block rounded-lg bg-black px-4 py-2 text-white" href="/client-onboarding-pack">
          Build your full onboarding pack
        </a>
      </div>
    </main>
  );
}
