'use client';

import { Radio, TextInput } from 'flowbite-react';
import { Modal } from '../../primitives';
import { useTodos } from './TodosContext';

export function TodosModal() {
  const { openTodosModal, onClose, todos } = useTodos();

  return (
    <Modal open={openTodosModal} onClose={onClose}>
      <div className='max-h-96 overflow-auto'>
        {todos.map((todo) => (
          <div key={todo.id} className='flex items-center justify-between border-b border-slate-200 py-2'>
            <div className='flex items-center'>
              <Radio className='h-[12px] w-[12px] mr-2' checked={todo.completed} />
              <div className='text-sm'>{todo.title}</div>
            </div>
            <div className='text-xs'>{todo.completed ? 'Done' : 'Pending'}</div>
          </div>
        ))}
      </div>
      <TextInput className='mt-4' placeholder='Add a new task' />
    </Modal>
  );
}
