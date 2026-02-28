export type DraftStatus = "draft" | "locked" | "fulfilled";

export type AgreementAnswers = {
  trainerName: string;
  businessName?: string;
  trainerEmail: string;

  clientFullName: string;
  clientEmail: string;

  trainingType: "online" | "in_person" | "hybrid";
  sessionLocation?: string;

  sessionPrice: string; // keep as string in V1
  cancellationNoticeHours: number;
};


export type DraftRecord = {
  id: string;
  status: "draft" | "locked" | "fulfilled";
  createdAt: number;
  updatedAt: number;

  answers: AgreementAnswers;
  html: string;
  assembledHash: string;

  lockedAt?: number;
  lockExpiresAt?: number;
  stripeSessionId?: string;

  fulfilledAt?: number;
};