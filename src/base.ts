/* eslint-disable @typescript-eslint/ban-ts-comment */
import eslint from '@eslint/js';
import parser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
// @ts-ignore
import Import from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import safeguard from 'eslint-plugin-safeguard';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
// @ts-ignore
import sortKeys from 'eslint-plugin-sort-keys-fix';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export const baseConfig: tseslint.ConfigArray = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  eslintConfigPrettier,
  Import.flatConfigs.recommended,

  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['node_modules'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2025,
      },
      parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: process.cwd(),
        // sourceType: 'module',
        // ecmaVersion: 'latest',
      },
    },
    plugins: {
      prettier: prettierPlugin,
      safeguard,
      'simple-import-sort': simpleImportSort,
      'sort-keys-fix': sortKeys,
      'unused-imports': unusedImports,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      'consistent-return': 'error',
      eqeqeq: 'error',
      'import/no-unresolved': 'error',
      //check this with js files
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
      'prettier/prettier': 'error',
      'safeguard/no-raw-error': 'warn',

      'safeguard/no-self-assignments': 'error',

      'safeguard/trycatch-ensurer': 'off',

      'simple-import-sort/exports': 'error',

      'simple-import-sort/imports': 'error',

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
    settings: {
      'import/resolver': {
        node: true,
        typescript: {
          alwaysTryTypes: true,
          project: true,
        },
      },
    },
  },
);
