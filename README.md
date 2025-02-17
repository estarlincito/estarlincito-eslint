# @estarlincito/eslint

`@estarlincito/eslint` is a flexible ESLint configuration package that provides multiple pre-configured setups for different project types. It includes:

- **`baseConfig`**: A general-purpose ESLint setup for JavaScript and TypeScript projects.
- **`nextJsConfig`**: An extended configuration optimized for Next.js applications.

## 🛠 Available configurations

### 🔹 [baseConfig](/docs/base.md)

### 🔹 [nextJsConfig](/docs/next-js.md)

## 📌 Features

- **Multiple configurations** tailored for different use cases.
- **Extends best practices** with `@typescript-eslint`, `prettier`, `import`, and more.
- **Includes essential plugins** like `safeguard`, `sort-keys-fix`, and `unused-imports`.
- **Ensures clean, maintainable, and performant code**.

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

You can choose the appropriate configuration based on your project needs.

### Base Configuration

For JavaScript or TypeScript projects, use `baseConfig`:

<!-- #### `.eslintrc.js`

```ts
module.exports = {
  extends: '@estarlincito/eslint',
};
``` -->

#### Flat Config Setup `eslint.config.js`

```ts
import { baseConfig } from '@estarlincito/eslint';

export default baseConfig;
```

### Next.js Configuration

For Next.js projects, use `nextJsConfig`:

#### `.eslintrc.js`

```ts
module.exports = {
  extends: '@estarlincito/eslint',
};
```

#### Flat Config Setup

```ts
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

## 🛠 How It Works

- **`baseConfig`**: Ensures general best practices for JavaScript and TypeScript.
- **`nextJsConfig`**: Builds upon `baseConfig` and adds Next.js optimizations.
- Uses `prettier` for formatting consistency.
- Detects unused imports automatically with `unused-imports`.
- Enforces better error handling using `safeguard`.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
