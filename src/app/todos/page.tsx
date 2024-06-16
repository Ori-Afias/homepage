import { TextInput } from 'flowbite-react';
import TodosList from '../ui/widgets/TodoWidget/TodosList';

export default function Todos() {
  return (
    <div>
      <TextInput className='mb-4' placeholder='Add a new task' />
      <div className='overflow-auto'>
        <TodosList />
      </div>
    </div>
  );
}
