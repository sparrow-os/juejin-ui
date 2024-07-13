"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-visit";
exports.ids = ["vendor-chunks/unist-util-visit"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-visit/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/unist-util-visit/lib/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONTINUE: () => (/* reexport safe */ unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__.CONTINUE),\n/* harmony export */   EXIT: () => (/* reexport safe */ unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__.EXIT),\n/* harmony export */   SKIP: () => (/* reexport safe */ unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__.SKIP),\n/* harmony export */   visit: () => (/* binding */ visit)\n/* harmony export */ });\n/* harmony import */ var unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-visit-parents */ \"(ssr)/./node_modules/unist-util-visit-parents/lib/index.js\");\n/**\n * @typedef {import('unist').Node} Node\n * @typedef {import('unist').Parent} Parent\n * @typedef {import('unist-util-is').Test} Test\n * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult\n */\n\n/**\n * Check if `Child` can be a child of `Ancestor`.\n *\n * Returns the ancestor when `Child` can be a child of `Ancestor`, or returns\n * `never`.\n *\n * @template {Node} Ancestor\n *   Node type.\n * @template {Node} Child\n *   Node type.\n * @typedef {(\n *   Ancestor extends Parent\n *     ? Child extends Ancestor['children'][number]\n *       ? Ancestor\n *       : never\n *     : never\n * )} ParentsOf\n */\n\n/**\n * @template {Node} [Visited=Node]\n *   Visited node type.\n * @template {Parent} [Ancestor=Parent]\n *   Ancestor type.\n * @callback Visitor\n *   Handle a node (matching `test`, if given).\n *\n *   Visitors are free to transform `node`.\n *   They can also transform `parent`.\n *\n *   Replacing `node` itself, if `SKIP` is not returned, still causes its\n *   descendants to be walked (which is a bug).\n *\n *   When adding or removing previous siblings of `node` (or next siblings, in\n *   case of reverse), the `Visitor` should return a new `Index` to specify the\n *   sibling to traverse after `node` is traversed.\n *   Adding or removing next siblings of `node` (or previous siblings, in case\n *   of reverse) is handled as expected without needing to return a new `Index`.\n *\n *   Removing the children property of `parent` still results in them being\n *   traversed.\n * @param {Visited} node\n *   Found node.\n * @param {Visited extends Node ? number | null : never} index\n *   Index of `node` in `parent`.\n * @param {Ancestor extends Node ? Ancestor | null : never} parent\n *   Parent of `node`.\n * @returns {VisitorResult}\n *   What to do next.\n *\n *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.\n *   An `Action` is treated as a tuple of `[Action]`.\n *\n *   Passing a tuple back only makes sense if the `Action` is `SKIP`.\n *   When the `Action` is `EXIT`, that action can be returned.\n *   When the `Action` is `CONTINUE`, `Index` can be returned.\n */\n\n/**\n * Build a typed `Visitor` function from a node and all possible parents.\n *\n * It will infer which values are passed as `node` and which as `parent`.\n *\n * @template {Node} Visited\n *   Node type.\n * @template {Parent} Ancestor\n *   Parent type.\n * @typedef {Visitor<Visited, ParentsOf<Ancestor, Visited>>} BuildVisitorFromMatch\n */\n\n/**\n * Build a typed `Visitor` function from a list of descendants and a test.\n *\n * It will infer which values are passed as `node` and which as `parent`.\n *\n * @template {Node} Descendant\n *   Node type.\n * @template {Test} Check\n *   Test type.\n * @typedef {(\n *   BuildVisitorFromMatch<\n *     import('unist-util-visit-parents/complex-types.js').Matches<Descendant, Check>,\n *     Extract<Descendant, Parent>\n *   >\n * )} BuildVisitorFromDescendants\n */\n\n/**\n * Build a typed `Visitor` function from a tree and a test.\n *\n * It will infer which values are passed as `node` and which as `parent`.\n *\n * @template {Node} [Tree=Node]\n *   Node type.\n * @template {Test} [Check=string]\n *   Test type.\n * @typedef {(\n *   BuildVisitorFromDescendants<\n *     import('unist-util-visit-parents/complex-types.js').InclusiveDescendant<Tree>,\n *     Check\n *   >\n * )} BuildVisitor\n */\n\n\n\n/**\n * Visit nodes.\n *\n * This algorithm performs *depth-first* *tree traversal* in *preorder*\n * (**NLR**) or if `reverse` is given, in *reverse preorder* (**NRL**).\n *\n * You can choose for which nodes `visitor` is called by passing a `test`.\n * For complex tests, you should test yourself in `visitor`, as it will be\n * faster and will have improved type information.\n *\n * Walking the tree is an intensive task.\n * Make use of the return values of the visitor when possible.\n * Instead of walking a tree multiple times, walk it once, use `unist-util-is`\n * to check if a node matches, and then perform different operations.\n *\n * You can change the tree.\n * See `Visitor` for more info.\n *\n * @param tree\n *   Tree to traverse.\n * @param test\n *   `unist-util-is`-compatible test\n * @param visitor\n *   Handle each node.\n * @param reverse\n *   Traverse in reverse preorder (NRL) instead of the default preorder (NLR).\n * @returns\n *   Nothing.\n */\nconst visit =\n  /**\n   * @type {(\n   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: BuildVisitor<Tree, Check>, reverse?: boolean | null | undefined) => void) &\n   *   (<Tree extends Node>(tree: Tree, visitor: BuildVisitor<Tree>, reverse?: boolean | null | undefined) => void)\n   * )}\n   */\n  (\n    /**\n     * @param {Node} tree\n     * @param {Test} test\n     * @param {Visitor} visitor\n     * @param {boolean | null | undefined} [reverse]\n     * @returns {void}\n     */\n    function (tree, test, visitor, reverse) {\n      if (typeof test === 'function' && typeof visitor !== 'function') {\n        reverse = visitor\n        visitor = test\n        test = null\n      }\n\n      (0,unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__.visitParents)(tree, test, overload, reverse)\n\n      /**\n       * @param {Node} node\n       * @param {Array<Parent>} parents\n       */\n      function overload(node, parents) {\n        const parent = parents[parents.length - 1]\n        return visitor(\n          node,\n          parent ? parent.children.indexOf(node) : null,\n          parent\n        )\n      }\n    }\n  )\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsd0JBQXdCO0FBQ3JDLGFBQWEsOEJBQThCO0FBQzNDLGFBQWEsa0RBQWtEO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsOENBQThDO0FBQ3pEO0FBQ0EsV0FBVyxpREFBaUQ7QUFDNUQ7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQSxhQUFhLGdEQUFnRDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsU0FBUztBQUN4QixlQUFlLDRCQUE0QjtBQUMzQyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxzRUFBWTs7QUFFbEI7QUFDQSxpQkFBaUIsTUFBTTtBQUN2QixpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2RCIsInNvdXJjZXMiOlsid2VicGFjazovL3d3d19zaGFkbmNuLy4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQvbGliL2luZGV4LmpzPzlmOTIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLk5vZGV9IE5vZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUGFyZW50fSBQYXJlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UZXN0fSBUZXN0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMnKS5WaXNpdG9yUmVzdWx0fSBWaXNpdG9yUmVzdWx0XG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiBgQ2hpbGRgIGNhbiBiZSBhIGNoaWxkIG9mIGBBbmNlc3RvcmAuXG4gKlxuICogUmV0dXJucyB0aGUgYW5jZXN0b3Igd2hlbiBgQ2hpbGRgIGNhbiBiZSBhIGNoaWxkIG9mIGBBbmNlc3RvcmAsIG9yIHJldHVybnNcbiAqIGBuZXZlcmAuXG4gKlxuICogQHRlbXBsYXRlIHtOb2RlfSBBbmNlc3RvclxuICogICBOb2RlIHR5cGUuXG4gKiBAdGVtcGxhdGUge05vZGV9IENoaWxkXG4gKiAgIE5vZGUgdHlwZS5cbiAqIEB0eXBlZGVmIHsoXG4gKiAgIEFuY2VzdG9yIGV4dGVuZHMgUGFyZW50XG4gKiAgICAgPyBDaGlsZCBleHRlbmRzIEFuY2VzdG9yWydjaGlsZHJlbiddW251bWJlcl1cbiAqICAgICAgID8gQW5jZXN0b3JcbiAqICAgICAgIDogbmV2ZXJcbiAqICAgICA6IG5ldmVyXG4gKiApfSBQYXJlbnRzT2ZcbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7Tm9kZX0gW1Zpc2l0ZWQ9Tm9kZV1cbiAqICAgVmlzaXRlZCBub2RlIHR5cGUuXG4gKiBAdGVtcGxhdGUge1BhcmVudH0gW0FuY2VzdG9yPVBhcmVudF1cbiAqICAgQW5jZXN0b3IgdHlwZS5cbiAqIEBjYWxsYmFjayBWaXNpdG9yXG4gKiAgIEhhbmRsZSBhIG5vZGUgKG1hdGNoaW5nIGB0ZXN0YCwgaWYgZ2l2ZW4pLlxuICpcbiAqICAgVmlzaXRvcnMgYXJlIGZyZWUgdG8gdHJhbnNmb3JtIGBub2RlYC5cbiAqICAgVGhleSBjYW4gYWxzbyB0cmFuc2Zvcm0gYHBhcmVudGAuXG4gKlxuICogICBSZXBsYWNpbmcgYG5vZGVgIGl0c2VsZiwgaWYgYFNLSVBgIGlzIG5vdCByZXR1cm5lZCwgc3RpbGwgY2F1c2VzIGl0c1xuICogICBkZXNjZW5kYW50cyB0byBiZSB3YWxrZWQgKHdoaWNoIGlzIGEgYnVnKS5cbiAqXG4gKiAgIFdoZW4gYWRkaW5nIG9yIHJlbW92aW5nIHByZXZpb3VzIHNpYmxpbmdzIG9mIGBub2RlYCAob3IgbmV4dCBzaWJsaW5ncywgaW5cbiAqICAgY2FzZSBvZiByZXZlcnNlKSwgdGhlIGBWaXNpdG9yYCBzaG91bGQgcmV0dXJuIGEgbmV3IGBJbmRleGAgdG8gc3BlY2lmeSB0aGVcbiAqICAgc2libGluZyB0byB0cmF2ZXJzZSBhZnRlciBgbm9kZWAgaXMgdHJhdmVyc2VkLlxuICogICBBZGRpbmcgb3IgcmVtb3ZpbmcgbmV4dCBzaWJsaW5ncyBvZiBgbm9kZWAgKG9yIHByZXZpb3VzIHNpYmxpbmdzLCBpbiBjYXNlXG4gKiAgIG9mIHJldmVyc2UpIGlzIGhhbmRsZWQgYXMgZXhwZWN0ZWQgd2l0aG91dCBuZWVkaW5nIHRvIHJldHVybiBhIG5ldyBgSW5kZXhgLlxuICpcbiAqICAgUmVtb3ZpbmcgdGhlIGNoaWxkcmVuIHByb3BlcnR5IG9mIGBwYXJlbnRgIHN0aWxsIHJlc3VsdHMgaW4gdGhlbSBiZWluZ1xuICogICB0cmF2ZXJzZWQuXG4gKiBAcGFyYW0ge1Zpc2l0ZWR9IG5vZGVcbiAqICAgRm91bmQgbm9kZS5cbiAqIEBwYXJhbSB7VmlzaXRlZCBleHRlbmRzIE5vZGUgPyBudW1iZXIgfCBudWxsIDogbmV2ZXJ9IGluZGV4XG4gKiAgIEluZGV4IG9mIGBub2RlYCBpbiBgcGFyZW50YC5cbiAqIEBwYXJhbSB7QW5jZXN0b3IgZXh0ZW5kcyBOb2RlID8gQW5jZXN0b3IgfCBudWxsIDogbmV2ZXJ9IHBhcmVudFxuICogICBQYXJlbnQgb2YgYG5vZGVgLlxuICogQHJldHVybnMge1Zpc2l0b3JSZXN1bHR9XG4gKiAgIFdoYXQgdG8gZG8gbmV4dC5cbiAqXG4gKiAgIEFuIGBJbmRleGAgaXMgdHJlYXRlZCBhcyBhIHR1cGxlIG9mIGBbQ09OVElOVUUsIEluZGV4XWAuXG4gKiAgIEFuIGBBY3Rpb25gIGlzIHRyZWF0ZWQgYXMgYSB0dXBsZSBvZiBgW0FjdGlvbl1gLlxuICpcbiAqICAgUGFzc2luZyBhIHR1cGxlIGJhY2sgb25seSBtYWtlcyBzZW5zZSBpZiB0aGUgYEFjdGlvbmAgaXMgYFNLSVBgLlxuICogICBXaGVuIHRoZSBgQWN0aW9uYCBpcyBgRVhJVGAsIHRoYXQgYWN0aW9uIGNhbiBiZSByZXR1cm5lZC5cbiAqICAgV2hlbiB0aGUgYEFjdGlvbmAgaXMgYENPTlRJTlVFYCwgYEluZGV4YCBjYW4gYmUgcmV0dXJuZWQuXG4gKi9cblxuLyoqXG4gKiBCdWlsZCBhIHR5cGVkIGBWaXNpdG9yYCBmdW5jdGlvbiBmcm9tIGEgbm9kZSBhbmQgYWxsIHBvc3NpYmxlIHBhcmVudHMuXG4gKlxuICogSXQgd2lsbCBpbmZlciB3aGljaCB2YWx1ZXMgYXJlIHBhc3NlZCBhcyBgbm9kZWAgYW5kIHdoaWNoIGFzIGBwYXJlbnRgLlxuICpcbiAqIEB0ZW1wbGF0ZSB7Tm9kZX0gVmlzaXRlZFxuICogICBOb2RlIHR5cGUuXG4gKiBAdGVtcGxhdGUge1BhcmVudH0gQW5jZXN0b3JcbiAqICAgUGFyZW50IHR5cGUuXG4gKiBAdHlwZWRlZiB7VmlzaXRvcjxWaXNpdGVkLCBQYXJlbnRzT2Y8QW5jZXN0b3IsIFZpc2l0ZWQ+Pn0gQnVpbGRWaXNpdG9yRnJvbU1hdGNoXG4gKi9cblxuLyoqXG4gKiBCdWlsZCBhIHR5cGVkIGBWaXNpdG9yYCBmdW5jdGlvbiBmcm9tIGEgbGlzdCBvZiBkZXNjZW5kYW50cyBhbmQgYSB0ZXN0LlxuICpcbiAqIEl0IHdpbGwgaW5mZXIgd2hpY2ggdmFsdWVzIGFyZSBwYXNzZWQgYXMgYG5vZGVgIGFuZCB3aGljaCBhcyBgcGFyZW50YC5cbiAqXG4gKiBAdGVtcGxhdGUge05vZGV9IERlc2NlbmRhbnRcbiAqICAgTm9kZSB0eXBlLlxuICogQHRlbXBsYXRlIHtUZXN0fSBDaGVja1xuICogICBUZXN0IHR5cGUuXG4gKiBAdHlwZWRlZiB7KFxuICogICBCdWlsZFZpc2l0b3JGcm9tTWF0Y2g8XG4gKiAgICAgaW1wb3J0KCd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvY29tcGxleC10eXBlcy5qcycpLk1hdGNoZXM8RGVzY2VuZGFudCwgQ2hlY2s+LFxuICogICAgIEV4dHJhY3Q8RGVzY2VuZGFudCwgUGFyZW50PlxuICogICA+XG4gKiApfSBCdWlsZFZpc2l0b3JGcm9tRGVzY2VuZGFudHNcbiAqL1xuXG4vKipcbiAqIEJ1aWxkIGEgdHlwZWQgYFZpc2l0b3JgIGZ1bmN0aW9uIGZyb20gYSB0cmVlIGFuZCBhIHRlc3QuXG4gKlxuICogSXQgd2lsbCBpbmZlciB3aGljaCB2YWx1ZXMgYXJlIHBhc3NlZCBhcyBgbm9kZWAgYW5kIHdoaWNoIGFzIGBwYXJlbnRgLlxuICpcbiAqIEB0ZW1wbGF0ZSB7Tm9kZX0gW1RyZWU9Tm9kZV1cbiAqICAgTm9kZSB0eXBlLlxuICogQHRlbXBsYXRlIHtUZXN0fSBbQ2hlY2s9c3RyaW5nXVxuICogICBUZXN0IHR5cGUuXG4gKiBAdHlwZWRlZiB7KFxuICogICBCdWlsZFZpc2l0b3JGcm9tRGVzY2VuZGFudHM8XG4gKiAgICAgaW1wb3J0KCd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvY29tcGxleC10eXBlcy5qcycpLkluY2x1c2l2ZURlc2NlbmRhbnQ8VHJlZT4sXG4gKiAgICAgQ2hlY2tcbiAqICAgPlxuICogKX0gQnVpbGRWaXNpdG9yXG4gKi9cblxuaW1wb3J0IHt2aXNpdFBhcmVudHN9IGZyb20gJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cydcblxuLyoqXG4gKiBWaXNpdCBub2Rlcy5cbiAqXG4gKiBUaGlzIGFsZ29yaXRobSBwZXJmb3JtcyAqZGVwdGgtZmlyc3QqICp0cmVlIHRyYXZlcnNhbCogaW4gKnByZW9yZGVyKlxuICogKCoqTkxSKiopIG9yIGlmIGByZXZlcnNlYCBpcyBnaXZlbiwgaW4gKnJldmVyc2UgcHJlb3JkZXIqICgqKk5STCoqKS5cbiAqXG4gKiBZb3UgY2FuIGNob29zZSBmb3Igd2hpY2ggbm9kZXMgYHZpc2l0b3JgIGlzIGNhbGxlZCBieSBwYXNzaW5nIGEgYHRlc3RgLlxuICogRm9yIGNvbXBsZXggdGVzdHMsIHlvdSBzaG91bGQgdGVzdCB5b3Vyc2VsZiBpbiBgdmlzaXRvcmAsIGFzIGl0IHdpbGwgYmVcbiAqIGZhc3RlciBhbmQgd2lsbCBoYXZlIGltcHJvdmVkIHR5cGUgaW5mb3JtYXRpb24uXG4gKlxuICogV2Fsa2luZyB0aGUgdHJlZSBpcyBhbiBpbnRlbnNpdmUgdGFzay5cbiAqIE1ha2UgdXNlIG9mIHRoZSByZXR1cm4gdmFsdWVzIG9mIHRoZSB2aXNpdG9yIHdoZW4gcG9zc2libGUuXG4gKiBJbnN0ZWFkIG9mIHdhbGtpbmcgYSB0cmVlIG11bHRpcGxlIHRpbWVzLCB3YWxrIGl0IG9uY2UsIHVzZSBgdW5pc3QtdXRpbC1pc2BcbiAqIHRvIGNoZWNrIGlmIGEgbm9kZSBtYXRjaGVzLCBhbmQgdGhlbiBwZXJmb3JtIGRpZmZlcmVudCBvcGVyYXRpb25zLlxuICpcbiAqIFlvdSBjYW4gY2hhbmdlIHRoZSB0cmVlLlxuICogU2VlIGBWaXNpdG9yYCBmb3IgbW9yZSBpbmZvLlxuICpcbiAqIEBwYXJhbSB0cmVlXG4gKiAgIFRyZWUgdG8gdHJhdmVyc2UuXG4gKiBAcGFyYW0gdGVzdFxuICogICBgdW5pc3QtdXRpbC1pc2AtY29tcGF0aWJsZSB0ZXN0XG4gKiBAcGFyYW0gdmlzaXRvclxuICogICBIYW5kbGUgZWFjaCBub2RlLlxuICogQHBhcmFtIHJldmVyc2VcbiAqICAgVHJhdmVyc2UgaW4gcmV2ZXJzZSBwcmVvcmRlciAoTlJMKSBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHByZW9yZGVyIChOTFIpLlxuICogQHJldHVybnNcbiAqICAgTm90aGluZy5cbiAqL1xuZXhwb3J0IGNvbnN0IHZpc2l0ID1cbiAgLyoqXG4gICAqIEB0eXBlIHsoXG4gICAqICAgKDxUcmVlIGV4dGVuZHMgTm9kZSwgQ2hlY2sgZXh0ZW5kcyBUZXN0Pih0cmVlOiBUcmVlLCB0ZXN0OiBDaGVjaywgdmlzaXRvcjogQnVpbGRWaXNpdG9yPFRyZWUsIENoZWNrPiwgcmV2ZXJzZT86IGJvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB2b2lkKSAmXG4gICAqICAgKDxUcmVlIGV4dGVuZHMgTm9kZT4odHJlZTogVHJlZSwgdmlzaXRvcjogQnVpbGRWaXNpdG9yPFRyZWU+LCByZXZlcnNlPzogYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQpID0+IHZvaWQpXG4gICAqICl9XG4gICAqL1xuICAoXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOb2RlfSB0cmVlXG4gICAgICogQHBhcmFtIHtUZXN0fSB0ZXN0XG4gICAgICogQHBhcmFtIHtWaXNpdG9yfSB2aXNpdG9yXG4gICAgICogQHBhcmFtIHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3JldmVyc2VdXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHRyZWUsIHRlc3QsIHZpc2l0b3IsIHJldmVyc2UpIHtcbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmlzaXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXZlcnNlID0gdmlzaXRvclxuICAgICAgICB2aXNpdG9yID0gdGVzdFxuICAgICAgICB0ZXN0ID0gbnVsbFxuICAgICAgfVxuXG4gICAgICB2aXNpdFBhcmVudHModHJlZSwgdGVzdCwgb3ZlcmxvYWQsIHJldmVyc2UpXG5cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAgICAgKiBAcGFyYW0ge0FycmF5PFBhcmVudD59IHBhcmVudHNcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gb3ZlcmxvYWQobm9kZSwgcGFyZW50cykge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV1cbiAgICAgICAgcmV0dXJuIHZpc2l0b3IoXG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihub2RlKSA6IG51bGwsXG4gICAgICAgICAgcGFyZW50XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIClcblxuZXhwb3J0IHtDT05USU5VRSwgRVhJVCwgU0tJUH0gZnJvbSAndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJ1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-visit/lib/index.js\n");

/***/ })

};
;