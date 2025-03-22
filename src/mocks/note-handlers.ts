import { http, HttpResponse } from "msw";

export const noteHandlers = [
  http.get(`/api/notes`, () => {
    return HttpResponse.json([
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
        title: "React lecture 1 - how to setup react app",
        description: "How to use vite to setup React environment",
      },
    ]);
  }),
];
