import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    accounts: defineTable({ name: v.string(), type: v.string(), balance: v.number() }),
    transactions: defineTable({ accountId: v.id("accounts"), description: v.string(), amount: v.number(), type: v.string(), category: v.string(), date: v.string() }).index("by_account", ["accountId"]).index("by_date", ["date"]),
    budgets: defineTable({ name: v.string(), emoji: v.string(), limit: v.number(), month: v.string() }).index("by_month", ["month"])
});
