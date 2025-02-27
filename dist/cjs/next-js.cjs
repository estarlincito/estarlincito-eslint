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
      // React scope no longer necessary with new JSX transform.
      "react/react-in-jsx-scope": "off"
    },
    settings: { react: { version: "detect" } }
  }
];

exports.nextJsConfig = nextJsConfig;
