'use client';

import React from 'react';
import { Modal as FlowBiteModal } from 'flowbite-react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ children, open, onClose }: ModalProps) {
  return (
    <FlowBiteModal show={open} onClose={onClose} dismissible>
      <FlowBiteModal.Body>{children}</FlowBiteModal.Body>
    </FlowBiteModal>
  );
}
