import { createNoteSchema, type CreateNote } from "@/features";
import { NoteForm } from "@/features/note/components";
import { useCreateNoteMutation } from "@/features/note/hooks/useCreateNoteMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

export const Route = createFileRoute("/notes/add-new/")({
  component: RouteComponent,
});

const initialState: CreateNote = {
  content: "",
  title: "",
  description: "",
};

function RouteComponent() {
  const form = useForm<CreateNote>({
    defaultValues: initialState,
    resolver: zodResolver(createNoteSchema),
  });
  const { mutate } = useCreateNoteMutation();

  const navigate = useNavigate();

  const handleSubmit = (value: CreateNote) => {
    mutate(value, {
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

  return (
    <div className="flex flex-col gap-6 p-10 @container">
      <h2 className="text-2xl text-primary">Add new note</h2>
      <NoteForm form={form} onSubmit={handleSubmit} />
    </div>
  );
}
