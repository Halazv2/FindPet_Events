import { mutation } from "../../_generated/server";
import { v } from "convex/values";

export const createAssociations = mutation({
  args: {
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
    Website: v.string(),
    Logo: v.id("_storage"),
    Description: v.string(),
  },
  handler: async (ctx, args) => {
    const newAssociationsId = await ctx.db.insert("Associations", args);
    return newAssociationsId;
  },
});
