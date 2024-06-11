'use client';
import { Widget, WidgetProps } from '../../primitives/Widget';
import { Clock } from './Clock';
import { toggleFullScreen } from '@/app/utils/utils';

interface ClockWidgetProps extends Pick<WidgetProps, 'tiles'> {}

export function ClockWidget({ tiles = [3, 2] }: ClockWidgetProps) {
  return (
    <Widget title='clock' tiles={tiles}>
      <Clock onClick={toggleFullScreen} />
    </Widget>
  );
}
