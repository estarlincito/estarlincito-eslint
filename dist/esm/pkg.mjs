import { baseConfig } from './base.mjs';

const pkgConfig = [
  // @ts-ignore
  ...baseConfig,
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

export { pkgConfig };
