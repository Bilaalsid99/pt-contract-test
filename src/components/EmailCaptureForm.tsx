"use client";

import { useState } from "react";

export function EmailCaptureForm() {
  const [loading, setLoading] = useState(false);

  return (
    <form
      className="mt-5 flex flex-col gap-3 sm:flex-row"
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
          const form = e.currentTarget as HTMLFormElement;
          const formData = new FormData(form);
          const email = formData.get("email");

          const res = await fetch("/api/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          });

          if (!res.ok) {
            throw new Error("Request failed");
          }

          alert("Thanks. We'll email you shortly.");

          form.reset();
        } catch (error) {
          alert("Something went wrong. Please try again.");
        } finally {
          setLoading(false);
        }
      }}
    >
      <input
        name="email"
        type="email"
        required
        placeholder="you@example.com"
        className="w-full border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Email me the template"}
      </button>
    </form>
  );
}
