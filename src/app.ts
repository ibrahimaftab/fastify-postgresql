import Fastify from "fastify";
import cors from "@fastify/cors";
import env from "@fastify/env";
import db from "./plugins/db";

const schema = {
  type: "object",
  required: ["PORT", "PG_URL"],
  properties: {
    PORT: { type: "string" },
    PG_URL: { type: "string" },
  },
};

const app = Fastify({ logger: true });

const server = async () => {
  await app.register(env, {
    dotenv: true,
    schema,
    data: process.env,
  });

  await app.register(cors);
  await app.register(db);
  // await app.register(userRoutes, { prefix: "/users" });
};

server();

export default app;
