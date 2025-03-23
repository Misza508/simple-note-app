import { createFileRoute } from "@tanstack/react-router";

import ErrorComponent from "@/components/Error/Error";
import Loading from "@/components/Loading/Loading";
import NotFound from "@/components/NotFound/NotFound";
import { NoteDetails } from "@/features/note/components/NoteDetails";
import { useSingleNotesQuery } from "@/features/note/hooks/useSingleNoteQuery";

export const Route = createFileRoute("/notes/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  const { data: note, isError, isLoading } = useSingleNotesQuery(id);

  if (isLoading) return <Loading />;
  if (!note) return <NotFound />;
  if (isError) return <ErrorComponent />;

  return (
    <div className="flex flex-col items-center p-10">
      <NoteDetails note={note} />
    </div>
  );
}
