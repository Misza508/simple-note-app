import ErrorComponent from "@/components/Error/Error";
import { Navigation } from "@/components/Navigation/Navigation";
import NotFound from "@/components/NotFound/NotFound";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navigation />
      <Outlet />
      <TanStackRouterDevtools />
      <ReactQueryDevtools buttonPosition="bottom-right" />
    </>
  ),
  errorComponent: () => <ErrorComponent />,
  notFoundComponent: () => <NotFound />,
});
