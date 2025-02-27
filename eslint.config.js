/** @type {import("eslint").Linter.Config} */
import { baseConfig } from './dist/esm/index.mjs';

export default [...baseConfig, { ignores: ['dist'] }];
