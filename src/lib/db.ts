import mysql from 'mysql2/promise';
import { QueryResult } from '@/types/db';

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'PET_SHELTER',
  waitForConnections: true,
  connectionLimit: 10,
});

export async function query<T = any>(sql: string, params?: any[]): Promise<QueryResult<T>> {
  const connection = await pool.getConnection();
  try {
    const [results, fields] = await connection.execute(sql, params);
    return { results: results as T[], fields };
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  } finally {
    connection.release();
  }
}

export default pool;