import { sql } from '@/lib/mysql';

export async function findByEmail(email: string) {
  const result = await sql(
    /*SQL*/ `SELECT * FROM users WHERE email = ? LIMIT 1`,
    [email]
  );

  return result[0];
}

export async function createUser(
  name: string,
  email: string,
  password: string
) {
  const { insertId } = await sql(
    /*SQL*/ `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
    [name, email, password]
  );

  return insertId;
}
