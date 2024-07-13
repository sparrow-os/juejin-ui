"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rehype-sanitize";
exports.ids = ["vendor-chunks/rehype-sanitize"];
exports.modules = {

/***/ "(ssr)/./node_modules/rehype-sanitize/index.js":
/*!***********************************************!*\
  !*** ./node_modules/rehype-sanitize/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rehypeSanitize),\n/* harmony export */   defaultSchema: () => (/* reexport safe */ hast_util_sanitize__WEBPACK_IMPORTED_MODULE_0__.defaultSchema)\n/* harmony export */ });\n/* harmony import */ var hast_util_sanitize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hast-util-sanitize */ \"(ssr)/./node_modules/hast-util-sanitize/lib/schema.js\");\n/* harmony import */ var hast_util_sanitize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hast-util-sanitize */ \"(ssr)/./node_modules/hast-util-sanitize/lib/index.js\");\n/**\n * @typedef {import('hast').Root} Root\n *\n * @typedef {import('hast-util-sanitize').Schema} Options\n *   The sanitation schema defines how and if nodes and properties should be cleaned.\n *   See `hast-util-sanitize`.\n *   The default schema is exported as `defaultSchema`.\n */\n\n\n\n/**\n * Plugin to sanitize HTML.\n *\n * @type {import('unified').Plugin<[Options?] | Array<void>, Root, Root>}\n */\nfunction rehypeSanitize(options = hast_util_sanitize__WEBPACK_IMPORTED_MODULE_0__.defaultSchema) {\n  // @ts-expect-error: assume input `root` matches output root.\n  return (tree) => (0,hast_util_sanitize__WEBPACK_IMPORTED_MODULE_1__.sanitize)(tree, options)\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVoeXBlLXNhbml0aXplL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLGFBQWEscUJBQXFCO0FBQ2xDO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRThFOztBQUU5RTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDZSxrQ0FBa0MsNkRBQWE7QUFDOUQ7QUFDQSxtQkFBbUIsNERBQWdCO0FBQ25DOztBQUVnRCIsInNvdXJjZXMiOlsid2VicGFjazovL3d3d19zaGFkbmNuLy4vbm9kZV9tb2R1bGVzL3JlaHlwZS1zYW5pdGl6ZS9pbmRleC5qcz83MjIzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlJvb3R9IFJvb3RcbiAqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0LXV0aWwtc2FuaXRpemUnKS5TY2hlbWF9IE9wdGlvbnNcbiAqICAgVGhlIHNhbml0YXRpb24gc2NoZW1hIGRlZmluZXMgaG93IGFuZCBpZiBub2RlcyBhbmQgcHJvcGVydGllcyBzaG91bGQgYmUgY2xlYW5lZC5cbiAqICAgU2VlIGBoYXN0LXV0aWwtc2FuaXRpemVgLlxuICogICBUaGUgZGVmYXVsdCBzY2hlbWEgaXMgZXhwb3J0ZWQgYXMgYGRlZmF1bHRTY2hlbWFgLlxuICovXG5cbmltcG9ydCB7c2FuaXRpemUgYXMgaGFzdFV0aWxTYW5pdGl6ZSwgZGVmYXVsdFNjaGVtYX0gZnJvbSAnaGFzdC11dGlsLXNhbml0aXplJ1xuXG4vKipcbiAqIFBsdWdpbiB0byBzYW5pdGl6ZSBIVE1MLlxuICpcbiAqIEB0eXBlIHtpbXBvcnQoJ3VuaWZpZWQnKS5QbHVnaW48W09wdGlvbnM/XSB8IEFycmF5PHZvaWQ+LCBSb290LCBSb290Pn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVoeXBlU2FuaXRpemUob3B0aW9ucyA9IGRlZmF1bHRTY2hlbWEpIHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvcjogYXNzdW1lIGlucHV0IGByb290YCBtYXRjaGVzIG91dHB1dCByb290LlxuICByZXR1cm4gKHRyZWUpID0+IGhhc3RVdGlsU2FuaXRpemUodHJlZSwgb3B0aW9ucylcbn1cblxuZXhwb3J0IHtkZWZhdWx0U2NoZW1hfSBmcm9tICdoYXN0LXV0aWwtc2FuaXRpemUnXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rehype-sanitize/index.js\n");

/***/ })

};
;