/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Linter } from 'eslint';

import { baseConfig } from './base.js';

// @ts-ignore
export const pkgConfig: Linter.Config = [
  // @ts-ignore
  ...baseConfig,
  {
    // Force using only "dependencies" inside src/
    files: ['src/**/*.{ts,tsx,js,jsx}'],
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: false,
          optionalDependencies: false,
          peerDependencies: false,
        },
      ],
    },
  },
];
