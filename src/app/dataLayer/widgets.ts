import { sql } from '@vercel/postgres';
import { IWidget } from '../types';

export const getWidgets = async (): Promise<IWidget[]> => {
  const { rows } = await sql`SELECT * FROM widgets`;

  return rows as IWidget[];
};

export const getWidget = async (id: string): Promise<IWidget | undefined> => {
  const { rows } = await sql`SELECT * FROM widgets WHERE id = ${id}`;
  return rows[0] as IWidget;
};

export const createWidget = async (widget: IWidget): Promise<IWidget> => {
  const { rows } =
    await sql`INSERT INTO widgets (type, ui, props) VALUES (${widget.type}, ${widget.ui}, ${widget.props}) RETURNING *`;

  return rows[0] as IWidget;
};

export const updateWidget = async (widget: IWidget): Promise<IWidget> => {
  const { rows } =
    await sql`UPDATE widgets SET type = ${widget.type}, ui = ${widget.ui}, props = ${widget.props} WHERE id = ${widget.id} RETURNING *`;
  return rows[0] as IWidget;
};

export const deleteWidget = async (id: string): Promise<void> => {
  await sql`DELETE FROM widgets WHERE id = ${id}`;
};

export const trashWidget = async (id: string): Promise<IWidget> => {
  const { rows } = await sql`UPDATE widgets SET ui = 'trash' WHERE id = ${id} RETURNING *`;

  return rows[0] as IWidget;
};

export const restoreWidget = async (id: string): Promise<IWidget> => {
  const { rows } = await sql`UPDATE widgets SET ui = 'home' WHERE id = ${id} RETURNING *`;

  return rows[0] as IWidget;
};

export const emptyTrash = async (): Promise<void> => {
  await sql`DELETE FROM widgets WHERE ui = 'trash'`;
};

export const getTrash = async (): Promise<IWidget[]> => {
  const { rows } = await sql`SELECT * FROM widgets WHERE ui = 'trash'`;
  return rows as IWidget[];
};

export const restoreAll = async (): Promise<void> => {
  await sql`UPDATE widgets SET ui = 'home' WHERE ui = 'trash'`;
};
