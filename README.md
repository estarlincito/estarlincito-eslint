# @estarlincito/eslint

A customizable ESLint configuration designed to enforce consistent coding styles and best practices in JavaScript and TypeScript projects.

## 🚀 Features

- Comprehensive TypeScript linting with `@typescript-eslint/recommended`.
- Integration with Prettier for automatic formatting via `plugin:prettier/recommended`.
- Strong import validation with `plugin:import`.
- Safeguard plugin to prevent raw errors and enforce try-catch blocks.
- Rule enforcement for cleaner, more maintainable code:
  - No unused variables or imports.
  - No console logs or debuggers.
  - Prefer `const` and `let` over `var`.
  - Enforce object shorthand, template literals, and arrow callbacks.

## 📦 Installation

Install the package using `pnpm`, `npm`, or `yarn`:

```sh
pnpm add @estarlincito/eslint
# or
npm install @estarlincito/eslint
# or
yarn add @estarlincito/eslint
```

## 🛠 Configuration

To use this ESLint configuration, create an `eslint.config.js` file and extend the configuration:

```js
import eslintConfig from '@estarlincito/eslint';

export default eslintConfig;
```

This will apply the rules and plugins defined in the `@estarlincito/eslint` configuration to your project.

## 🛠 Available Utilities

### 🔹 [apiFetch](/docs/api-fetch.md)

<!-- ## 📝 Rules Overview

Here’s a list of key rules included in the configuration:

### 🔹 TypeScript Rules

- `@typescript-eslint/no-unused-vars`: Warn on unused variables.
- `@typescript-eslint/no-explicit-any`: Avoid the `any` type.

### 🔹 General Rules

- `consistent-return`: Enforce consistency in return statements.
- `eqeqeq`: Require strict equality (`===`).
- `no-console`: Warn about console log usage.
- `no-debugger`: Warn about debugger statements.
- `no-duplicate-imports`: Prevent duplicate imports.
- `no-var`: Enforce usage of `let` and `const` instead of `var`.
- `object-shorthand`: Enforce object shorthand syntax.

### 🔹 Import Rules

- `import/no-unresolved`: Ensure that imports are resolvable.
- `sort-keys-fix/sort-keys-fix`: Automatically fix object key order.

### 🔹 Plugin Rules

- `safeguard/no-raw-error`: Warn about raw error usage.
- `unused-imports/no-unused-imports`: Remove unused imports automatically. -->

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
