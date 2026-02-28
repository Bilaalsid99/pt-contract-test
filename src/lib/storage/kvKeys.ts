export const kvKeys = {
  draft: (draftId: string) => `draft:${draftId}`,
  draftLock: (draftId: string) => `draft:${draftId}:lock`,
  fulfillOnce: (sessionId: string) => `fulfill:${sessionId}`,
  rate: (bucket: string, ip: string) => `rate:${bucket}:${ip}`,
} as const;