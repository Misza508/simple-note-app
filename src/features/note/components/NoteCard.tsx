import { Link } from "@tanstack/react-router";
import { Calendar } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Note } from "../schema";

interface NoteCardProps {
  note: Note;
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <Link to={`/notes/$id`} params={{ id: note.id }}>
      <Card className="h-full transition-all hover:shadow-md">
        <CardHeader>
          <CardTitle>{note.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">
            {note.description}
          </p>
        </CardContent>
        <CardFooter>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-4 w-4" />
            {note.createdAt}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
