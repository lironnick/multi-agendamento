import { sql } from '@/lib/mysql';

export async function auth(email: string, password: string) {
  const result = await sql(
    /*SQL*/ `SELECT id, name, email, created_at, updated_at FROM users WHERE email`
  );

  console.log(email, password, { result });
}
