"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-newline-to-break";
exports.ids = ["vendor-chunks/mdast-util-newline-to-break"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-newline-to-break/lib/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/mdast-util-newline-to-break/lib/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newlineToBreak: () => (/* binding */ newlineToBreak)\n/* harmony export */ });\n/* harmony import */ var mdast_util_find_and_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdast-util-find-and-replace */ \"(ssr)/./node_modules/mdast-util-find-and-replace/lib/index.js\");\n/**\n * @typedef {import('mdast').Content} Content\n * @typedef {import('mdast').Root} Root\n * @typedef {import('mdast-util-find-and-replace').ReplaceFunction} ReplaceFunction\n */\n\n/**\n * @typedef {Content | Root} Node\n */\n\n\n\n/**\n * Turn normal line endings into hard breaks.\n *\n * @param {Node} tree\n *   Tree to change.\n * @returns {void}\n *   Nothing.\n */\nfunction newlineToBreak(tree) {\n  (0,mdast_util_find_and_replace__WEBPACK_IMPORTED_MODULE_0__.findAndReplace)(tree, /\\r?\\n|\\r/g, replace)\n}\n\n/**\n * Replace line endings.\n *\n * @type {ReplaceFunction}\n */\nfunction replace() {\n  return {type: 'break'}\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1uZXdsaW5lLXRvLWJyZWFrL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSx1REFBdUQ7QUFDcEU7O0FBRUE7QUFDQSxhQUFhLGdCQUFnQjtBQUM3Qjs7QUFFMEQ7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCxFQUFFLDJFQUFjO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3d3X3NoYWRuY24vLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1uZXdsaW5lLXRvLWJyZWFrL2xpYi9pbmRleC5qcz9lYWYzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5Db250ZW50fSBDb250ZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLlJvb3R9IFJvb3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZmluZC1hbmQtcmVwbGFjZScpLlJlcGxhY2VGdW5jdGlvbn0gUmVwbGFjZUZ1bmN0aW9uXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7Q29udGVudCB8IFJvb3R9IE5vZGVcbiAqL1xuXG5pbXBvcnQge2ZpbmRBbmRSZXBsYWNlfSBmcm9tICdtZGFzdC11dGlsLWZpbmQtYW5kLXJlcGxhY2UnXG5cbi8qKlxuICogVHVybiBub3JtYWwgbGluZSBlbmRpbmdzIGludG8gaGFyZCBicmVha3MuXG4gKlxuICogQHBhcmFtIHtOb2RlfSB0cmVlXG4gKiAgIFRyZWUgdG8gY2hhbmdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKiAgIE5vdGhpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXdsaW5lVG9CcmVhayh0cmVlKSB7XG4gIGZpbmRBbmRSZXBsYWNlKHRyZWUsIC9cXHI/XFxufFxcci9nLCByZXBsYWNlKVxufVxuXG4vKipcbiAqIFJlcGxhY2UgbGluZSBlbmRpbmdzLlxuICpcbiAqIEB0eXBlIHtSZXBsYWNlRnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2UoKSB7XG4gIHJldHVybiB7dHlwZTogJ2JyZWFrJ31cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-newline-to-break/lib/index.js\n");

/***/ })

};
;