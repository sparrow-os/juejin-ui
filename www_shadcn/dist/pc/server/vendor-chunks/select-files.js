"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/select-files";
exports.ids = ["vendor-chunks/select-files"];
exports.modules = {

/***/ "(ssr)/./node_modules/select-files/dist/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/select-files/dist/index.esm.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * Creates a virtual file input element (`<input type=\"file\" />`) with options.\n * @param options\n */\nvar createInputFile = function (ref) {\n  if ( ref === void 0 ) ref = {};\n  var accept = ref.accept; if ( accept === void 0 ) accept = '';\n  var capture = ref.capture; if ( capture === void 0 ) capture = false;\n  var multiple = ref.multiple; if ( multiple === void 0 ) multiple = false;\n\n  var input = document.createElement('input');\n  input.type = 'file';\n  input.accept = accept;\n  input.capture = capture;\n  input.multiple = multiple;\n  return input;\n};\n/**\n * Virtually creates a file input element (`<input type=\"file\" />`), triggers it\n * and returns selected files.\n *\n * @example\n * selectFiles({ accept: 'image/*', multiple: true }).then(files => {\n *   // ...\n * });\n *\n * @param options\n */\n\n\nvar selectFiles = function (options) { return new Promise(function (resolve) {\n  var input = createInputFile(options);\n  input.addEventListener('change', function () { return resolve(input.files || null); });\n  setTimeout(function () {\n    var event = new MouseEvent('click');\n    input.dispatchEvent(event);\n  }, 0);\n}); };\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectFiles);\n//# sourceMappingURL=index.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2VsZWN0LWZpbGVzL2Rpc3QvaW5kZXguZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsNkJBQTZCO0FBQzdCLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1DQUFtQztBQUNwRDtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7OztBQUdBLHVDQUF1QztBQUN2QztBQUNBLGlEQUFpRCxzQ0FBc0M7QUFDdkY7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQsaUVBQWUsV0FBVyxFQUFDO0FBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3d3X3NoYWRuY24vLi9ub2RlX21vZHVsZXMvc2VsZWN0LWZpbGVzL2Rpc3QvaW5kZXguZXNtLmpzP2ZkMmMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVzIGEgdmlydHVhbCBmaWxlIGlucHV0IGVsZW1lbnQgKGA8aW5wdXQgdHlwZT1cImZpbGVcIiAvPmApIHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSBvcHRpb25zXG4gKi9cbnZhciBjcmVhdGVJbnB1dEZpbGUgPSBmdW5jdGlvbiAocmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGFjY2VwdCA9IHJlZi5hY2NlcHQ7IGlmICggYWNjZXB0ID09PSB2b2lkIDAgKSBhY2NlcHQgPSAnJztcbiAgdmFyIGNhcHR1cmUgPSByZWYuY2FwdHVyZTsgaWYgKCBjYXB0dXJlID09PSB2b2lkIDAgKSBjYXB0dXJlID0gZmFsc2U7XG4gIHZhciBtdWx0aXBsZSA9IHJlZi5tdWx0aXBsZTsgaWYgKCBtdWx0aXBsZSA9PT0gdm9pZCAwICkgbXVsdGlwbGUgPSBmYWxzZTtcblxuICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gJ2ZpbGUnO1xuICBpbnB1dC5hY2NlcHQgPSBhY2NlcHQ7XG4gIGlucHV0LmNhcHR1cmUgPSBjYXB0dXJlO1xuICBpbnB1dC5tdWx0aXBsZSA9IG11bHRpcGxlO1xuICByZXR1cm4gaW5wdXQ7XG59O1xuLyoqXG4gKiBWaXJ0dWFsbHkgY3JlYXRlcyBhIGZpbGUgaW5wdXQgZWxlbWVudCAoYDxpbnB1dCB0eXBlPVwiZmlsZVwiIC8+YCksIHRyaWdnZXJzIGl0XG4gKiBhbmQgcmV0dXJucyBzZWxlY3RlZCBmaWxlcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogc2VsZWN0RmlsZXMoeyBhY2NlcHQ6ICdpbWFnZS8qJywgbXVsdGlwbGU6IHRydWUgfSkudGhlbihmaWxlcyA9PiB7XG4gKiAgIC8vIC4uLlxuICogfSk7XG4gKlxuICogQHBhcmFtIG9wdGlvbnNcbiAqL1xuXG5cbnZhciBzZWxlY3RGaWxlcyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICB2YXIgaW5wdXQgPSBjcmVhdGVJbnB1dEZpbGUob3B0aW9ucyk7XG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUoaW5wdXQuZmlsZXMgfHwgbnVsbCk7IH0pO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXZlbnQgPSBuZXcgTW91c2VFdmVudCgnY2xpY2snKTtcbiAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSwgMCk7XG59KTsgfTtcblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0RmlsZXM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/select-files/dist/index.esm.js\n");

/***/ })

};
;