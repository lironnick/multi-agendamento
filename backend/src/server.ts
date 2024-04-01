import fastify from 'fastify';
import z from 'zod';

const app = fastify();

app.post('/api/users', async (request, reply) => {
  const createLinkSchema = z.object({
    name: z.string().min(3),
    login: z.string().email(),
    password: z.string().min(6),
  });

  const { name, login, password } = createLinkSchema.parse(request.body);

  return reply.status(201).send({ name, login });
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server rodando....!!!');
  });
