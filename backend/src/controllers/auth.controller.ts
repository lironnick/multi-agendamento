// import { auth as authModel } from '@/models/auth.model';
import { findByEmail, createUser } from '@/models/user.model';

export async function auth(email: string, password: string) {
  const user = await findByEmail(email);

  if (!user) {
    throw 'Email ou password invalidos!';
  }

  console.log(user.password);
}
