import { Link } from "@tanstack/react-router";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-4 text-center px-6">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-muted">
        <FileQuestion className="h-8 w-8 text-muted-foreground" />
      </div>
      <h2 className="text-2xl font-bold">Note Not Found</h2>
      <p className="text-muted-foreground max-w-md">
        We couldn't find what you're looking for. It might have been deleted or
        moved.
      </p>
      <div className="flex gap-2">
        <Link to="/">Go back to Home</Link>
      </div>
    </div>
  );
}
