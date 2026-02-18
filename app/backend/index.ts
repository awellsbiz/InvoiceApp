import { Hono } from "hono";
import { cors } from "hono/cors";
import { db } from "../../packages/db/client";
import { usersTable } from "../../packages/db/schema";

const app = new Hono();

app.use("*", cors());

app.get("/", (c) => c.text("Hello World"));

app.get("/health", (c) => c.text("OK status"));

// /backend/users

app.post("/users", async (c) => {
  const body = await c.req.json();
  const [user] = await db
    .insert(usersTable)
    .values({
      name: body.name,
      email: body.email,
      password: body.password,
    })
    .returning();
  return c.json(user);
});

export default app;
