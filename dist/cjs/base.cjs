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

function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
  if (e) {
    for (const k in e) {
      if (k !== 'default') {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}

const tseslint__namespace = /*#__PURE__*/_interopNamespaceDefault(tseslint);

const baseConfig = tseslint__namespace.config(
  eslint.configs.recommended,
  tseslint__namespace.configs.recommended,
  tseslint__namespace.configs.strict,
  tseslint__namespace.configs.stylistic,
  eslintConfigPrettier,
  Import.flatConfigs.recommended,
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/temp/**", "**/tpm/**"]
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
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
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-base-to-string": "warn",
      "@typescript-eslint/no-duplicate-type-constituents": "warn",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-meaningless-void-operator": "warn",
      "@typescript-eslint/no-redundant-type-constituents": "warn",
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",
      "@typescript-eslint/no-unsafe-enum-comparison": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/prefer-find": "warn",
      "@typescript-eslint/prefer-includes": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      "@typescript-eslint/prefer-optional-chain": "warn",
      "@typescript-eslint/prefer-readonly": "warn",
      "@typescript-eslint/require-array-sort-compare": "warn",
      "@typescript-eslint/restrict-template-expressions": "warn",
      "@typescript-eslint/switch-exhaustiveness-check": "warn",
      "arrow-body-style": ["warn", "as-needed"],
      "consistent-return": "error",
      eqeqeq: "error",
      "import/no-cycle": [
        "error",
        {
          allowUnsafeDynamicCyclicDependency: false,
          ignoreExternal: true,
          maxDepth: 2
        }
      ],
      "import/no-unresolved": "error",
      // check this with js files
      "max-len": ["off", { code: 80 }],
      "no-await-in-loop": "warn",
      "no-console": "warn",
      "no-debugger": "warn",
      "no-duplicate-imports": "error",
      "no-else-return": "error",
      "no-eval": "error",
      "no-extend-native": "error",
      "no-implicit-coercion": "warn",
      "no-labels": "error",
      "no-lonely-if": "warn",
      "no-nested-ternary": "warn",
      "no-new-func": "error",
      "no-param-reassign": ["warn", { props: true }],
      "no-plusplus": "warn",
      "no-redeclare": "error",
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["**/../*"],
              message: "Use absolute imports with @alias aliases instead"
            }
          ]
        }
      ],
      "no-return-await": "error",
      "no-shadow": "error",
      "no-undef": "error",
      "no-unreachable": "error",
      "no-unused-labels": "error",
      "no-useless-constructor": "warn",
      "no-var": "error",
      "object-shorthand": "error",
      "padding-line-between-statements": [
        "warn",
        { blankLine: "always", next: "return", prev: "block" },
        { blankLine: "always", next: "return", prev: "const" },
        { blankLine: "always", next: "function", prev: "*" }
      ],
      "prefer-arrow-callback": "error",
      "prefer-destructuring": [
        "warn",
        {
          array: false,
          object: true
        }
      ],
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
      "spaced-comment": ["warn", "always"],
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
      "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"]
      },
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
