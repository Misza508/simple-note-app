import ErrorComponent from "@/components/Error/Error";
import Loading from "@/components/Loading/Loading";
import NotFound from "@/components/NotFound/NotFound";
import { Button } from "@/components/ui/button";
import { NoteCard } from "@/features";
import { useNotesQuery } from "@/features/note/hooks/useNotesQuery";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PlusCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { data: notes, isLoading, isError } = useNotesQuery();

  if (isLoading) return <Loading />;
  if (!notes) return <NotFound />;
  if (isError) return <ErrorComponent />;

  return (
    <div className="flex flex-col items-center p-10">
      {notes.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <h2 className="text-xl font-medium mb-4">No notes yet</h2>
          <p className="text-muted-foreground mb-6">
            Create your first note to get started
          </p>
          <Link to="/notes/add-new">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Create Note
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <h1 className="text-3xl mb-6">All notes</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
