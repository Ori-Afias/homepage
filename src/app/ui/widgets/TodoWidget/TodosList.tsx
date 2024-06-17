export default async function TodosList({ todos }: { todos: any[] }) {
  return todos.map((todo: any) => (
    <div key={todo.id} className='flex items-center justify-between border-b border-slate-200 py-2'>
      <div className='flex items-center'>
        <input type='checkbox' className='h-[12px] w-[12px] mr-2' />
        <div className='text-sm'>{todo.title}</div>
      </div>
      <div className='text-xs'>{todo.completed ? 'Done' : 'Pending'}</div>
    </div>
  ));
}
