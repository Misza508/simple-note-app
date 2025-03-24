import { noteSchema, type CreateNote, type Note } from "@/features";
import { getRandomNumber } from "@/lib/getRandomNumber";
import { delay, http, HttpResponse } from "msw";
import { notes } from "./data/notes";

import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

export const createNoteHandler = () => {
  const _notes = notes;
  return [
    http.get(`/api/notes`, async () => {
      await delay(getRandomNumber());
      return HttpResponse.json(_notes);
    }),

    http.get(`/api/notes/:id`, async ({ params }) => {
      const { id: noteId } = params;
      await delay(getRandomNumber());
      const note = _notes.filter(({ id }) => id === noteId)[0];
      return HttpResponse.json(note);
    }),
    http.post(`/api/notes`, async ({ request }) => {
      const body = (await request.json()) as CreateNote;
      try {
        const data = noteSchema.parse({
          ...body,
          id: uuidv4(),
          createdAt: new Date().toDateString(),
        });
        _notes.push(data);
        return HttpResponse.json(data, { status: 201 });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return HttpResponse.json(error.errors, { status: 409 });
        }
        return HttpResponse.json(
          { message: "Something went wrong" },
          { status: 500 }
        );
      }
    }),
    http.patch(`/api/notes`, async ({ request }) => {
      const body = (await request.json()) as Note;
      const index = _notes.findIndex(({ id }) => id === body.id);
      const note = _notes[index];

      if (!note) {
        return HttpResponse.json(
          { message: `Note not found` },
          { status: 404 }
        );
      }

      try {
        const data = noteSchema.parse({
          ...note,
          createdAt: new Date(note.createdAt).toString(),
        });

        _notes[index] = data;

        return HttpResponse.json(data, { status: 202 });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return HttpResponse.json(error.errors, { status: 409 });
        }
        return HttpResponse.json(
          { message: "Something went wrong" },
          { status: 500 }
        );
      }
    }),
  ];
};

export const noteHandlers = createNoteHandler();
