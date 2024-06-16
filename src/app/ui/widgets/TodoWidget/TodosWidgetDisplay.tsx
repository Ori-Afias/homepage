import Image from 'next/image';
import Link from 'next/link';

export function TodosWidgetDisplay() {
  return (
    <Link href='/todos'>
      <div className='h-full w-full flex items-center justify-start cursor-pointer overflow-y-auto bg-gradient-to-tr from-slate-50 to-slate-100 px-4'>
        <Image
          alt='Todos icon'
          width={44}
          height={44}
          src='https://cdn-icons-png.freepik.com/256/11134/11134058.png?semt=ais_hybrid'
        />
        <div className='flex flex-col ml-4'>
          <div className='text-lg text-lime-600'>Todos</div>
        </div>
      </div>
    </Link>
  );
}
