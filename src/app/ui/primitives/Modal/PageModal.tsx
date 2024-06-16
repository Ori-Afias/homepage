'use client';

import React from 'react';
import { CustomFlowbiteTheme, Modal as FlowBiteModal } from 'flowbite-react';
import { useRouter } from 'next/navigation';

interface ModalProps {
  children: React.ReactNode;
}

const customTheme: CustomFlowbiteTheme['modal'] = {
  content: {
    inner: 'relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700 overflow-hidden',
  },
  body: {
    base: 'flex-1 overflow-auto p-0',
  },
};

export function PageModal({ children }: ModalProps) {
  const { back } = useRouter();

  return (
    <FlowBiteModal theme={customTheme} show onClose={back} dismissible size='7xl'>
      <FlowBiteModal.Body>{children}</FlowBiteModal.Body>
    </FlowBiteModal>
  );
}
