import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
const testFetch = async () => {
  try {
    const res = await fetch(`/api/notes`);
    const test = await res.json();
    console.log(test);
  } catch (error) {
    console.log(error);
  }
};

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { data } = useQuery({
    queryKey: ["notes"],
    queryFn: testFetch,
  });

  console.log(data);

  return (
    <div className="w-full min-h-dvh flex justify-center items-center">
      <Button> Test</Button>
      <div></div>
    </div>
  );
}
