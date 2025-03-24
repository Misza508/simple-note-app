import type { CreateNote, Note } from "../schema";

export const createNote = async (
  body: CreateNote
): Promise<Note | undefined> => {
  try {
    const res = await fetch(`/api/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
