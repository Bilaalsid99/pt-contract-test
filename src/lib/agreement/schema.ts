import type { AgreementAnswers } from "@/types/agreement";

export function validateAnswers(input: any): AgreementAnswers {
  const errors: string[] = [];

  const trainerName = String(input?.trainerName ?? "").trim();
  const businessName = String(input?.businessName ?? "").trim();
  const trainerEmail = String(input?.trainerEmail ?? "").trim();

  const clientFullName = String(input?.clientFullName ?? "").trim();
  const clientEmail = String(input?.clientEmail ?? "").trim();

  const trainingType = String(input?.trainingType ?? "").trim();
  const sessionLocation = String(input?.sessionLocation ?? "").trim();

  const sessionPrice = String(input?.sessionPrice ?? "").trim();
  const cancellationNoticeHoursRaw = input?.cancellationNoticeHours;

  const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  if (!trainerName) errors.push("trainerName is required");
  if (!trainerEmail || !emailOk(trainerEmail)) errors.push("trainerEmail is invalid");

  if (!clientFullName) errors.push("clientFullName is required");
  if (!clientEmail || !emailOk(clientEmail)) errors.push("clientEmail is invalid");

  const trainingTypeAllowed = ["online", "in_person", "hybrid"] as const;
  if (!trainingTypeAllowed.includes(trainingType as any)) {
    errors.push("trainingType must be online, in_person, or hybrid");
  }

  if (!sessionPrice) errors.push("sessionPrice is required");

  const cancellationNoticeHours = Number(cancellationNoticeHoursRaw);
  if (!Number.isFinite(cancellationNoticeHours) || cancellationNoticeHours < 0) {
    errors.push("cancellationNoticeHours must be a number >= 0");
  }

  // location required for in-person / hybrid
  if ((trainingType === "in_person" || trainingType === "hybrid") && !sessionLocation) {
    errors.push("sessionLocation is required for in_person or hybrid");
  }

  if (errors.length) {
    const err = new Error(errors.join("; "));
    (err as any).status = 400;
    throw err;
  }

  return {
    trainerName,
    businessName: businessName || undefined,
    trainerEmail,
    clientFullName,
    clientEmail,
    trainingType: trainingType as AgreementAnswers["trainingType"],
    sessionLocation: sessionLocation || undefined,
    sessionPrice,
    cancellationNoticeHours,
  };
}