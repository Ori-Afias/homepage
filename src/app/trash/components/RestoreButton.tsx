'use client';

import { useRouter } from 'next/navigation';

export function RestoreButton() {
  const { push, refresh } = useRouter();
  const restore = async () => {
    await fetch(`/api/restore`);
    push('/');
    refresh();
  };

  return <div onClick={restore}>restore All</div>;
}
