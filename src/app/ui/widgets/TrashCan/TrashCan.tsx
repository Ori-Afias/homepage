'use client';

import { DragEventHandler, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { trashWidget } from '@/app/dataLayer/widgets';
import Image from 'next/image';

interface TrashCanProps {
  hasWidgets: boolean;
}

export function TrashCan({ hasWidgets }: TrashCanProps) {
  const router = useRouter();

  const handleDrop: DragEventHandler<HTMLDivElement> | undefined = async (e) => {
    const widgetId = e.dataTransfer.getData('widgetId') as string;
    await fetch(`/api/trash/${widgetId}`);

    router.refresh();
  };

  const handleDragOver: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
  };

  const image = hasWidgets
    ? 'https://evideco.com/wp-content/uploads/2022/12/caee2216-228d-4462-8556-a13300b5a20c.jpg'
    : 'https://evideco.com/wp-content/uploads/2022/12/6546100-Soft-Close-Lid-White-Round-Metal-Step-Trash-Can-Waste-Bin-6-liters-1.6-gal-1-main.jpg';

  return (
    <span onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className='h-full w-full bg-cover bg-center bg-no-repeat'>
        <Image src={image} alt='Trash Can' height={64} width={64} />
      </div>
    </span>
  );
}
