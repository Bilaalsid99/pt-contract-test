// src/lib/storage/kvKeys.ts

export const kvKeys = {
  // Draft record
  draft: (draftId: string) => `draft:${draftId}`,

  // Temporary lock used during checkout + session association
  draftLock: (draftId: string) => `draft:${draftId}:lock`,

  // Ensures Stripe webhook fulfillment runs only once per session
  fulfillOnce: (sessionId: string) => `fulfill:${sessionId}`,

  // Ensures PDF + email delivery runs only once per draft
  deliverOnce: (draftId: string) => `deliver:${draftId}`,

  // Rate limiting buckets
  rate: (bucket: string, ip: string) => `rate:${bucket}:${ip}`,
} as const;