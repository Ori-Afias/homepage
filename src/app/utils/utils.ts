import { MouseEventHandler } from 'react';

export const toggleFullScreen: MouseEventHandler<HTMLDivElement> = (event) => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    (event.target as HTMLDivElement).requestFullscreen();
  }
};
