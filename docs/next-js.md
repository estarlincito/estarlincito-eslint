# @estarlincito/eslint: nextJsConfig

`nextJsConfig` is an ESLint configuration package tailored for Next.js projects. It builds upon `nextJsConfig` by adding Next.js-specific linting rules, ensuring best practices for performance, accessibility, and code consistency.

## 📌 Features

- **Pre-configured ESLint setup** for Next.js projects.
- **Integrates best practices** with `next`, `react`, `typescript`, and `core-web-vitals` rules.
- **Extends from the base configuration** of `@estarlincito/eslint`.
- **Enforces clean and optimized React/Next.js code**.

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

<!-- Create an `.eslintrc.js` file in your Next.js project's root and extend from `@estarlincito/eslint`:

```js
module.exports = {
  extends: '@estarlincito/eslint',
};
``` -->

Create an `eslint.config.js` file in your Next.js project's root and import from `nextJsConfig`:

```js
import { nextJsConfig } from '@estarlincito/eslint';

export default nextJsConfig;
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
const Component = () => {
  return <img src='/image.jpg' />;
};
```

## ✅ Correct Code

```js
import Image from 'next/image';

const Component = () => {
  return <Image src='/image.jpg' alt='Description' width={500} height={300} />;
};
```

## 🛠 How It Works

- Extends `@estarlincito/eslint` as the base.
- Uses `next/core-web-vitals` for optimal Next.js performance.
- Enforces React best practices with `react/recommended`.
- Ensures TypeScript compatibility with `next/typescript`.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
