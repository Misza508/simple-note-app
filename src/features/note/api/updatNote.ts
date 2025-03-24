import type { Note } from "../schema";

export const updateNote = async (body: Note): Promise<Note | undefined> => {
  try {
    const res = await fetch(`/api/notes`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
