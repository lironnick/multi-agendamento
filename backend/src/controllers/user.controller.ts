import jwt from 'jsonwebtoken';

import { findByEmail, createUser } from '@/models/user.model';

export async function create(name: string, email: string, password: string) {
  const user = await findByEmail(email);

  if (user) {
    throw 'Usuário já cadastrado';
  }

  //   const payload = {
  //     userId: user.id,
  //     username: user.email,
  //     // Add other relevant data here
  //   };
  //   const secretKey = '1234454544545454545';
  //   const token = jwt.sign(payload, secretKey, { expiresIn: '30m' }); // Expires in 30 minutes
  //   console.log('Generated token:', token);

  const userId = await createUser(name, email, password);

  return { id: userId, name, email };
}
