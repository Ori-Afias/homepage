import { getTrash } from '../dataLayer/widgets';
import { widgetTypes } from '../types';
import { RestoreButton } from './components/RestoreButton';

export const revalidate = 0;

export default async function Trash() {
  const widgets = await getTrash();

  return (
    <main className='flex items-center justify-center min-h-screen min-w-full overflow-clip p-8 md:p-28'>
      <div className='grid grid-flow-dense grid-cols-2 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-16'>
        {widgets.map(({ type, id, props }) => {
          const Widget = widgetTypes[type];
          return <Widget key={id} {...props} id={id} tiles={[1, 1]} />;
        })}
      </div>
      <RestoreButton />
    </main>
  );
}
