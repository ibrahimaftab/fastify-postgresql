import fastify from "fastify";

const app = fastify();

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
