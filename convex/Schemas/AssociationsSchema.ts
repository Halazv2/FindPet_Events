import { defineTable } from "convex/server";
import { v } from "convex/values";

export const AssociationsSchema = defineTable({
  AssociationName: v.string(),
  ContactEmail: v.string(),
  ContactPerson: v.string(),
  ContactPhone: v.string(),
  Location: v.string(),
  Address: v.string(),
  City: v.string(),
  State: v.string(),
  Zip: v.string(),
  Country: v.string(),
  Website: v.optional(v.string()),
  Logo: v.optional(v.id("_storage")),
  Description: v.string(),
});
