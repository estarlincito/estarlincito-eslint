'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const base = require('./base.cjs');
const nextJs = require('./next-js.cjs');
const pkg = require('./pkg.cjs');



exports.baseConfig = base.baseConfig;
exports.nextJsConfig = nextJs.nextJsConfig;
exports.pkgConfig = pkg.pkgConfig;
