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
  status: DraftStatus;

  createdAt: number;
  updatedAt: number;

  answers: AgreementAnswers;

  assembledHash: string;
  html: string;

  stripeSessionId?: string;
  fulfilledAt?: number;
};