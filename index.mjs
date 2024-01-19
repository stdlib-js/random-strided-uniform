// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t,{ndarray as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-nullary@v0.1.0-esm/index.mjs";import e,{ndarray as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform@v0.1.0-esm/index.mjs";function d(r,t,n,e,s,d,f,m){var o,l,c;if(o={arity:0,fcn:null},f){if(0===t&&0===s)return l=i(r)?r.get(n):r[n],c=i(e)?e.get(d):e[d],o.fcn=a.factory(l,c,m),o;o.fcn=a.factory(m)}else o.fcn=a;return o.arity+=2,o}function f(r,n,s,i,a,f,m,o){var l=d(n,s,0,i,a,0,arguments.length>7,o);return 0===l.arity?(t([f],[r],[m],l.fcn),f):(e([n,i,f],[r],[s,a,m],l.fcn),f)}function m(r,t,e,i,a,f,m,o,l,c,j){var y=d(t,e,i,a,f,m,arguments.length>10,j);return 0===y.arity?(n([o],[r],[l],[c],y.fcn),o):(s([t,a,o],[r],[e,f,l],[i,m,c],y.fcn),o)}r(f,"ndarray",m);export{f as default,m as ndarray};
//# sourceMappingURL=index.mjs.map