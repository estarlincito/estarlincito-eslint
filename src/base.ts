/* eslint-disable @typescript-eslint/ban-ts-comment */
import js from '@eslint/js';
import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import { Linter } from 'eslint';
import safeguard from 'eslint-plugin-safeguard';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import unusedImports from 'eslint-plugin-unused-imports';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
//import tseslint from "typescript-eslint";

// @ts-ignore
import sortKeys from 'eslint-plugin-sort-keys-fix';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});
// @ts-ignore
export const baseConfig: Linter.Config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(
    compat.extends(
      'plugin:prettier/recommended',
      'plugin:import/typescript',
      'plugin:import/recommended',
    ) as Linter.Config,
  ),
  {
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

      'import/no-unresolved': 'off', //check this with js files

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
