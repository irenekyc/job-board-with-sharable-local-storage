webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Head */ \"./src/components/Head.js\");\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\n/* harmony import */ var _src_components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/NavBar */ \"./src/components/NavBar.js\");\n/* harmony import */ var _src_components_Main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Main */ \"./src/components/Main.js\");\n/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/irenechow/Desktop/job-board/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\nvar Index = function Index(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }), __jsx(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, __jsx(_src_components_NavBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }), __jsx(_src_components_Main__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 17\n    }\n  }), __jsx(_src_components_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  })));\n};\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var res;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(\"https://jobs.github.com/positions.json?page=0\");\n\n        case 2:\n          res = _context.sent;\n          console.log(res);\n          return _context.abrupt(\"return\", {\n            jobs: [{\n              id: 1,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 2,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 3,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 4,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 5,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 6,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 7,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 8,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 9,\n              title: \"Web developer\",\n              location: \"USA\"\n            }]\n          });\n\n        case 5:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJheGlvcyIsImdldCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJqb2JzIiwiaWQiLCJ0aXRsZSIsImxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFDckIsU0FDSSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBSUksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFPSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQUZKLENBREo7QUFlSCxDQWhCRDs7S0FBTUQsSztBQWtCTkEsS0FBSyxDQUFDRSxlQUFOLGlNQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNGQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsK0NBQVYsQ0FERTs7QUFBQTtBQUNkQyxhQURjO0FBRXBCQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFGb0IsMkNBR2I7QUFDSEcsZ0JBQUksRUFBRSxDQUNGO0FBQ0lDLGdCQUFFLEVBQUUsQ0FEUjtBQUVJQyxtQkFBSyxFQUFFLGVBRlg7QUFHSUMsc0JBQVEsRUFBRTtBQUhkLGFBREUsRUFNRjtBQUNJRixnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lDLHNCQUFRLEVBQUU7QUFIZCxhQU5FLEVBV0Y7QUFDSUYsZ0JBQUUsRUFBRSxDQURSO0FBRUlDLG1CQUFLLEVBQUUsZUFGWDtBQUdJQyxzQkFBUSxFQUFFO0FBSGQsYUFYRSxFQWdCRjtBQUNJRixnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lDLHNCQUFRLEVBQUU7QUFIZCxhQWhCRSxFQXFCRjtBQUNJRixnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lDLHNCQUFRLEVBQUU7QUFIZCxhQXJCRSxFQTBCRjtBQUNJRixnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lDLHNCQUFRLEVBQUU7QUFIZCxhQTFCRSxFQStCRjtBQUNJRixnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lDLHNCQUFRLEVBQUU7QUFIZCxhQS9CRSxFQW9DRjtBQUNJRixnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lDLHNCQUFRLEVBQUU7QUFIZCxhQXBDRSxFQXlDRjtBQUNJRixnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lDLHNCQUFRLEVBQUU7QUFIZCxhQXpDRTtBQURILFdBSGE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBeEI7QUFvRGVYLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZXRhSGVhZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9IZWFkJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vc3JjL2xheW91dC9MYXlvdXQnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9OYXZCYXInO1xuaW1wb3J0IE1haW4gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTWFpbic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICA8TWV0YUhlYWQgLz5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPE5hdkJhcj5cblxuICAgICAgICAgICAgICAgIDwvTmF2QmFyPlxuICAgICAgICAgICAgICAgIDxNYWluPlxuXG4gICAgICAgICAgICAgICAgPC9NYWluPlxuICAgICAgICAgICAgICAgIDxGb290ZXI+XG5cbiAgICAgICAgICAgICAgICA8L0Zvb3Rlcj5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L0ZyYWdtZW50Pilcbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vam9icy5naXRodWIuY29tL3Bvc2l0aW9ucy5qc29uP3BhZ2U9MFwiKVxuICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgam9iczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIldlYiBkZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJVU0FcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJXZWIgZGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IFwiVVNBXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiV2ViIGRldmVsb3BlclwiLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIlVTQVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIldlYiBkZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJVU0FcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNSxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJXZWIgZGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IFwiVVNBXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiV2ViIGRldmVsb3BlclwiLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIlVTQVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA3LFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIldlYiBkZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJVU0FcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogOCxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJXZWIgZGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IFwiVVNBXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDksXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiV2ViIGRldmVsb3BlclwiLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIlVTQVwiXG4gICAgICAgICAgICB9XVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})