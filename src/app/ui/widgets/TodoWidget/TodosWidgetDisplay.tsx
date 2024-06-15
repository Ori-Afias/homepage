'use client';

import Image from 'next/image';
import { useTodos } from './TodosContext';
import { Skeleton } from '../../primitives';

export function TodosWidgetDisplay() {
  const { onOpen, todos, loading } = useTodos();
  return (
    <>
      <div
        onClick={onOpen}
        className='h-full w-full flex items-center justify-start cursor-pointer overflow-y-auto bg-gradient-to-tr from-slate-50 to-slate-100 px-4'
      >
        <Image
          alt='Todos icon'
          width={44}
          height={44}
          src='https://cdn-icons-png.freepik.com/256/11134/11134058.png?semt=ais_hybrid'
        />
        <div className='flex flex-col ml-4'>
          <div className='text-lg text-lime-600'>Todos</div>
          {loading ? <Skeleton.Text /> : <div className='text-xs text-lime-600'>{todos.length} tasks await</div>}
        </div>
      </div>
    </>
  );
}
