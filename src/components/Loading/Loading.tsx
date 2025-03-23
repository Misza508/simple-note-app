import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-2">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <h2 className="text-xl font-medium">Loading your notes...</h2>
      <p className="text-sm text-muted-foreground">This won't take long.</p>
    </div>
  );
}
