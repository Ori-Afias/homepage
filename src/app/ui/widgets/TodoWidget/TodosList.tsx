async function getTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  return await response.json();
}

export default async function TodosList() {
  const todos = await getTodos();

  if (!todos?.length) return null;

  return todos.map((todo: any) => (
    <div key={todo.id} className='flex items-center justify-between border-b border-slate-200 py-2'>
      <div className='flex items-center'>
        <input type='checkbox' className='h-[12px] w-[12px] mr-2' checked={todo.completed} />
        <div className='text-sm'>{todo.title}</div>
      </div>
      <div className='text-xs'>{todo.completed ? 'Done' : 'Pending'}</div>
    </div>
  ));
}
