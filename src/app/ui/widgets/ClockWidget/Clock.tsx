'use client';

import { MouseEventHandler, useState } from 'react';

interface ClockProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
}
export function Clock({ onClick }: ClockProps) {
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  const displayDate = date.toLocaleDateString();
  const displayTime = date.toLocaleTimeString();

  return (
    <div
      onClick={onClick}
      className='bg-gradient-to-tr from-slate-600 to-slate-400 flex items-center justify-center flex-col h-full w-full cursor-pointer'
    >
      <span className='text-sm text-white mb-4'>{displayDate}</span>
      <span className='text-3xl text-white'>{displayTime}</span>
    </div>
  );
}
