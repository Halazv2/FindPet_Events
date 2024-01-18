import { defineTable } from "convex/server";
import { v } from "convex/values";

export const AdoptionRequestsSchema = defineTable({
  AdoptionRequestID: v.id("documents"),
  AssociationID: v.id("Associations"),
  ParticipantID: v.id("Participants"),
  AdoptionRequestDate: v.string(),
  AdoptionRequestTime: v.string(),
  AdoptionRequestMessage: v.string(),
}).index("AssociationID", ["AssociationID"]);
