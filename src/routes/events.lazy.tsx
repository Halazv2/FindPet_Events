import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/events")({
  component: () => <div>Hello /Events!</div>
});
