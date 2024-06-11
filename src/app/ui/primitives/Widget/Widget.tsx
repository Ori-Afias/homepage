export interface WidgetProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  tiles?: [number, number];
}

const getDim = ([w, h]: [number, number]) => {
  return `grid-cols-${w} grid-rows-${h} row-span-${h} col-span-${w} w-${w + (w > 1 ? w - 1 : 0)} h-${
    h + (h > 1 ? h - 1 : 0)
  } m-auto mt-0`;
};

export function Widget({ className, tiles = [1, 1], title, children }: WidgetProps) {
  return (
    <div className={`${getDim(tiles)} group`}>
      <section
        className={`shadow-xl transition-all rounded-2xl overflow-hidden ease-in-out group h-full w-full group-hover:-translate-y-3 group-hover:scale-125 duration-300 ${className}`}
      >
        {children}
      </section>
      <div className='text-xs mt-2 text-center text-white capitalize group-hover:text-sm duration-300 text-ellipsis overflow-hidden'>
        {title}
      </div>
    </div>
  );
}
