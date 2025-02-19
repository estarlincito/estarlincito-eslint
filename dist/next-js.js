/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
// @ts-ignore
import pluginNext from '@next/eslint-plugin-next';
import pluginReact from 'eslint-plugin-react';
// @ts-ignore
import pluginReactHooks from 'eslint-plugin-react-hooks';
import { baseConfig } from './base.js';
// @ts-ignore
export const nextJsConfig = [
    // @ts-ignore
    ...baseConfig,
    { ignores: ['.next'] },
    {
        ...pluginReact.configs.flat.recommended,
        languageOptions: {
            ...pluginReact.configs.flat.recommended.languageOptions,
        },
    },
    {
        plugins: {
            '@next/next': pluginNext,
        },
        rules: {
            ...pluginNext.configs.recommended.rules,
            ...pluginNext.configs['core-web-vitals'].rules,
        },
    },
    {
        plugins: {
            'react-hooks': pluginReactHooks,
        },
        rules: {
            ...pluginReactHooks.configs.recommended.rules,
            // React scope no longer necessary with new JSX transform.
            'react/react-in-jsx-scope': 'off',
        },
        settings: { react: { version: 'detect' } },
    },
];
