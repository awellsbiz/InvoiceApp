import { Hono } from "hono";
import { db } from "../../packages/db/client";

const app = new Hono();

app.get("/", (c) => c.text("Hello World"));

app.get("/health", (c) => c.text("OK status"));

// /backent/users

export default app;
