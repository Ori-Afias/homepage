import React from 'react';

export const Skeleton = () => {
  return null;
};

function Text({ className }: { className?: string }) {
  return <div className={`animate-pulse bg-gray-300 rounded-3xl h-[16px] w-[96px] ${className}`}></div>;
}

Skeleton.Text = Text;
