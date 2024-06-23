import Link from 'next/link';
import { Widget, WidgetProps } from '../../primitives';
import { getTrash } from '@/app/dataLayer/widgets';
import { TrashCan } from './TrashCan';

export const revalidate = 0;

interface TrashCanWidgetProps extends Omit<WidgetProps, 'title'> {}

export async function TrashCanWidget(props: TrashCanWidgetProps) {
  const widgets = await getTrash();

  return (
    <Widget title='Trash' {...props} className='group-hover:animate-none'>
      <Link href='/trash' prefetch={false}>
        <TrashCan hasWidgets={widgets.length > 0} />
      </Link>
    </Widget>
  );
}
