'use client';

import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface WidgetProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  title: string;
  tiles?: [number, number];
  id: string;
}

const getDim = ([w, h]: [number, number]) => {
  return `grid-cols-${w} grid-rows-${h} row-span-${h} col-span-${w} w-${w + (w > 1 ? w - 1 : 0)} h-${
    h + (h > 1 ? h - 1 : 0)
  } m-auto mt-0`;
};

export function Widget({ className, tiles = [1, 1], title, id, children }: WidgetProps) {
  const handleOnDrag: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.dataTransfer.setData('widgetId', id ?? '');
  };

  return (
    <div className={`${getDim(tiles)} group`} draggable onDragStart={handleOnDrag}>
      <section
        className={`group-hover:animate-bounce shadow-xl transition-all rounded-2xl overflow-hidden ease-in-out group h-full w-full duration-300 ${className}`}
      >
        {children}
      </section>
      <div className='text-xs mt-2 text-center text-white capitalize duration-300 text-ellipsis overflow-hidden'>
        {title}
      </div>
    </div>
  );
}
