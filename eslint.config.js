/** @type {import("eslint").Linter.Config} */
import { baseConfig } from './dist/index.js';

export default [...baseConfig, { ignores: ['dist'] }];
