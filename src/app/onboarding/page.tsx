export default function OnboardingPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">
        Client Onboarding for Personal Trainers (UK)
      </h1>

      <p className="mb-6">
        Professional client onboarding is the structured process a personal
        trainer follows before training begins. It ensures expectations are
        clear, health risks are screened, and responsibilities are documented.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        What client onboarding normally includes
      </h2>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Health screening (PAR-Q or medical questionnaire)</li>
        <li>Informed consent and risk acknowledgement</li>
        <li>Service terms and cancellation policies</li>
        <li>Agreement wording signed before sessions begin</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Why documents work together
      </h2>

      <p className="mb-6">
        While each document can exist separately, many trainers use them in a
        structured order. Screening comes first, terms are agreed second, and
        signatures confirm understanding before training starts.
      </p>

      <p className="mb-6">
        This structured approach helps reduce misunderstandings and keeps both
        trainer and client aligned from the beginning.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Next step
      </h2>

      <p>
        A structured onboarding agreement system is currently in development.
        For now, you can review the individual template documents and apply
        them appropriately to your services.
      </p>
    </main>
  );
}