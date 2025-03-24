import ErrorComponent from "@/components/Error/Error";
import Loading from "@/components/Loading/Loading";
import NotFound from "@/components/NotFound/NotFound";
import { createNoteSchema, type CreateNote, type Note } from "@/features";
import { NoteForm } from "@/features/note/components";

import { useSingleNotesQuery } from "@/features/note/hooks/useSingleNoteQuery";
import { useUpdateNoteMutation } from "@/features/note/hooks/useUpdateNoteMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

export const Route = createFileRoute("/notes/edit/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  const { data: note, isError, isLoading } = useSingleNotesQuery(id);
  const navigate = useNavigate();

  const form = useForm<CreateNote>({
    defaultValues: note,
    resolver: zodResolver(createNoteSchema),
  });

  const { mutate } = useUpdateNoteMutation();

  const handleSubmit = (value: CreateNote) => {
    const body = { ...note, ...value } as Note;
    mutate(body, {
      onSuccess: (data) => {
        console.log(data);
        if (data && data.id) {
          navigate({
            to: "/notes/$id",
            params: { id: data.id },
          });
        }
      },
    });
  };

  if (isLoading) return <Loading />;
  if (!note) return <NotFound />;
  if (isError) return <ErrorComponent />;

  return (
    <div className="flex flex-col gap-6 p-10">
      <h2 className="text-2xl text-primary">Edit note</h2>
      <NoteForm form={form} onSubmit={handleSubmit} />
    </div>
  );
}
