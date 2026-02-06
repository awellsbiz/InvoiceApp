import { Hono } from "hono";
import { db } from "../../packages/db/client";
import { usersTable } from "../../packages/db/schema";

const app = new Hono();

app.get("/", (c) => c.text("Hello World"));

app.get("/health", (c) => c.text("OK status"));

// /backend/users

app.post("/users", async (c) => {
  const body = await c.req.json();
  const user = await db.insert(usersTable).values({
    name: body.name,
    email: body.email,
    password: body.password,
  });
  return c.json(user);
});

export default app;
