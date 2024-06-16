import { Widget, WidgetProps } from '../../primitives';
import { TodosWidgetDisplay } from './TodosWidgetDisplay';

interface TodoWidgetProps extends Omit<WidgetProps, 'title'> {}

export function TodoWidget({ tiles = [2, 1], ...rest }: TodoWidgetProps) {
  return (
    <Widget title='Todos' tiles={tiles} {...rest}>
      <TodosWidgetDisplay />
    </Widget>
  );
}
