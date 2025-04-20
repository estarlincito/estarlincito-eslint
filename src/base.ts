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
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-base-to-string': 'warn',
      '@typescript-eslint/no-duplicate-type-constituents': 'warn',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-meaningless-void-operator': 'warn',
      '@typescript-eslint/no-redundant-type-constituents': 'warn',
      '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
      '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/prefer-find': 'warn',
      '@typescript-eslint/prefer-includes': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',
      '@typescript-eslint/prefer-readonly': 'warn',
      '@typescript-eslint/require-array-sort-compare': 'warn',
      '@typescript-eslint/restrict-template-expressions': 'warn',
      '@typescript-eslint/switch-exhaustiveness-check': 'warn',
      'arrow-body-style': ['warn', 'as-needed'],
      'consistent-return': 'error',
      eqeqeq: 'error',
      'import/no-extraneous-dependencies': 'warn',
      'import/no-unresolved': 'error',

      // check this with js files
      'max-len': ['off', { code: 80 }],
      'no-await-in-loop': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-duplicate-imports': 'error',
      'no-else-return': 'error',

      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-implicit-coercion': 'warn',
      'no-labels': 'error',

      'no-lonely-if': 'warn',

      'no-magic-numbers': ['warn'],

      'no-nested-ternary': 'warn',

      'no-new-func': 'error',
      'no-param-reassign': ['warn', { props: true }],

      'no-plusplus': 'warn',

      'no-redeclare': 'error',

      'no-return-await': 'error',
      'no-shadow': 'error',
      'no-undef': 'error',
      'no-unreachable': 'error',
      'no-unused-labels': 'error',
      'no-useless-constructor': 'warn',
      'no-var': 'error',
      'object-shorthand': 'error',
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', next: 'return', prev: 'block' },
        { blankLine: 'always', next: 'return', prev: 'const' },
        { blankLine: 'always', next: 'function', prev: '*' },
      ],

      'prefer-arrow-callback': 'error',
      'prefer-destructuring': [
        'warn',
        {
          array: false,
          object: true,
        },
      ],

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
      'spaced-comment': ['warn', 'always'],
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
);
