import TodosList from '../ui/widgets/TodoWidget/TodosList';
import { TodosFolders } from '../ui/widgets/TodoWidget/TodosFolders';
import { Input } from '../ui/primitives/Input/Input';

async function getTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  return await response.json();
}

export default async function Todos() {
  const todos = await getTodos();

  return (
    <div className='h-full'>
      <Input placeholder='Add a new task' />
      <div className='flex h-full'>
        <TodosFolders folders={['asd', 'asdasd', 'ddsa']} />
        <div className='w-full'>
          <div className='my-8 ml-8 h-96 overflow-auto'>
            <TodosList todos={todos} />
          </div>
        </div>
      </div>
    </div>
  );
}
