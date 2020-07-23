webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Head */ \"./src/components/Head.js\");\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\n/* harmony import */ var _src_components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/NavBar */ \"./src/components/NavBar.js\");\n/* harmony import */ var _src_components_Main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Main */ \"./src/components/Main.js\");\n/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/irenechow/Desktop/job-board/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\nvar Index = function Index(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      latestJobs = _useState3[0],\n      setLatestJob = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setLatestJob(props.jobs.length > 0 ? props.jobs : []);\n  }, [loading]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }), __jsx(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, __jsx(_src_components_NavBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }), __jsx(_src_components_Main__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    jobs: latestJobs,\n    error: error,\n    loading: loading,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }), __jsx(_src_components_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(Index, \"nNPwFHuucaqLJLWy8jUziHYCEwM=\");\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var res;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          console.log(\"hi\");\n          _context.prev = 1;\n          _context.next = 4;\n          return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(\"https://jobs.github.com/positions.json?page=0\");\n\n        case 4:\n          res = _context.sent;\n          return _context.abrupt(\"return\", {\n            jobs: res\n          });\n\n        case 8:\n          _context.prev = 8;\n          _context.t0 = _context[\"catch\"](1);\n          console.log(_context.t0);\n\n        case 11:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee, null, [[1, 8]]);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImxhdGVzdEpvYnMiLCJzZXRMYXRlc3RKb2IiLCJ1c2VFZmZlY3QiLCJqb2JzIiwibGVuZ3RoIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwiZ2V0IiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsSUFBRCxDQURqQjtBQUFBLE1BQ2RDLE9BRGM7QUFBQSxNQUNMQyxVQURLOztBQUFBLG1CQUVLRixzREFBUSxDQUFDLEtBQUQsQ0FGYjtBQUFBLE1BRWRHLEtBRmM7QUFBQSxNQUVQQyxRQUZPOztBQUFBLG1CQUdjSixzREFBUSxDQUFDLEVBQUQsQ0FIdEI7QUFBQSxNQUdkSyxVQUhjO0FBQUEsTUFHRkMsWUFIRTs7QUFLckJDLHlEQUFTLENBQUMsWUFBTTtBQUNaRCxnQkFBWSxDQUFDUCxLQUFLLENBQUNTLElBQU4sQ0FBV0MsTUFBWCxHQUFvQixDQUFwQixHQUF3QlYsS0FBSyxDQUFDUyxJQUE5QixHQUFxQyxFQUF0QyxDQUFaO0FBQ0gsR0FGUSxFQUVOLENBQUNQLE9BQUQsQ0FGTSxDQUFUO0FBS0EsU0FDSSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBR0ksTUFBQyw0REFBRDtBQUFNLFFBQUksRUFBRUksVUFBWjtBQUF3QixTQUFLLEVBQUVGLEtBQS9CO0FBQXNDLFdBQU8sRUFBRUYsT0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FGSixDQURKO0FBWUgsQ0F0QkQ7O0dBQU1ILEs7O0tBQUFBLEs7QUF3Qk5BLEtBQUssQ0FBQ1ksZUFBTixpTUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3BCQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQURvQjtBQUFBO0FBQUEsaUJBR0VDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSwrQ0FBVixDQUhGOztBQUFBO0FBR1ZDLGFBSFU7QUFBQSwyQ0FJVDtBQUNIUCxnQkFBSSxFQUFFTztBQURILFdBSlM7O0FBQUE7QUFBQTtBQUFBO0FBU2hCSixpQkFBTyxDQUFDQyxHQUFSOztBQVRnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQVllZCxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWV0YUhlYWQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvSGVhZCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL3NyYy9sYXlvdXQvTGF5b3V0JztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTmF2QmFyJztcbmltcG9ydCBNYWluIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL01haW4nO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Gb290ZXInXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2xhdGVzdEpvYnMsIHNldExhdGVzdEpvYl0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRMYXRlc3RKb2IocHJvcHMuam9icy5sZW5ndGggPiAwID8gcHJvcHMuam9icyA6IFtdKVxuICAgIH0sIFtsb2FkaW5nXSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPE1ldGFIZWFkIC8+XG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxOYXZCYXIgLz5cblxuICAgICAgICAgICAgICAgIDxNYWluIGpvYnM9e2xhdGVzdEpvYnN9IGVycm9yPXtlcnJvcn0gbG9hZGluZz17bG9hZGluZ30gLz5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG5cblxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvRnJhZ21lbnQ+KVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoaVwiKVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vam9icy5naXRodWIuY29tL3Bvc2l0aW9ucy5qc29uP3BhZ2U9MFwiKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgam9iczogcmVzLFxuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})