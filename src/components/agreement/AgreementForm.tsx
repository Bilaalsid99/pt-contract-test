"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AgreementForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      trainerName: formData.get("trainerName"),
      businessName: formData.get("businessName"),
      trainerEmail: formData.get("trainerEmail"),
      clientFullName: formData.get("clientFullName"),
      clientEmail: formData.get("clientEmail"),
      trainingType: formData.get("trainingType"),
      sessionLocation: formData.get("sessionLocation"),
      sessionPrice: formData.get("sessionPrice"),
      cancellationNoticeHours: Number(
        formData.get("cancellationNoticeHours")
      ),
    };

    try {
      const res = await fetch("/api/drafts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to create draft");
      }

      router.push(
        `/client-onboarding-pack/preview?draftId=${data.draftId}`
      );
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Trainer Details</h2>
        <input name="trainerName" placeholder="Trainer Name" required className="input" />
        <input name="businessName" placeholder="Business Name (optional)" className="input" />
        <input name="trainerEmail" type="email" placeholder="Trainer Email" required className="input" />
      </div>

      <div>
        <h2 className="text-lg font-semibold">Client Details</h2>
        <input name="clientFullName" placeholder="Client Full Name" required className="input" />
        <input name="clientEmail" type="email" placeholder="Client Email" required className="input" />
      </div>

      <div>
        <h2 className="text-lg font-semibold">Service Setup</h2>

        <select name="trainingType" required className="input">
          <option value="">Select Training Type</option>
          <option value="online">Online</option>
          <option value="in_person">In Person</option>
          <option value="hybrid">Hybrid</option>
        </select>

        <input
          name="sessionLocation"
          placeholder="Session Location (if applicable)"
          className="input"
        />

        <input
          name="sessionPrice"
          placeholder="Session Price (e.g. 50)"
          required
          className="input"
        />

        <input
          name="cancellationNoticeHours"
          type="number"
          placeholder="Cancellation Notice Hours (e.g. 24)"
          required
          className="input"
        />
      </div>

      {error && (
        <div className="text-red-600 text-sm">{error}</div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-black text-white rounded"
      >
        {loading ? "Generating..." : "Generate Draft"}
      </button>
    </form>
  );
}