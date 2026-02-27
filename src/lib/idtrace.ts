export function idTrace(stage: string, draftId: unknown) {
  const s = typeof draftId === "string" ? draftId : String(draftId ?? "");
  console.log("[IDTRACE]", stage, {
    draftId: s,
    len: s.length,
    head: s.slice(0, 8),
    tail: s.slice(-12),
  });
}
