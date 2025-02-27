import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import safeguard from 'eslint-plugin-safeguard';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortKeys from 'eslint-plugin-sort-keys-fix';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
});
const baseConfig = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(
    compat.extends(
      "plugin:prettier/recommended",
      "plugin:import/typescript",
      "plugin:import/recommended"
    )
  ),
  {
    ignores: ["node_modules"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2025
      }
      // parserOptions: {
      //   projectService: true,
      // },
      // parserOptions: {
      //   ecmaVersion: 2024,
      //   project: './tsconfig.json',
      //   sourceType: 'module',
      // },
    },
    // settings: {
    //   'import/resolver': {
    //     typescript: true,
    //     node: true,
    //   },
    // },
    plugins: {
      safeguard,
      "simple-import-sort": simpleImportSort,
      "sort-keys-fix": sortKeys,
      "unused-imports": unusedImports
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "consistent-return": "error",
      eqeqeq: "error",
      "import/no-unresolved": "off",
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
    }
  }
];

export { baseConfig };
