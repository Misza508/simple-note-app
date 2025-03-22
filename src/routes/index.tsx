import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="w-full min-h-dvh flex justify-center items-center">
      <Button> Test</Button>
    </div>
  );
}
