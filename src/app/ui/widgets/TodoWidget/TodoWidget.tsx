import { Widget, WidgetProps } from '../../primitives';
import TodosProvider from './TodosContext';
import { TodosModal } from './TodosModal';
import { TodosWidgetDisplay } from './TodosWidgetDisplay';

interface TodoWidgetProps extends Omit<WidgetProps, 'title'> {}

export function TodoWidget({ tiles = [2, 1], ...rest }: TodoWidgetProps) {
  return (
    <TodosProvider>
      <Widget title='Todos' tiles={tiles} {...rest}>
        <TodosWidgetDisplay />
      </Widget>
      <TodosModal />
    </TodosProvider>
  );
}
