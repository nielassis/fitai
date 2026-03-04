import "dotenv/config";

import Fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

const app = Fastify({
  logger: true,
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get("/", () => {
  return { message: "Hello World!" };
});

try {
  await app.listen({ port: Number(process.env.PORT) || 8080 });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
