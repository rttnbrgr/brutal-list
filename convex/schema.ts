import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// The schema is entirely optional.
// You can delete this file (schema.ts) and the
// app will continue to work.
// The schema provides more precise TypeScript types.
export default defineSchema({
  numbers: defineTable({
    value: v.number(),
  }),
  items: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    url: v.string(),
    createdAt: v.optional(v.number()),
    updatedAt: v.optional(v.number()),
  }),
});
