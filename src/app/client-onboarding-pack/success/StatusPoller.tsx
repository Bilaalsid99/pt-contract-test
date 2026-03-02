"use client";

import { useEffect, useState } from "react";

type ApiResp =
  | { status: "not_found"; delivered: boolean }
  | {
      status: "draft" | "locked" | "fulfilled";
      delivered: boolean;
      draftId: string;
      fulfilledAt: number | null;
    };

export default function StatusPoller({ draftId }: { draftId: string }) {
  const [status, setStatus] = useState<
    "loading" | "error" | "not_found" | "draft" | "locked" | "fulfilled"
  >("loading");
  const [delivered, setDelivered] = useState<boolean>(false);
  const [attempts, setAttempts] = useState<number>(0);

  useEffect(() => {
    let alive = true;
    let t: ReturnType<typeof setTimeout> | null = null;
    let localAttempts = 0;

    async function tick() {
      try {
        const res = await fetch(
          `/api/draft-status?draftId=${encodeURIComponent(draftId)}`,
          { cache: "no-store" }
        );
        const data = (await res.json()) as ApiResp;

        if (!alive) return;

        localAttempts += 1;
        setAttempts(localAttempts);

        if (data.status === "not_found") {
          setStatus("not_found");
          setDelivered(false);
          return;
        }

        setStatus(data.status);
        setDelivered(Boolean((data as any).delivered));

        // Stop polling only once delivery is confirmed
        if (data.status === "fulfilled" && (data as any).delivered) return;
      } catch {
        if (!alive) return;
        localAttempts += 1;
        setAttempts(localAttempts);
        setStatus("error");
      }

      // Try for ~60 seconds (30 * 2s)
      if (localAttempts >= 30) return;

      t = setTimeout(tick, 2000);
    }

    tick();

    return () => {
      alive = false;
      if (t) clearTimeout(t);
    };
  }, [draftId]);

  if (status === "loading") return <p>Checking payment status…</p>;
  if (status === "error")
    return <p>Couldn’t confirm yet — refresh in a moment.</p>;
  if (status === "not_found") return <p>Draft not found.</p>;

  if (status === "fulfilled") {
    if (!delivered) {
      return <p>Payment confirmed — generating and emailing your PDF now…</p>;
    }
    return <p>All done — your PDF has been emailed to you.</p>;
  }

  return <p>Processing payment… this can take a few seconds.</p>;
}