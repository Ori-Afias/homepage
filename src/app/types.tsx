import { LinkWidget } from './ui/widgets/LinkWidget';
import { TodoWidget } from './ui/widgets/TodoWidget/TodoWidget';

type IWidgetType = 'LinkWidget' | 'TodoWidget';

export interface IWidget {
  id: string;
  type: IWidgetType;
  ui: string;
  props?: any;
}

export const widgetTypes: { [type in IWidgetType]: (props: any) => JSX.Element } = {
  LinkWidget: (props: any) => <LinkWidget {...props} />,
  TodoWidget: (props: any) => <TodoWidget {...props} />,
};
