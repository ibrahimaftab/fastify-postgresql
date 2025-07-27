import Fastify from "fastify";
import cors from "@fastify/cors";
import env from "@fastify/env";

const client = new Client();

await client.connect();

const app = Fastify({ logger: true });

const schema = {
  type: "object",
  required: ["PORT", "PG_URL"],
  properties: {
    PORT: { type: "string" },
    PG_URL: { type: "string" },
  },
};

await app.register(env, {
  dotenv: true,
  schema,
  data: process.env,
});

app.get("/", async (request, reply) => {
  return { hello: "world" };
});

app.listen({ port: 4000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
