import { defineTable } from "convex/server";
import { v } from "convex/values";

export const EventParticipantsSchema = defineTable({
  EventID: v.id("Events"),
  ParticipantID: v.id("Participants")
}).index("EventID", ["EventID"]);
