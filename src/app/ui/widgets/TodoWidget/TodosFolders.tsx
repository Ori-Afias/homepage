export function TodosFolders({ folders = [] }: { folders: string[] }) {
  return (
    <div className='flex flex-col gap-y-2 w-64 pt-8  bg-gradient-to-tr from-slate-50 to-slate-100'>
      {folders.map((folder) => (
        <Folder key={folder} name={folder} />
      ))}
    </div>
  );
}

function Folder({ name }: { name: string }) {
  return (
    <div className='flex items-center justify-between px-4 py-1 mx-3 bg-gradient-to-tr from-slate-800 to-slate-600 rounded-lg shadow-md cursor-pointer'>
      <span className='text-white uppercase text-sm'>{name}</span>
    </div>
  );
}
