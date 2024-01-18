import { defineTable } from "convex/server";
import { v } from "convex/values";

export const DonationsSchema = defineTable({
  DonationID: v.id("documents"),
  AssociationID: v.id("Associations"),
  ParticipantID: v.id("Participants"),
  DonationAmount: v.number(),
  DonationDate: v.string(),
  DonationTime: v.string(),
  DonationMessage: v.string(),
}).index("AssociationID", ["AssociationID"]);
