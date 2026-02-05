import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  // Where Drizzle Generates Migration Files
  out: "./drizzle",
  // schema definitions live / are stored
  schema: "./schema.ts",
  // database url
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
