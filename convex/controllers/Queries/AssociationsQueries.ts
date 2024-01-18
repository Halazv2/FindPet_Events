import { query } from "../../_generated/server";

export const listAssociations = query({
  handler: async (ctx) => {
    const associations = await ctx.db.query("Associations").collect();
    return associations;
  },
});
