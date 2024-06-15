'use client';

import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';

interface TodosContextValue {
  openTodosModal: boolean;
  onOpen: () => void;
  onClose: () => void;
  todos: any[];
  loading: boolean;
}

const TodosContext = createContext<TodosContextValue>({
  openTodosModal: false,
  onOpen: () => {},
  onClose: () => {},
  todos: [],
  loading: true,
});

const getTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();
  return todos;
};

function TodosProvider({ children }: PropsWithChildren) {
  const [openTodosModal, setOpenTodosModal] = useState(false);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTodos().then((todos) => {
      setTodos(todos);
      setLoading(false);
    });
  }, []);

  function onClose() {
    setOpenTodosModal(false);
  }

  function onOpen() {
    setOpenTodosModal(true);
  }

  return (
    <TodosContext.Provider value={{ openTodosModal, loading, onOpen, onClose, todos }}>
      {children}
    </TodosContext.Provider>
  );
}

function useTodos() {
  const context = useContext(TodosContext);
  if (context === undefined) {
    throw new Error('useTodos must be used within a TodosProvider');
  }
  return context;
}

export { useTodos };

export default TodosProvider;
