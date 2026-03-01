"use client";

import { useEffect, useState } from "react";

type ApiResp =
  | { status: "not_found" }
  | { status: "draft" | "locked" | "fulfilled"; draftId: string; fulfilledAt: number | null };

export default function StatusPoller({ draftId }: { draftId: string }) {
  const [status, setStatus] = useState<string>("loading");
  const [attempts, setAttempts] = useState<number>(0);

  useEffect(() => {
    let alive = true;
    let t: ReturnType<typeof setTimeout> | null = null;

    async function tick() {
      try {
        const res = await fetch(
          `/api/draft-status?draftId=${encodeURIComponent(draftId)}`,
          { cache: "no-store" }
        );
        const data = (await res.json()) as ApiResp;

        if (!alive) return;

        setAttempts((a) => a + 1);

        if (data.status === "not_found") {
          setStatus("not_found");
          return;
        }

        setStatus(data.status);

        if (data.status === "fulfilled") return;
      } catch {
        if (!alive) return;
        setAttempts((a) => a + 1);
        setStatus("error");
      }

      // Try for ~60 seconds (30 * 2s)
      if (attempts >= 30) return;

      t = setTimeout(tick, 2000);
    }

    tick();

    return () => {
      alive = false;
      if (t) clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draftId]);

  if (status === "loading") return <p>Checking payment status…</p>;
  if (status === "error")
    return <p>Couldn’t confirm yet — refresh in a moment.</p>;
  if (status === "not_found") return <p>Draft not found.</p>;

  if (status === "fulfilled") {
    return <p>Your agreement is confirmed. (PDF/email next step)</p>;
  }

  return <p>Processing payment… this can take a few seconds.</p>;
}