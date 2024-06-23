import { sql } from '@vercel/postgres';

export const revalidate = 0;

export async function GET() {
  try {
    await sql`UPDATE widgets SET ui = 'home'`;
    return Response.json({ status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
