import { Calendar, Edit2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import type { Note } from "../schema";

export function NoteDetails({ note }: { note: Note }) {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader>
        <div className="flex flex-row justify-between items-center">
          <CardTitle>{note.title}</CardTitle>
          <Link to="/">
            <Button>
              Edit
              <Edit2 />
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground line-clamp-3">
            {note.description}
          </p>
          <div className="text-primary ">{note.content}</div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center text-sm text-muted-foreground gap-2">
          <span>Create at: </span>
          {note.createdAt}
          <Calendar className="mr-1 h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
