# @estarlincito/eslint \ Base

A comprehensive ESLint configuration package for JavaScript and TypeScript projects that enforces best practices and coding standards.

## 📌 Features

- TypeScript linting with `@typescript-eslint/recommended`.
- Prettier integration via `plugin:prettier/recommended` for automatic formatting.
- Import validation using `plugin:import`.
- Safeguard plugin to prevent raw errors and ensure try-catch blocks.
- Unused imports and variables management with `eslint-plugin-unused-imports`.
- Object key sorting and consistency with `eslint-plugin-sort-keys-fix`.
- Strong rules to prevent common mistakes, like no console logs, no duplicate imports, and enforcing `const`/`let` usage over `var`.

## 🚀 Installation

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

## ⚡ Usage

This ESLint configuration enforces a range of best practices to improve code readability, maintainability, and consistency across JavaScript and TypeScript projects.

## ❌ Incorrect Code

```tsx
import { fetchData as getData } from './api'; // Renaming import is not allowed

let message = 'Hello'; // 'let' should be avoided, use 'const' instead
```

## ✅ Correct Code

```tsx
import fetchData from './api'; // Matches the exported name

const message = 'Hello'; // Use 'const' for variables that do not change
```

## 🛠 How It Works

This ESLint configuration integrates several plugins and rules to enforce consistent and clean coding practices:

- TypeScript rules are applied with `@typescript-eslint/recommended`.
- Prettier ensures code is consistently formatted.
- Safeguard enforces error handling and prevents raw errors.
- Unused imports and variables are flagged using `eslint-plugin-unused-imports`.
- Object key order and other formatting issues are automatically fixed with `eslint-plugin-sort-keys-fix`.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
