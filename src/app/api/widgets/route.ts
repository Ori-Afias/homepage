import { sql } from '@vercel/postgres';

export const revalidate = 0;

export async function GET() {
  try {
    const { rows } = await sql`SELECT * FROM widgets`;
    return Response.json({ status: 200, data: rows });
  } catch (error) {
    return Response.json({ error, data: null }, { status: 500 });
  }
}
