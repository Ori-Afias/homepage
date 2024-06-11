'use client';

import { MouseEventHandler } from 'react';
import { Widget, WidgetProps } from '../../primitives/Widget';
import { Clock } from './Clock';

interface ClockWidgetProps extends Pick<WidgetProps, 'tiles'> {}

export function ClockWidget({ tiles = [3, 2] }: ClockWidgetProps) {
  const onClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      (event.target as HTMLDivElement).requestFullscreen();
    }
  };

  return (
    <Widget title='clock' tiles={tiles}>
      <Clock onClick={onClick} />
    </Widget>
  );
}
