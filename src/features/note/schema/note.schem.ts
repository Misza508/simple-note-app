import { z } from "zod";

export const noteSchema = z.object({
  id: z.string({ required_error: "Id is required" }).uuid(),
  title: z.string({ required_error: "Title is required" }),
  description: z.string().optional(),
  content: z.string({ required_error: "Content is required" }),
  createdAt: z
    .string({ required_error: "Create date is required" })
    .datetime({ offset: true }),
});

export type Note = z.infer<typeof noteSchema>;
