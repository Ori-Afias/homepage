import { TextInput } from 'flowbite-react';
import TodosList from '../ui/widgets/TodoWidget/TodosList';
import { TodosFolders } from '../ui/widgets/TodoWidget/TodosFolders';
import { Input } from '../ui/primitives/Input/Input';

export default function Todos() {
  return (
    <div className='h-full'>
      <Input placeholder='Add a new task' />
      <div className='flex h-full'>
        <TodosFolders folders={['asd', 'asdasd', 'ddsa']} />
        <div className='w-full'>
          <div className='my-8 ml-8 h-96 overflow-auto'>
            <TodosList />
          </div>
        </div>
      </div>
    </div>
  );
}
