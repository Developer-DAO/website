import { colorClasses, theme, variantColorClasses } from '@gordo-d/d-d-ui-components';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,css}',
    './node_modules/@gordo-d/d-d-ui-components/**/*.{css,js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [...colorClasses, ...variantColorClasses],
  theme: {
    extend: {
      ...theme,
      // fontFamily: {
      // headline: ['var(--font-headline)'],
      // paragraph: ['var(--font-paragraph)'],
      // },
    },
  },
  plugins: [],
};
export default config