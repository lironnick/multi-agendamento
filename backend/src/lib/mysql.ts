import mysql, { PoolOptions } from 'mysql2/promise';

const access: PoolOptions = {
  host: 'localhost',
  user: 'docker',
  password: 'docker',
  database: 'mult_agendamento',
  // Optional connection pool configuration:
  waitForConnections: true, // Whether to wait for an available connection (default: true)
  connectionLimit: 10, // Maximum number of connections in the pool (default: 10)
  queueLimit: 0, // Maximum number of queued requests for a connection (default: 0, unlimited)
  multipleStatements: true,
};

const pool = mysql.createPool(access);

export const sql: any = async (sql: any, params = []) => {
  const [rows] = await pool.query(sql, params);

  return rows;
};
