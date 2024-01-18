import { defineTable } from "convex/server";
import { v } from "convex/values";
enum EventType {
  AdoptionEvent = "Adoption Event",
  Fundraising = "Fundraising",
  Awareness = "Awareness",
}
export const EventsSchema = defineTable({
  EventID: v.id("documents"),
  AssociationID: v.id("Associations"),
  EventName: v.string(),
  EventDate: v.string(),
  EventTime: v.string(),
  EventType: v.union(
    v.literal(EventType.AdoptionEvent),
    v.literal(EventType.Fundraising),
    v.literal(EventType.Awareness),
  ),
  EventLocation: v.string(),
  EventDescription: v.string(),
  EventImage: v.string(),
}).index("AssociationID", ["AssociationID"]);
