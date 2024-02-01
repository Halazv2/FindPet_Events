import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/donate")({
  component: () => <div>Hello /donate!</div>
});
