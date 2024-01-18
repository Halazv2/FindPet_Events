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
    const newAssociationsId = await ctx.db.insert("Associations", {
      AssociationName: args.AssociationName,
      ContactEmail: args.ContactEmail,
      ContactPerson: args.ContactPerson,
      ContactPhone: args.ContactPhone,
      Location: args.Location,
      Address: args.Address,
      City: args.City,
      State: args.State,
      Zip: args.Zip,
      Country: args.Country,
      Website: args.Website,
      Logo: args.Logo,
      Description: args.Description,
    });
    return newAssociationsId;
  },
});
