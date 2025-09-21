import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

// export const listItems = query({
//   args: {},
//   handler: async (ctx, args) => {
//     const items = await ctx.db.query("items").order("desc").take(10);

//     return items;
//   },
// });

export const addItem = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    url: v.string(),
  },
  handler: async (ctx, args) => {
    console.log("This typescript function is running on the server");
    await ctx.db.insert("items", args);
  },
});

// export const sendMessage = mutation({
//   args: {
//     user: v.string(),
//     body: v.string(),
//   },
//   handler: async (ctx, args) => {
//     console.log("This typescript function is running on the server");
//     await ctx.db.insert("messages", {
//       user: args.user,
//       body: args.body,
//     });
//   },
// });
