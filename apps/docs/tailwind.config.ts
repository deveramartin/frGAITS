import type { Config } from 'tailwindcss';
import sharedConfig from '@gaits/config/tailwind';

const config: Config = {
  ...sharedConfig,
  content: [
    './src/**/*.{ts,tsx,md,mdx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
};

export default config;
