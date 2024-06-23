import { trashWidget } from '@/app/dataLayer/widgets';

export const revalidate = 0;

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;

  if (!id) {
    return Response.json({ error: 'id is required' }, { status: 400 });
  }
  const res = await trashWidget(id);

  return Response.json({ res });
}
