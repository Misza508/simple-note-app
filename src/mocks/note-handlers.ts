import { getRandomNumber } from "@/lib/getRandomNumber";
import { delay, http, HttpResponse } from "msw";
import { notes } from "./data/notes";

export const noteHandlers = [
  http.get(`/api/notes`, async () => {
    await delay(getRandomNumber());
    return HttpResponse.json(notes);
  }),

  http.get(`/api/notes/:id`, async ({ params }) => {
    const { id: noteId } = params;
    await delay(getRandomNumber());
    const note = notes.filter(({ id }) => id === noteId)[0];
    return HttpResponse.json(note);
  }),
];
