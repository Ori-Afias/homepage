import Link from 'next/link';
import { Widget, WidgetProps } from '../../primitives';

interface LinkWidgetProps extends WidgetProps {
  url: string;
  image: string;
}

export function LinkWidget({ url, image, ...rest }: LinkWidgetProps) {
  return (
    <Widget {...rest}>
      <Link href={url} target='_blank'>
        <div className='h-full w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${image})` }} />
      </Link>
    </Widget>
  );
}
