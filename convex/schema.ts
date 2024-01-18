import { defineSchema } from "convex/server";
import {
  AssociationsSchema,
  EventsSchema,
  ParticipantsSchema,
  EventParticipantsSchema,
  DonationsSchema,
  VolunteersSchema,
  AdoptionRequestsSchema,
} from "./Schemas";

export default defineSchema({
  Associations: AssociationsSchema,
  Events: EventsSchema,
  Participants: ParticipantsSchema,
  EventParticipants: EventParticipantsSchema,
  Donations: DonationsSchema,
  Volunteers: VolunteersSchema,
  AdoptionRequests: AdoptionRequestsSchema,
});
