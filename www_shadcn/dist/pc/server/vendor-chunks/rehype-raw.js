"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rehype-raw";
exports.ids = ["vendor-chunks/rehype-raw"];
exports.modules = {

/***/ "(ssr)/./node_modules/rehype-raw/index.js":
/*!******************************************!*\
  !*** ./node_modules/rehype-raw/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rehypeRaw)\n/* harmony export */ });\n/* harmony import */ var hast_util_raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hast-util-raw */ \"(ssr)/./node_modules/hast-util-raw/lib/index.js\");\n/**\n * @typedef {import('hast').Root} Root\n * @typedef {import('hast-util-raw').Options} Options\n * @typedef {import('hast-util-raw')} DoNotTouchAsThisImportIncludesRawInTree\n */\n\n\n\n/**\n * Plugin to parse the tree again (and raw nodes).\n * Keeping positional info OK.  🙌\n *\n * @type {import('unified').Plugin<[Options?] | Array<void>, Root>}\n */\nfunction rehypeRaw(options = {}) {\n  return (tree, file) => {\n    // Assume that when a root was given, it’s also returned.\n    const result = /** @type {Root} */ ((0,hast_util_raw__WEBPACK_IMPORTED_MODULE_0__.raw)(tree, file, options))\n    return result\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVoeXBlLXJhdy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsYUFBYSxxQkFBcUI7QUFDbEMsYUFBYSxpQ0FBaUM7QUFDOUMsYUFBYSx5QkFBeUI7QUFDdEM7O0FBRWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNlLCtCQUErQjtBQUM5QztBQUNBO0FBQ0EsOEJBQThCLE1BQU0sSUFBSSxrREFBRztBQUMzQztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93d3dfc2hhZG5jbi8uL25vZGVfbW9kdWxlcy9yZWh5cGUtcmF3L2luZGV4LmpzP2RmYzgiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUm9vdH0gUm9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdC11dGlsLXJhdycpLk9wdGlvbnN9IE9wdGlvbnNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QtdXRpbC1yYXcnKX0gRG9Ob3RUb3VjaEFzVGhpc0ltcG9ydEluY2x1ZGVzUmF3SW5UcmVlXG4gKi9cblxuaW1wb3J0IHtyYXd9IGZyb20gJ2hhc3QtdXRpbC1yYXcnXG5cbi8qKlxuICogUGx1Z2luIHRvIHBhcnNlIHRoZSB0cmVlIGFnYWluIChhbmQgcmF3IG5vZGVzKS5cbiAqIEtlZXBpbmcgcG9zaXRpb25hbCBpbmZvIE9LLiAg8J+ZjFxuICpcbiAqIEB0eXBlIHtpbXBvcnQoJ3VuaWZpZWQnKS5QbHVnaW48W09wdGlvbnM/XSB8IEFycmF5PHZvaWQ+LCBSb290Pn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVoeXBlUmF3KG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gKHRyZWUsIGZpbGUpID0+IHtcbiAgICAvLyBBc3N1bWUgdGhhdCB3aGVuIGEgcm9vdCB3YXMgZ2l2ZW4sIGl04oCZcyBhbHNvIHJldHVybmVkLlxuICAgIGNvbnN0IHJlc3VsdCA9IC8qKiBAdHlwZSB7Um9vdH0gKi8gKHJhdyh0cmVlLCBmaWxlLCBvcHRpb25zKSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rehype-raw/index.js\n");

/***/ })

};
;