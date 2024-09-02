// /utils/mysql.ts
import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

export async function query(sql: string, values?: any) {
  const [rows] = await connection.execute(sql, values);
  return rows;
}
