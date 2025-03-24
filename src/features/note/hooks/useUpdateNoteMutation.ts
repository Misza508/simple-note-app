import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateNote } from "../api/updatNote";
import { notesQueryKeys } from "../notesQueryKeys";

export const useUpdateNoteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateNote,
    onSuccess: (data) => {
      if (!data) return;
      queryClient.invalidateQueries({
        queryKey: [
          notesQueryKeys.ALL_NOTES,
          notesQueryKeys.SINGLE_NOTE(data.id),
        ],
      });
      //TODO Set cache
    },
  });
};
