"use client";

import { useMemo, useState } from "react";

export default function PreviewActions({ draftId }: { draftId: string }) {
  const [ack, setAck] = useState(false);
  const [loading, setLoading] = useState(false);
  const disabled = useMemo(() => !ack || loading, [ack, loading]);

  async function handlePay() {
    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ draftId }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Checkout failed");

      // redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (e: any) {
      alert(e.message);
      setLoading(false);
    }
  }

  return (
    <div className="mt-6 border rounded-lg p-4">
      <div className="flex gap-3 flex-wrap">
        <a
          href="/client-onboarding-pack/build"
          className="px-4 py-2 border rounded"
        >
          Edit Answers
        </a>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={ack}
            onChange={(e) => setAck(e.target.checked)}
          />
          I confirm the details are correct and I understand edits are locked after payment.
        </label>

        <button
          onClick={handlePay}
          disabled={disabled}
          className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
        >
          {loading ? "Redirecting..." : "Pay & Generate PDF"}
        </button>
      </div>
    </div>
  );
}