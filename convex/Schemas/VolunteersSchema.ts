import { defineTable } from "convex/server";
import { v } from "convex/values";

export const VolunteersSchema = defineTable({
  VolunteerID: v.id("documents"),
  AssociationID: v.id("Associations"),
  ParticipantID: v.id("Participants"),
  VolunteerDate: v.string(),
  VolunteerTime: v.string(),
  VolunteerMessage: v.string()
}).index("AssociationID", ["AssociationID"]);
