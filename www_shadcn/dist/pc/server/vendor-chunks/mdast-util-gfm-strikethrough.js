"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-gfm-strikethrough";
exports.ids = ["vendor-chunks/mdast-util-gfm-strikethrough"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-gfm-strikethrough/lib/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-strikethrough/lib/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmStrikethroughFromMarkdown: () => (/* binding */ gfmStrikethroughFromMarkdown),\n/* harmony export */   gfmStrikethroughToMarkdown: () => (/* binding */ gfmStrikethroughToMarkdown)\n/* harmony export */ });\n/* harmony import */ var mdast_util_to_markdown_lib_util_container_phrasing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdast-util-to-markdown/lib/util/container-phrasing.js */ \"(ssr)/./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js\");\n/* harmony import */ var mdast_util_to_markdown_lib_util_track_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdast-util-to-markdown/lib/util/track.js */ \"(ssr)/./node_modules/mdast-util-to-markdown/lib/util/track.js\");\n/**\n * @typedef {import('mdast').Delete} Delete\n *\n * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle\n *\n * @typedef {import('mdast-util-to-markdown').ConstructName} ConstructName\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle\n */\n\n\n\n\n// To do: next major: expose functions.\n// To do: next major: use `state`, state utilities.\n\n/**\n * List of constructs that occur in phrasing (paragraphs, headings), but cannot\n * contain strikethrough.\n * So they sort of cancel each other out.\n * Note: could use a better name.\n *\n * Note: keep in sync with: <https://github.com/syntax-tree/mdast-util-to-markdown/blob/8ce8dbf/lib/unsafe.js#L14>\n *\n * @type {Array<ConstructName>}\n */\nconst constructsWithoutStrikethrough = [\n  'autolink',\n  'destinationLiteral',\n  'destinationRaw',\n  'reference',\n  'titleQuote',\n  'titleApostrophe'\n]\n\nhandleDelete.peek = peekDelete\n\n/**\n * Extension for `mdast-util-from-markdown` to enable GFM strikethrough.\n *\n * @type {FromMarkdownExtension}\n */\nconst gfmStrikethroughFromMarkdown = {\n  canContainEols: ['delete'],\n  enter: {strikethrough: enterStrikethrough},\n  exit: {strikethrough: exitStrikethrough}\n}\n\n/**\n * Extension for `mdast-util-to-markdown` to enable GFM strikethrough.\n *\n * @type {ToMarkdownExtension}\n */\nconst gfmStrikethroughToMarkdown = {\n  unsafe: [\n    {\n      character: '~',\n      inConstruct: 'phrasing',\n      notInConstruct: constructsWithoutStrikethrough\n    }\n  ],\n  handlers: {delete: handleDelete}\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterStrikethrough(token) {\n  this.enter({type: 'delete', children: []}, token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitStrikethrough(token) {\n  this.exit(token)\n}\n\n/**\n * @type {ToMarkdownHandle}\n * @param {Delete} node\n */\nfunction handleDelete(node, _, context, safeOptions) {\n  const tracker = (0,mdast_util_to_markdown_lib_util_track_js__WEBPACK_IMPORTED_MODULE_0__.track)(safeOptions)\n  const exit = context.enter('strikethrough')\n  let value = tracker.move('~~')\n  value += (0,mdast_util_to_markdown_lib_util_container_phrasing_js__WEBPACK_IMPORTED_MODULE_1__.containerPhrasing)(node, context, {\n    ...tracker.current(),\n    before: value,\n    after: '~'\n  })\n  value += tracker.move('~~')\n  exit()\n  return value\n}\n\n/** @type {ToMarkdownHandle} */\nfunction peekDelete() {\n  return '~'\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tc3RyaWtldGhyb3VnaC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0EsYUFBYSx3QkFBd0I7QUFDckM7QUFDQSxhQUFhLG1EQUFtRDtBQUNoRSxhQUFhLDhDQUE4QztBQUMzRCxhQUFhLDJDQUEyQztBQUN4RDtBQUNBLGFBQWEsZ0RBQWdEO0FBQzdELGFBQWEsMENBQTBDO0FBQ3ZELGFBQWEseUNBQXlDO0FBQ3REOztBQUV1RjtBQUN6Qjs7QUFFOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDTztBQUNQO0FBQ0EsVUFBVSxrQ0FBa0M7QUFDNUMsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0E7QUFDQSxjQUFjLDZCQUE2QjtBQUMzQzs7QUFFQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQSxrQkFBa0IsK0VBQUs7QUFDdkI7QUFDQTtBQUNBLFdBQVcsd0dBQWlCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLGtCQUFrQjtBQUM3QjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93d3dfc2hhZG5jbi8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLWdmbS1zdHJpa2V0aHJvdWdoL2xpYi9pbmRleC5qcz84ODVkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5EZWxldGV9IERlbGV0ZVxuICpcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLkNvbXBpbGVDb250ZXh0fSBDb21waWxlQ29udGV4dFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duJykuRXh0ZW5zaW9ufSBGcm9tTWFya2Rvd25FeHRlbnNpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLkhhbmRsZX0gRnJvbU1hcmtkb3duSGFuZGxlXG4gKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC10by1tYXJrZG93bicpLkNvbnN0cnVjdE5hbWV9IENvbnN0cnVjdE5hbWVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nKS5PcHRpb25zfSBUb01hcmtkb3duRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuSGFuZGxlfSBUb01hcmtkb3duSGFuZGxlXG4gKi9cblxuaW1wb3J0IHtjb250YWluZXJQaHJhc2luZ30gZnJvbSAnbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9jb250YWluZXItcGhyYXNpbmcuanMnXG5pbXBvcnQge3RyYWNrfSBmcm9tICdtZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL3RyYWNrLmpzJ1xuXG4vLyBUbyBkbzogbmV4dCBtYWpvcjogZXhwb3NlIGZ1bmN0aW9ucy5cbi8vIFRvIGRvOiBuZXh0IG1ham9yOiB1c2UgYHN0YXRlYCwgc3RhdGUgdXRpbGl0aWVzLlxuXG4vKipcbiAqIExpc3Qgb2YgY29uc3RydWN0cyB0aGF0IG9jY3VyIGluIHBocmFzaW5nIChwYXJhZ3JhcGhzLCBoZWFkaW5ncyksIGJ1dCBjYW5ub3RcbiAqIGNvbnRhaW4gc3RyaWtldGhyb3VnaC5cbiAqIFNvIHRoZXkgc29ydCBvZiBjYW5jZWwgZWFjaCBvdGhlciBvdXQuXG4gKiBOb3RlOiBjb3VsZCB1c2UgYSBiZXR0ZXIgbmFtZS5cbiAqXG4gKiBOb3RlOiBrZWVwIGluIHN5bmMgd2l0aDogPGh0dHBzOi8vZ2l0aHViLmNvbS9zeW50YXgtdHJlZS9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2Jsb2IvOGNlOGRiZi9saWIvdW5zYWZlLmpzI0wxND5cbiAqXG4gKiBAdHlwZSB7QXJyYXk8Q29uc3RydWN0TmFtZT59XG4gKi9cbmNvbnN0IGNvbnN0cnVjdHNXaXRob3V0U3RyaWtldGhyb3VnaCA9IFtcbiAgJ2F1dG9saW5rJyxcbiAgJ2Rlc3RpbmF0aW9uTGl0ZXJhbCcsXG4gICdkZXN0aW5hdGlvblJhdycsXG4gICdyZWZlcmVuY2UnLFxuICAndGl0bGVRdW90ZScsXG4gICd0aXRsZUFwb3N0cm9waGUnXG5dXG5cbmhhbmRsZURlbGV0ZS5wZWVrID0gcGVla0RlbGV0ZVxuXG4vKipcbiAqIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtZnJvbS1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTSBzdHJpa2V0aHJvdWdoLlxuICpcbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25FeHRlbnNpb259XG4gKi9cbmV4cG9ydCBjb25zdCBnZm1TdHJpa2V0aHJvdWdoRnJvbU1hcmtkb3duID0ge1xuICBjYW5Db250YWluRW9sczogWydkZWxldGUnXSxcbiAgZW50ZXI6IHtzdHJpa2V0aHJvdWdoOiBlbnRlclN0cmlrZXRocm91Z2h9LFxuICBleGl0OiB7c3RyaWtldGhyb3VnaDogZXhpdFN0cmlrZXRocm91Z2h9XG59XG5cbi8qKlxuICogRXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC10by1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTSBzdHJpa2V0aHJvdWdoLlxuICpcbiAqIEB0eXBlIHtUb01hcmtkb3duRXh0ZW5zaW9ufVxuICovXG5leHBvcnQgY29uc3QgZ2ZtU3RyaWtldGhyb3VnaFRvTWFya2Rvd24gPSB7XG4gIHVuc2FmZTogW1xuICAgIHtcbiAgICAgIGNoYXJhY3RlcjogJ34nLFxuICAgICAgaW5Db25zdHJ1Y3Q6ICdwaHJhc2luZycsXG4gICAgICBub3RJbkNvbnN0cnVjdDogY29uc3RydWN0c1dpdGhvdXRTdHJpa2V0aHJvdWdoXG4gICAgfVxuICBdLFxuICBoYW5kbGVyczoge2RlbGV0ZTogaGFuZGxlRGVsZXRlfVxufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGVudGVyU3RyaWtldGhyb3VnaCh0b2tlbikge1xuICB0aGlzLmVudGVyKHt0eXBlOiAnZGVsZXRlJywgY2hpbGRyZW46IFtdfSwgdG9rZW4pXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZXhpdFN0cmlrZXRocm91Z2godG9rZW4pIHtcbiAgdGhpcy5leGl0KHRva2VuKVxufVxuXG4vKipcbiAqIEB0eXBlIHtUb01hcmtkb3duSGFuZGxlfVxuICogQHBhcmFtIHtEZWxldGV9IG5vZGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlRGVsZXRlKG5vZGUsIF8sIGNvbnRleHQsIHNhZmVPcHRpb25zKSB7XG4gIGNvbnN0IHRyYWNrZXIgPSB0cmFjayhzYWZlT3B0aW9ucylcbiAgY29uc3QgZXhpdCA9IGNvbnRleHQuZW50ZXIoJ3N0cmlrZXRocm91Z2gnKVxuICBsZXQgdmFsdWUgPSB0cmFja2VyLm1vdmUoJ35+JylcbiAgdmFsdWUgKz0gY29udGFpbmVyUGhyYXNpbmcobm9kZSwgY29udGV4dCwge1xuICAgIC4uLnRyYWNrZXIuY3VycmVudCgpLFxuICAgIGJlZm9yZTogdmFsdWUsXG4gICAgYWZ0ZXI6ICd+J1xuICB9KVxuICB2YWx1ZSArPSB0cmFja2VyLm1vdmUoJ35+JylcbiAgZXhpdCgpXG4gIHJldHVybiB2YWx1ZVxufVxuXG4vKiogQHR5cGUge1RvTWFya2Rvd25IYW5kbGV9ICovXG5mdW5jdGlvbiBwZWVrRGVsZXRlKCkge1xuICByZXR1cm4gJ34nXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-gfm-strikethrough/lib/index.js\n");

/***/ })

};
;