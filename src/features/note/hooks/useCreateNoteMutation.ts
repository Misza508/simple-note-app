import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote } from "../api/createNote";
import { notesQueryKeys } from "../notesQueryKeys";

export const useCreateNoteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: notesQueryKeys.ALL_NOTES });
      //TODO Set cache
    },
  });
};
