"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-frontmatter";
exports.ids = ["vendor-chunks/mdast-util-frontmatter"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-frontmatter/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/mdast-util-frontmatter/lib/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   frontmatterFromMarkdown: () => (/* binding */ frontmatterFromMarkdown),\n/* harmony export */   frontmatterToMarkdown: () => (/* binding */ frontmatterToMarkdown)\n/* harmony export */ });\n/* harmony import */ var micromark_extension_frontmatter_matters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-extension-frontmatter/matters.js */ \"(ssr)/./node_modules/micromark-extension-frontmatter/dev/matters.js\");\n/**\n * @typedef {import('mdast').Literal} Literal\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext\n * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n *\n * @typedef {import('micromark-extension-frontmatter').Options} Options\n * @typedef {import('micromark-extension-frontmatter/matters.js').Matter} Matter\n * @typedef {import('micromark-extension-frontmatter/matters.js').Info} Info\n */\n\n\n\n/**\n * Create an extension for `mdast-util-from-markdown`.\n *\n * @param {Options | null | undefined} [options]\n *   Configuration.\n * @returns {FromMarkdownExtension}\n *   Extension for `mdast-util-from-markdown`.\n */\nfunction frontmatterFromMarkdown(options) {\n  // @ts-expect-error: `micromark-extension-frontmatter` should fix types to\n  // accept `null` as options.\n  const settings = (0,micromark_extension_frontmatter_matters_js__WEBPACK_IMPORTED_MODULE_0__.matters)(options)\n  /** @type {FromMarkdownExtension['enter']} */\n  const enter = {}\n  /** @type {FromMarkdownExtension['exit']} */\n  const exit = {}\n  let index = -1\n\n  while (++index < settings.length) {\n    const matter = settings[index]\n    enter[matter.type] = opener(matter)\n    exit[matter.type] = close\n    exit[matter.type + 'Value'] = value\n  }\n\n  return {enter, exit}\n}\n\n/**\n * @param {Matter} matter\n * @returns {FromMarkdownHandle} enter\n */\nfunction opener(matter) {\n  return open\n\n  /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */\n  function open(token) {\n    // @ts-expect-error: custom.\n    this.enter({type: matter.type, value: ''}, token)\n    this.buffer()\n  }\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction close(token) {\n  const data = this.resume()\n  const node = /** @type {Literal} */ (this.exit(token))\n  // Remove the initial and final eol.\n  node.value = data.replace(/^(\\r?\\n|\\r)|(\\r?\\n|\\r)$/g, '')\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction value(token) {\n  this.config.enter.data.call(this, token)\n  this.config.exit.data.call(this, token)\n}\n\n/**\n * Create an extension for `mdast-util-to-markdown`.\n *\n * @param {Options | null | undefined} [options]\n *   Configuration.\n * @returns {ToMarkdownExtension}\n *   Extension for `mdast-util-to-markdown`.\n */\nfunction frontmatterToMarkdown(options) {\n  // To do: use an extension object with `satisfies` later.\n  /** @type {ToMarkdownExtension['unsafe']} */\n  const unsafe = []\n  /** @type {ToMarkdownExtension['handlers']} */\n  const handlers = {}\n  // @ts-expect-error: `micromark-extension-frontmatter` should fix types to\n  // accept `null` as options.\n  const settings = (0,micromark_extension_frontmatter_matters_js__WEBPACK_IMPORTED_MODULE_0__.matters)(options)\n  let index = -1\n\n  while (++index < settings.length) {\n    const matter = settings[index]\n\n    // @ts-expect-error: this can add custom frontmatter nodes.\n    // Typing those is the responsibility of the end user.\n    handlers[matter.type] = handler(matter)\n\n    // To do: idea: perhaps make this smarter, with an `after` of the second char?\n    unsafe.push({atBreak: true, character: fence(matter, 'open').charAt(0)})\n  }\n\n  return {unsafe, handlers}\n}\n\n/**\n * Create a handle that can serialize a frontmatter node as markdown.\n *\n * @param {Matter} matter\n *   Structure.\n * @returns {(node: Literal) => string} enter\n *   Handler.\n */\nfunction handler(matter) {\n  const open = fence(matter, 'open')\n  const close = fence(matter, 'close')\n\n  return handle\n\n  /**\n   * Serialize a frontmatter node as markdown.\n   *\n   * @param {Literal} node\n   *   Node to serialize.\n   * @returns {string}\n   *   Serialized node.\n   */\n  function handle(node) {\n    return open + (node.value ? '\\n' + node.value : '') + '\\n' + close\n  }\n}\n\n/**\n * Get an `open` or `close` fence.\n *\n * @param {Matter} matter\n *   Structure.\n * @param {'open' | 'close'} prop\n *   Field to get.\n * @returns {string}\n *   Fence.\n */\nfunction fence(matter, prop) {\n  return matter.marker\n    ? pick(matter.marker, prop).repeat(3)\n    : // @ts-expect-error: They’re mutually exclusive.\n      pick(matter.fence, prop)\n}\n\n/**\n * Take `open` or `close` fields when schema is an info object, or use the\n * given value when it is a string.\n *\n * @param {Info | string} schema\n *   Info object or value.\n * @param {'open' | 'close'} prop\n *   Field to get.\n * @returns {string}\n *   Thing to use for the opening or closing.\n */\nfunction pick(schema, prop) {\n  return typeof schema === 'string' ? schema : schema[prop]\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1mcm9udG1hdHRlci9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLDhDQUE4QztBQUMzRCxhQUFhLG1EQUFtRDtBQUNoRSxhQUFhLDJDQUEyQztBQUN4RCxhQUFhLDBDQUEwQztBQUN2RDtBQUNBLGFBQWEsbURBQW1EO0FBQ2hFLGFBQWEsNkRBQTZEO0FBQzFFLGFBQWEsMkRBQTJEO0FBQ3hFOztBQUVrRTs7QUFFbEU7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0QkFBNEI7QUFDdkM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLG1CQUFtQixtRkFBTztBQUMxQixhQUFhLGdDQUFnQztBQUM3QztBQUNBLGFBQWEsK0JBQStCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLG9CQUFvQjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw2QkFBNkI7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsU0FBUztBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0QkFBNEI7QUFDdkM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQSxhQUFhLCtCQUErQjtBQUM1QztBQUNBLGFBQWEsaUNBQWlDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtRkFBTztBQUMxQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiwwREFBMEQ7QUFDM0U7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWEsMkJBQTJCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLGtCQUFrQjtBQUM3QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCO0FBQ0EsV0FBVyxrQkFBa0I7QUFDN0I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3d3d19zaGFkbmNuLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZnJvbnRtYXR0ZXIvbGliL2luZGV4LmpzPzY2ZGEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLkxpdGVyYWx9IExpdGVyYWxcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLkV4dGVuc2lvbn0gRnJvbU1hcmtkb3duRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5Db21waWxlQ29udGV4dH0gQ29tcGlsZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLkhhbmRsZX0gRnJvbU1hcmtkb3duSGFuZGxlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuT3B0aW9uc30gVG9NYXJrZG93bkV4dGVuc2lvblxuICpcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay1leHRlbnNpb24tZnJvbnRtYXR0ZXInKS5PcHRpb25zfSBPcHRpb25zXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstZXh0ZW5zaW9uLWZyb250bWF0dGVyL21hdHRlcnMuanMnKS5NYXR0ZXJ9IE1hdHRlclxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLWV4dGVuc2lvbi1mcm9udG1hdHRlci9tYXR0ZXJzLmpzJykuSW5mb30gSW5mb1xuICovXG5cbmltcG9ydCB7bWF0dGVyc30gZnJvbSAnbWljcm9tYXJrLWV4dGVuc2lvbi1mcm9udG1hdHRlci9tYXR0ZXJzLmpzJ1xuXG4vKipcbiAqIENyZWF0ZSBhbiBleHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLWZyb20tbWFya2Rvd25gLlxuICpcbiAqIEBwYXJhbSB7T3B0aW9ucyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zXVxuICogICBDb25maWd1cmF0aW9uLlxuICogQHJldHVybnMge0Zyb21NYXJrZG93bkV4dGVuc2lvbn1cbiAqICAgRXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb250bWF0dGVyRnJvbU1hcmtkb3duKG9wdGlvbnMpIHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvcjogYG1pY3JvbWFyay1leHRlbnNpb24tZnJvbnRtYXR0ZXJgIHNob3VsZCBmaXggdHlwZXMgdG9cbiAgLy8gYWNjZXB0IGBudWxsYCBhcyBvcHRpb25zLlxuICBjb25zdCBzZXR0aW5ncyA9IG1hdHRlcnMob3B0aW9ucylcbiAgLyoqIEB0eXBlIHtGcm9tTWFya2Rvd25FeHRlbnNpb25bJ2VudGVyJ119ICovXG4gIGNvbnN0IGVudGVyID0ge31cbiAgLyoqIEB0eXBlIHtGcm9tTWFya2Rvd25FeHRlbnNpb25bJ2V4aXQnXX0gKi9cbiAgY29uc3QgZXhpdCA9IHt9XG4gIGxldCBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBzZXR0aW5ncy5sZW5ndGgpIHtcbiAgICBjb25zdCBtYXR0ZXIgPSBzZXR0aW5nc1tpbmRleF1cbiAgICBlbnRlclttYXR0ZXIudHlwZV0gPSBvcGVuZXIobWF0dGVyKVxuICAgIGV4aXRbbWF0dGVyLnR5cGVdID0gY2xvc2VcbiAgICBleGl0W21hdHRlci50eXBlICsgJ1ZhbHVlJ10gPSB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIHtlbnRlciwgZXhpdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge01hdHRlcn0gbWF0dGVyXG4gKiBAcmV0dXJucyB7RnJvbU1hcmtkb3duSGFuZGxlfSBlbnRlclxuICovXG5mdW5jdGlvbiBvcGVuZXIobWF0dGVyKSB7XG4gIHJldHVybiBvcGVuXG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAgICovXG4gIGZ1bmN0aW9uIG9wZW4odG9rZW4pIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBjdXN0b20uXG4gICAgdGhpcy5lbnRlcih7dHlwZTogbWF0dGVyLnR5cGUsIHZhbHVlOiAnJ30sIHRva2VuKVxuICAgIHRoaXMuYnVmZmVyKClcbiAgfVxufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGNsb3NlKHRva2VuKSB7XG4gIGNvbnN0IGRhdGEgPSB0aGlzLnJlc3VtZSgpXG4gIGNvbnN0IG5vZGUgPSAvKiogQHR5cGUge0xpdGVyYWx9ICovICh0aGlzLmV4aXQodG9rZW4pKVxuICAvLyBSZW1vdmUgdGhlIGluaXRpYWwgYW5kIGZpbmFsIGVvbC5cbiAgbm9kZS52YWx1ZSA9IGRhdGEucmVwbGFjZSgvXihcXHI/XFxufFxccil8KFxccj9cXG58XFxyKSQvZywgJycpXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gdmFsdWUodG9rZW4pIHtcbiAgdGhpcy5jb25maWcuZW50ZXIuZGF0YS5jYWxsKHRoaXMsIHRva2VuKVxuICB0aGlzLmNvbmZpZy5leGl0LmRhdGEuY2FsbCh0aGlzLCB0b2tlbilcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC10by1tYXJrZG93bmAuXG4gKlxuICogQHBhcmFtIHtPcHRpb25zIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdGlvbnNdXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcmV0dXJucyB7VG9NYXJrZG93bkV4dGVuc2lvbn1cbiAqICAgRXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC10by1tYXJrZG93bmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9udG1hdHRlclRvTWFya2Rvd24ob3B0aW9ucykge1xuICAvLyBUbyBkbzogdXNlIGFuIGV4dGVuc2lvbiBvYmplY3Qgd2l0aCBgc2F0aXNmaWVzYCBsYXRlci5cbiAgLyoqIEB0eXBlIHtUb01hcmtkb3duRXh0ZW5zaW9uWyd1bnNhZmUnXX0gKi9cbiAgY29uc3QgdW5zYWZlID0gW11cbiAgLyoqIEB0eXBlIHtUb01hcmtkb3duRXh0ZW5zaW9uWydoYW5kbGVycyddfSAqL1xuICBjb25zdCBoYW5kbGVycyA9IHt9XG4gIC8vIEB0cy1leHBlY3QtZXJyb3I6IGBtaWNyb21hcmstZXh0ZW5zaW9uLWZyb250bWF0dGVyYCBzaG91bGQgZml4IHR5cGVzIHRvXG4gIC8vIGFjY2VwdCBgbnVsbGAgYXMgb3B0aW9ucy5cbiAgY29uc3Qgc2V0dGluZ3MgPSBtYXR0ZXJzKG9wdGlvbnMpXG4gIGxldCBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBzZXR0aW5ncy5sZW5ndGgpIHtcbiAgICBjb25zdCBtYXR0ZXIgPSBzZXR0aW5nc1tpbmRleF1cblxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IHRoaXMgY2FuIGFkZCBjdXN0b20gZnJvbnRtYXR0ZXIgbm9kZXMuXG4gICAgLy8gVHlwaW5nIHRob3NlIGlzIHRoZSByZXNwb25zaWJpbGl0eSBvZiB0aGUgZW5kIHVzZXIuXG4gICAgaGFuZGxlcnNbbWF0dGVyLnR5cGVdID0gaGFuZGxlcihtYXR0ZXIpXG5cbiAgICAvLyBUbyBkbzogaWRlYTogcGVyaGFwcyBtYWtlIHRoaXMgc21hcnRlciwgd2l0aCBhbiBgYWZ0ZXJgIG9mIHRoZSBzZWNvbmQgY2hhcj9cbiAgICB1bnNhZmUucHVzaCh7YXRCcmVhazogdHJ1ZSwgY2hhcmFjdGVyOiBmZW5jZShtYXR0ZXIsICdvcGVuJykuY2hhckF0KDApfSlcbiAgfVxuXG4gIHJldHVybiB7dW5zYWZlLCBoYW5kbGVyc31cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBoYW5kbGUgdGhhdCBjYW4gc2VyaWFsaXplIGEgZnJvbnRtYXR0ZXIgbm9kZSBhcyBtYXJrZG93bi5cbiAqXG4gKiBAcGFyYW0ge01hdHRlcn0gbWF0dGVyXG4gKiAgIFN0cnVjdHVyZS5cbiAqIEByZXR1cm5zIHsobm9kZTogTGl0ZXJhbCkgPT4gc3RyaW5nfSBlbnRlclxuICogICBIYW5kbGVyLlxuICovXG5mdW5jdGlvbiBoYW5kbGVyKG1hdHRlcikge1xuICBjb25zdCBvcGVuID0gZmVuY2UobWF0dGVyLCAnb3BlbicpXG4gIGNvbnN0IGNsb3NlID0gZmVuY2UobWF0dGVyLCAnY2xvc2UnKVxuXG4gIHJldHVybiBoYW5kbGVcblxuICAvKipcbiAgICogU2VyaWFsaXplIGEgZnJvbnRtYXR0ZXIgbm9kZSBhcyBtYXJrZG93bi5cbiAgICpcbiAgICogQHBhcmFtIHtMaXRlcmFsfSBub2RlXG4gICAqICAgTm9kZSB0byBzZXJpYWxpemUuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqICAgU2VyaWFsaXplZCBub2RlLlxuICAgKi9cbiAgZnVuY3Rpb24gaGFuZGxlKG5vZGUpIHtcbiAgICByZXR1cm4gb3BlbiArIChub2RlLnZhbHVlID8gJ1xcbicgKyBub2RlLnZhbHVlIDogJycpICsgJ1xcbicgKyBjbG9zZVxuICB9XG59XG5cbi8qKlxuICogR2V0IGFuIGBvcGVuYCBvciBgY2xvc2VgIGZlbmNlLlxuICpcbiAqIEBwYXJhbSB7TWF0dGVyfSBtYXR0ZXJcbiAqICAgU3RydWN0dXJlLlxuICogQHBhcmFtIHsnb3BlbicgfCAnY2xvc2UnfSBwcm9wXG4gKiAgIEZpZWxkIHRvIGdldC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiAgIEZlbmNlLlxuICovXG5mdW5jdGlvbiBmZW5jZShtYXR0ZXIsIHByb3ApIHtcbiAgcmV0dXJuIG1hdHRlci5tYXJrZXJcbiAgICA/IHBpY2sobWF0dGVyLm1hcmtlciwgcHJvcCkucmVwZWF0KDMpXG4gICAgOiAvLyBAdHMtZXhwZWN0LWVycm9yOiBUaGV54oCZcmUgbXV0dWFsbHkgZXhjbHVzaXZlLlxuICAgICAgcGljayhtYXR0ZXIuZmVuY2UsIHByb3ApXG59XG5cbi8qKlxuICogVGFrZSBgb3BlbmAgb3IgYGNsb3NlYCBmaWVsZHMgd2hlbiBzY2hlbWEgaXMgYW4gaW5mbyBvYmplY3QsIG9yIHVzZSB0aGVcbiAqIGdpdmVuIHZhbHVlIHdoZW4gaXQgaXMgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtJbmZvIHwgc3RyaW5nfSBzY2hlbWFcbiAqICAgSW5mbyBvYmplY3Qgb3IgdmFsdWUuXG4gKiBAcGFyYW0geydvcGVuJyB8ICdjbG9zZSd9IHByb3BcbiAqICAgRmllbGQgdG8gZ2V0LlxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgVGhpbmcgdG8gdXNlIGZvciB0aGUgb3BlbmluZyBvciBjbG9zaW5nLlxuICovXG5mdW5jdGlvbiBwaWNrKHNjaGVtYSwgcHJvcCkge1xuICByZXR1cm4gdHlwZW9mIHNjaGVtYSA9PT0gJ3N0cmluZycgPyBzY2hlbWEgOiBzY2hlbWFbcHJvcF1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-frontmatter/lib/index.js\n");

/***/ })

};
;