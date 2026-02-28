const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function assertDraftId(input: unknown): string {
  const draftId = String(input ?? "");
  if (!UUID_RE.test(draftId)) {
    throw Object.assign(new Error("Invalid draftId"), { status: 400 });
  }
  return draftId;
}