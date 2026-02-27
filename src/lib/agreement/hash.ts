import crypto from "crypto";

export function hashDraft(input: { html: string; answersJson: string }): string {
  return crypto
    .createHash("sha256")
    .update(input.answersJson, "utf8")
    .update("\n---\n", "utf8")
    .update(input.html, "utf8")
    .digest("hex");
}