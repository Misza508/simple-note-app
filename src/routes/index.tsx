import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  useEffect(() => {
    const testFetch = async () => {
      try {
        const res = await fetch(`/api/notes`);
        const test = await res.json();
        console.log(test);
      } catch (error) {
        console.log(error);
      }
    };

    testFetch();
  }, []);

  return (
    <div className="w-full min-h-dvh flex justify-center items-center">
      <Button> Test</Button>
      <div></div>
    </div>
  );
}
