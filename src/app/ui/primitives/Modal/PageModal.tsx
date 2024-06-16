'use client';

import React from 'react';
import { CustomFlowbiteTheme, Modal as FlowBiteModal } from 'flowbite-react';
import { useRouter } from 'next/navigation';

interface ModalProps {
  children: React.ReactNode;
}

export function PageModal({ children }: ModalProps) {
  const { back } = useRouter();

  return (
    <FlowBiteModal show onClose={back} dismissible size='7xl'>
      <FlowBiteModal.Body>{children}</FlowBiteModal.Body>
    </FlowBiteModal>
  );
}
