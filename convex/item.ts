import { v } from "convex/values";
import { query, mutation } from "./_generated/server";
// import {
//   extractTitle,
//   extractDescription,
//   extractFavicon,
// } from "../lib/getUrlMetadataInternal";

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

// this isn't working as expected
// commenting out
// export const getUrlMetadata = action({
//   args: { url: v.string() },
//   handler: async (ctx, { url }) => {
//     try {
//       // Validate URL format
//       const validUrl = new URL(url);

//       // Fetch the HTML content
//       const response = await fetch(url, {
//         headers: {
//           "User-Agent": "Mozilla/5.0 (compatible; MetadataBot/1.0)",
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP ${response.status}: ${response.statusText}`);
//       }

//       const html = await response.text();

//       // Extract metadata using regex patterns
//       const title = extractTitle(html);
//       const description = extractDescription(html);
//       // const favicon = extractFavicon(html, validUrl);

//       return {
//         url: validUrl,
//         title,
//         description,
//         // favicon,
//         success: true,
//       };
//     } catch (error) {
//       console.error("Error fetching metadata:", error);
//       return {
//         url: url,
//         title: null,
//         description: null,
//         // favicon: null,
//         success: false,
//         error: error instanceof Error ? error.message : "Unknown error",
//       };
//     }
//   },
// });
