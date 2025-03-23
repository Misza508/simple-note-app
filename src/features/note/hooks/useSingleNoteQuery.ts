import { useQuery } from "@tanstack/react-query";
import { fetchSingleNotes } from "../api/fetchSingleNote";
import type { Note } from "../schema";

const getQueryKey = (id: string) => ["notes", id] as const;

export const useSingleNotesQuery = (id: string) => {
  const query = useQuery<Note>({
    queryKey: getQueryKey(id),
    queryFn: () => fetchSingleNotes({ id }),
  });

  return query;
};
