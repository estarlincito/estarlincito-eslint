'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const base = require('./base.cjs');

const pkgConfig = [
  // @ts-ignore
  ...base.baseConfig,
  {
    // Force using only "dependencies" inside src/
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    rules: {
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: false,
          optionalDependencies: false,
          peerDependencies: false
        }
      ]
    }
  }
];

exports.pkgConfig = pkgConfig;
