import db from "fastify-plugin";
import { Pool } from "pg";

export default db(async (fastify, opts) => {
  const pool = new Pool({ connectionString: process.env.PG_URL });
  fastify.decorate("pg", pool);
  fastify.addHook("onClose", async () => {
    await pool.end();
  });
});

declare module "fastify" {
  interface FastifyInstance {
    pg: Pool;
    config: {
      PORT: string;
      PG_URL: string;
    };
  }
}
