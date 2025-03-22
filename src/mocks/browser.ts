import { setupWorker } from "msw/browser";
import { noteHandlers } from "./note-handlers";

export const worker = setupWorker(...noteHandlers);
