import AgreementForm from "@/components/agreement/AgreementForm";

export default function BuildPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold mb-8">
          Build Your Client Onboarding Agreement
        </h1>

        <AgreementForm />
      </div>
    </main>
  );
}