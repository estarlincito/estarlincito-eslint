'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const eslint = require('@eslint/js');
const parser = require('@typescript-eslint/parser');
const eslintConfigPrettier = require('eslint-config-prettier');
const Import = require('eslint-plugin-import');
const prettierPlugin = require('eslint-plugin-prettier');
const safeguard = require('eslint-plugin-safeguard');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const sortKeys = require('eslint-plugin-sort-keys-fix');
const unusedImports = require('eslint-plugin-unused-imports');
const globals = require('globals');
const tseslint = require('typescript-eslint');

const baseConfig = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  eslintConfigPrettier,
  Import.flatConfigs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    ignores: ["node_modules"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2025
      },
      parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: process.cwd()
        // sourceType: 'module',
        // ecmaVersion: 'latest',
      }
    },
    plugins: {
      prettier: prettierPlugin,
      safeguard,
      "simple-import-sort": simpleImportSort,
      "sort-keys-fix": sortKeys,
      "unused-imports": unusedImports
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "consistent-return": "error",
      eqeqeq: "error",
      "import/no-unresolved": "error",
      //check this with js files
      "max-len": ["off", { code: 80 }],
      "no-console": "warn",
      "no-debugger": "warn",
      "no-duplicate-imports": "error",
      "no-else-return": "error",
      "no-undef": "error",
      "no-unreachable": "error",
      "no-unused-labels": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-arrow-callback": "error",
      "prefer-template": "error",
      "prettier/prettier": "error",
      "safeguard/no-raw-error": "warn",
      "safeguard/no-self-assignments": "error",
      "safeguard/trycatch-ensurer": "off",
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
      "sort-keys": "off",
      "sort-keys-fix/sort-keys-fix": [
        "warn",
        "asc",
        { caseSensitive: false, natural: true }
      ],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          vars: "all",
          varsIgnorePattern: "^_"
        }
      ]
    },
    settings: {
      "import/resolver": {
        node: true,
        typescript: {
          alwaysTryTypes: true,
          project: true
        }
      }
    }
  }
);

exports.baseConfig = baseConfig;
