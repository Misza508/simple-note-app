import { useQuery } from "@tanstack/react-query";
import { fetchAllNotes } from "../api/fetchAllNotes";
import type { Note } from "../schema";

export const useNotesQuery = () => {
  const query = useQuery<Note[]>({
    queryKey: ["notes"],
    queryFn: () => fetchAllNotes(),
  });

  return query;
};
