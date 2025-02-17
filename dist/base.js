import js from '@eslint/js';
import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import safeguard from 'eslint-plugin-safeguard';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import unusedImports from 'eslint-plugin-unused-imports';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import sortKeys from 'eslint-plugin-sort-keys-fix';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});
export const base = [
  ...fixupConfigRules(
    compat.extends(
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'plugin:import/typescript',
      'plugin:import/recommended',
    ),
  ),
  {
    //files: ['src/**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      safeguard,
      'sort-keys-fix': sortKeys,
      'unused-imports': unusedImports,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      'consistent-return': 'error',
      eqeqeq: 'error',
      'import/no-unresolved': 'error', //check this with js files
      //*
      'max-len': ['off', { code: 80 }],
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-duplicate-imports': 'error',
      'no-else-return': 'error',
      'no-undef': 'error',
      'no-unreachable': 'error',
      'no-unused-labels': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'safeguard/no-raw-error': 'warn',
      'safeguard/trycatch-ensurer': 'off',
      'sort-keys': 'off',
      'sort-keys-fix/sort-keys-fix': [
        'warn',
        'asc',
        { caseSensitive: false, natural: true },
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
];
