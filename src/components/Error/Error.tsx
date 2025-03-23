import { Link } from "@tanstack/react-router";
import { AlertCircle } from "lucide-react";

export default function ErrorComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4 text-center px-6">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10">
        <AlertCircle className="h-8 w-8 text-destructive" />
      </div>
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <p className="text-muted-foreground max-w-md">
        We encountered an error while trying to load your notes. Please try
        again or contact support if the problem persists.
      </p>
      <div className="flex gap-2">
        <Link to="/">Go back home</Link>
      </div>
    </div>
  );
}
