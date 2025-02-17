# @estarlincito/eslint: baseConfig

A comprehensive ESLint configuration package for JavaScript and TypeScript projects that enforces best practices and coding standards.

## 📌 Features

- **Pre-configured ESLint setup** for TypeScript and JavaScript projects.
- **Integrates best practices** with plugins like `@typescript-eslint`, `prettier`, `import`, and more.
- **Ensures code consistency** with `sort-keys-fix` and `unused-imports`.
- **Encourages clean code** with `safeguard` rules to avoid raw errors and enforce try-catch usage.

## 🚀 Installation

Install the package using `pnpm`, `npm`, or `yarn`:

```bash
pnpm add -D eslint @estarlincito/eslint
```

```bash
npm install --save-dev eslint @estarlincito/eslint
```

```bash
yarn add -D eslint @estarlincito/eslint
```

## 🛠 Configuration

<!-- Create an `.eslintrc.js` file in your project's root and extend from `@estarlincito/eslint`:

```js
module.exports = {
  extends: '@estarlincito/eslint',
};
``` -->

Create an `eslint.config.js` file in your Next.js project's root and import from `baseConfig`:

```js
import { baseConfig } from '@estarlincito/eslint';

export default baseConfig;
```

## ⚡ Usage

Run ESLint with your package manager:

```bash
pnpm eslint .
```

```bash
npm run eslint .
```

```bash
yarn eslint .
```

## ❌ Incorrect Code

```js
const x = 10;
if (x == '10') {
  console.log('Loose comparison');
}
```

## ✅ Correct Code

```js
const x = 10;
if (x === 10) {
  console.log('Strict comparison');
}
```

## 🛠 How It Works

- Uses `@eslint/js` and `@eslint/compat` for modern ESLint compatibility.
- Integrates TypeScript, Prettier, and Import rules.
- Enforces best practices such as:
  - No unused imports or variables (`unused-imports`).
  - No console logs in production (`no-console`).
  - Consistent return statements (`consistent-return`).
  - Sorted object keys (`sort-keys-fix`).

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
