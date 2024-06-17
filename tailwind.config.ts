import type { Config } from 'tailwindcss';
import flowbite from 'flowbite-react/tailwind';

const scope = 7;

const dimensions = new Array(7).fill(null).reduce((acc, _, i) => {
  acc[i + 1] = `${(i + 1) * 4}rem`;
  return acc;
}, {} as any);

const safelist = new Array(scope).fill(null).reduce((acc, _, i) => {
  acc.push(`h-${i + 1}`);
  acc.push(`w-${i + 1}`);
  acc.push(`grid-cols-${i + 1}`);
  acc.push(`grid-rows-${i + 1}`);
  acc.push(`row-span-${i + 1}`);
  acc.push(`col-span-${i + 1}`);
  return acc;
}, [] as string[]);

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      height: dimensions,
      width: dimensions,
      animation: {
        'bounce-once': 'bounce 300ms ease-in-out 1.5',
      },
    },
  },
  safelist: safelist,
  plugins: [flowbite.plugin()],
};
export default config;
