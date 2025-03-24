import { useQuery } from "@tanstack/react-query";
import { fetchSingleNotes } from "../api/fetchSingleNote";
import { notesQueryKeys } from "../notesQueryKeys";
import type { Note } from "../schema";

export const useSingleNotesQuery = (id: string) => {
  const query = useQuery<Note>({
    queryKey: notesQueryKeys.SINGLE_NOTE(id),
    queryFn: () => fetchSingleNotes({ id }),
  });

  return query;
};
