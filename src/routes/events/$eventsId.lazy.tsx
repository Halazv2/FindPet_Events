import { createLazyFileRoute } from "@tanstack/react-router";

import { AssociationsCard } from "@components/cards/AssociationsCard";

export const Route = createLazyFileRoute("/events/$eventsId")({
  component: AssociationsCard
});
