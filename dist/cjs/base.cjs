'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const path = require('node:path');
const node_url = require('node:url');
const compat$1 = require('@eslint/compat');
const eslintrc = require('@eslint/eslintrc');
const js = require('@eslint/js');
const eslintConfigPrettier = require('eslint-config-prettier');
const safeguard = require('eslint-plugin-safeguard');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const sortKeys = require('eslint-plugin-sort-keys-fix');
const unusedImports = require('eslint-plugin-unused-imports');
const globals = require('globals');
const tseslint = require('typescript-eslint');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
const __filename$1 = node_url.fileURLToPath((typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('base.cjs', document.baseURI).href)));
const __dirname$1 = path.dirname(__filename$1);
const compat = new eslintrc.FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname$1,
  recommendedConfig: js.configs.recommended
});
const baseConfig = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...compat$1.fixupConfigRules(
    compat.extends(
      "plugin:prettier/recommended",
      "plugin:import/typescript",
      "plugin:import/recommended",
      "prettier"
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
    },
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

exports.baseConfig = baseConfig;
