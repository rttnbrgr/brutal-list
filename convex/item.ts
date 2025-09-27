import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const listItems = query({
  handler: async (ctx) => {
    const items = await ctx.db.query("items").order("desc").take(10);
    return items;
  },
});

export const addItem = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    url: v.string(),
  },
  handler: async (ctx, args) => {
    console.log("This typescript function is running on the server");
    const now = Date.now();
    await ctx.db.insert("items", {
      ...args,
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const updateItem = mutation({
  args: {
    id: v.id("items"),
    title: v.string(),
    description: v.string(),
    url: v.string(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const now = Date.now();
    await ctx.db.patch(args.id, {
      title: args.title,
      description: args.description,
      url: args.url,
      updatedAt: now,
    });
    return null;
  },
});

export const deleteItem = mutation({
  args: {
    id: v.id("items"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
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
