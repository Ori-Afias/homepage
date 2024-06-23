'use client';
import { Widget, WidgetProps } from '../../primitives';
import { Clock } from './Clock';
import { toggleFullScreen } from '@/app/utils/utils';

interface ClockWidgetProps extends Omit<WidgetProps, 'title'> {}

export function ClockWidget({ tiles = [3, 2], ...rest }: ClockWidgetProps) {
  return (
    <Widget title='clock' tiles={tiles} {...rest}>
      <Clock onClick={toggleFullScreen} />
    </Widget>
  );
}
