import { createLazyFileRoute } from "@tanstack/react-router";

import { Sponsors } from "@components/home/Sponsors";

export const Route = createLazyFileRoute("/events/$eventsId")({
  component: Sponsors
});
