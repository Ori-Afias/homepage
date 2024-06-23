import { IWidget, widgetTypes } from './types';
import { TrashCanWidget } from './ui/widgets/TrashCan/TrashCanWidget';

export const revalidate = 0;

export default async function Home() {
  const res = await fetch(`http://localhost:3000/api/widgets`);
  const data = await res.json();
  const widgets = data.data as IWidget[];

  if (!widgets) {
    return <div>loading...</div>;
  }

  return (
    <main className='flex items-center justify-center min-h-screen min-w-full overflow-clip p-8 md:p-28'>
      <div className='grid grid-flow-dense grid-cols-2 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-16'>
        <TrashCanWidget tiles={[1, 1]} id='trash' />

        {widgets
          .filter((w) => w.ui !== 'trash')
          .map(({ type, id, props }) => {
            const Widget = widgetTypes[type];
            return <Widget key={id} {...props} id={id} />;
          })}
      </div>
    </main>
  );
}
