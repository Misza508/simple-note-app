export const notesQueryKeys = {
  ALL_NOTES: ["notes"] as const,
  SINGLE_NOTE: (id: string) => ["notes", id] as const,
} as const;
