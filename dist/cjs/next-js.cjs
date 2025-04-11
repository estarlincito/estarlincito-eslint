'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const pluginNext = require('@next/eslint-plugin-next');
const pluginReact = require('eslint-plugin-react');
const pluginReactHooks = require('eslint-plugin-react-hooks');
const base = require('./base.cjs');

const nextJsConfig = [
  // @ts-ignore
  ...base.baseConfig,
  { ignores: [".next"] },
  { files: ["next-env.d.ts"], rules: { "spaced-comment": ["off"] } },
  {
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions
    }
  },
  {
    plugins: {
      "@next/next": pluginNext
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules
    }
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-curly-brace-presence": [
        "error",
        { children: "never", props: "never" }
      ],
      "react/jsx-fragments": ["error", "syntax"],
      "react/jsx-no-script-url": "error",
      "react/jsx-no-useless-fragment": "warn",
      "react/jsx-pascal-case": "error",
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          ignoreCase: true,
          noSortAlphabetically: false,
          shorthandFirst: true
        }
      ],
      "react/no-array-index-key": "warn",
      "react/no-danger": "error",
      "react/no-unused-state": "error",
      // React scope no longer necessary with new JSX transform.
      "react/react-in-jsx-scope": "off",
      "react/self-closing-comp": "warn"
    },
    settings: { react: { version: "detect" } }
  }
];

exports.nextJsConfig = nextJsConfig;
