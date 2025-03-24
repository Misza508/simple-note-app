import { z } from "zod";

export const noteSchema = z.object({
  id: z.string({ required_error: "Id is required" }).uuid(),
  title: z.string({ required_error: "Title is required" }),
  description: z.string(),
  content: z.string({ required_error: "Content is required" }),
  createdAt: z
    .string({ required_error: "Create date is required" })
    .transform((val) => new Date(val)),
});

export type Note = z.infer<typeof noteSchema>;

export const createNoteSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(3, "Min title length is 3"),
  description: z.string().min(3, "Min title length is 3"),
  content: z
    .string({ required_error: "Content is required" })
    .min(3, "Min title length is 3"),
});

export type CreateNote = z.infer<typeof createNoteSchema>;
