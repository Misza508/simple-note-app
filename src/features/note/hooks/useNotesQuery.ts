import { useQuery } from "@tanstack/react-query";
import { fetchAllNotes } from "../api/fetchAllNotes";
import { notesQueryKeys } from "../notesQueryKeys";
import type { Note } from "../schema";

export const useNotesQuery = () => {
  const query = useQuery<Note[]>({
    queryKey: notesQueryKeys.ALL_NOTES,
    queryFn: () => fetchAllNotes(),
  });

  return query;
};
