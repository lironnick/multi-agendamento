import fastify from 'fastify';
import z from 'zod';

import { auth } from '@/controllers/auth.controller';
import { create } from '@/controllers/user.controller';

const app = fastify();

app.post('/api/login', async (request, reply) => {
  const createLinkSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { email, password } = createLinkSchema.parse(request.body);

  try {
    const token = await auth(email, password);
    return reply.status(201).send(token);
  } catch (err) {
    console.error(err);
    return reply.status(500).send({ message: 'Internal error.' });
  }
});

app.post('/api/users', async (request, reply) => {
  const createLinkSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { name, email, password } = createLinkSchema.parse(request.body);

  try {
    const user = await create(name, email, password);
    return reply.status(201).send(user);
  } catch (err) {
    console.error(err);
    return reply.status(500).send({ message: 'Internal error.' });
  }
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server rodando....!!!');
  });
