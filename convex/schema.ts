import { defineSchema } from "convex/server";

import {
  AdoptionRequestsSchema,
  AssociationsSchema,
  DonationsSchema,
  EventParticipantsSchema,
  EventsSchema,
  ParticipantsSchema,
  VolunteersSchema
} from "./Schemas";

export default defineSchema({
  Associations: AssociationsSchema,
  Events: EventsSchema,
  Participants: ParticipantsSchema,
  EventParticipants: EventParticipantsSchema,
  Donations: DonationsSchema,
  Volunteers: VolunteersSchema,
  AdoptionRequests: AdoptionRequestsSchema
});
