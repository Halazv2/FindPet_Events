import { defineTable } from "convex/server";
import { v } from "convex/values";

export const ParticipantsSchema = defineTable({
  ParticipantID: v.id("documents"),
  FirstName: v.string(),
  LastName: v.string(),
  Email: v.string(),
  Phone: v.string(),
  Address: v.string(),
  City: v.string(),
  State: v.string(),
  Zip: v.string(),
  Country: v.string(),
  Image: v.string(),
  Description: v.string(),
});
