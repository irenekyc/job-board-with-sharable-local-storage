webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _JobCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JobCard */ \"./src/components/JobCard.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/Main.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    width:90%;\\n    padding: 100px 50px;\\n    display: grid;\\n    grid-gap: 2rem;\\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    width:100%;\\n    height:100%;\\n    display:grid;\\n    place-items:center;\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n // import axios from 'axios';\n\nvar Main = function Main(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      latestJobs = _useState[0],\n      setLatestJobs = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    // setLatestJobs(props.jobs.length > 0 ? props.jobs : []);\n    console.log(\"hi from useEffect\");\n  }, []);\n  var MainSection = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].main(_templateObject());\n  var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2());\n  return __jsx(MainSection, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 12\n    }\n  }, __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, latestJobs.map(function (job) {\n    return __jsx(_JobCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      key: job.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 37\n      }\n    }, job.title);\n  })));\n};\n\n_s(Main, \"rZu09F6F7waj92kCdsvxUgtBq1Y=\");\n\n_c = Main;\nMain.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          return _context.abrupt(\"return\", {\n            jobs: [{\n              id: 1,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 2,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 3,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 4,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 5,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 6,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 7,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 8,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 9,\n              title: \"Web developer\",\n              location: \"USA\"\n            }]\n          });\n\n        case 4:\n          _context.prev = 4;\n          _context.t0 = _context[\"catch\"](0);\n          console.error(e);\n          console.log(\"from error\");\n\n        case 8:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee, null, [[0, 4]]);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluLmpzPzc4MmUiXSwibmFtZXMiOlsiTWFpbiIsInByb3BzIiwidXNlU3RhdGUiLCJsYXRlc3RKb2JzIiwic2V0TGF0ZXN0Sm9icyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJNYWluU2VjdGlvbiIsInN0eWxlZCIsIm1haW4iLCJDb250YWluZXIiLCJkaXYiLCJtYXAiLCJqb2IiLCJpZCIsInRpdGxlIiwiZ2V0SW5pdGlhbFByb3BzIiwiam9icyIsImxvY2F0aW9uIiwiZXJyb3IiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBSUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ2dCQyxzREFBUSxDQUFDLEVBQUQsQ0FEeEI7QUFBQSxNQUNiQyxVQURhO0FBQUEsTUFDREMsYUFEQzs7QUFHcEJDLHlEQUFTLENBQUMsWUFBTTtBQUNaO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0gsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUlBLE1BQU1DLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsSUFBVixtQkFBakI7QUFLQSxNQUFNQyxTQUFTLEdBQUdGLHlEQUFNLENBQUNHLEdBQVYsb0JBQWY7QUFNQSxTQUFPLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0gsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1QsVUFBVSxDQUFDVSxHQUFYLENBQWUsVUFBQUMsR0FBRztBQUFBLFdBQUssTUFBQyxnREFBRDtBQUFTLFNBQUcsRUFBRUEsR0FBRyxDQUFDQyxFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXVCRCxHQUFHLENBQUNFLEtBQTNCLENBQUw7QUFBQSxHQUFsQixDQURMLENBREcsQ0FBUDtBQU1ILENBeEJEOztHQUFNaEIsSTs7S0FBQUEsSTtBQTBCTkEsSUFBSSxDQUFDaUIsZUFBTCxpTUFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBRVI7QUFDSEMsZ0JBQUksRUFBRSxDQUNGO0FBQ0lILGdCQUFFLEVBQUUsQ0FEUjtBQUVJQyxtQkFBSyxFQUFFLGVBRlg7QUFHSUcsc0JBQVEsRUFBRTtBQUhkLGFBREUsRUFNRjtBQUNJSixnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lHLHNCQUFRLEVBQUU7QUFIZCxhQU5FLEVBV0Y7QUFDSUosZ0JBQUUsRUFBRSxDQURSO0FBRUlDLG1CQUFLLEVBQUUsZUFGWDtBQUdJRyxzQkFBUSxFQUFFO0FBSGQsYUFYRSxFQWdCRjtBQUNJSixnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lHLHNCQUFRLEVBQUU7QUFIZCxhQWhCRSxFQXFCRjtBQUNJSixnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lHLHNCQUFRLEVBQUU7QUFIZCxhQXJCRSxFQTBCRjtBQUNJSixnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lHLHNCQUFRLEVBQUU7QUFIZCxhQTFCRSxFQStCRjtBQUNJSixnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lHLHNCQUFRLEVBQUU7QUFIZCxhQS9CRSxFQW9DRjtBQUNJSixnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lHLHNCQUFRLEVBQUU7QUFIZCxhQXBDRSxFQXlDRjtBQUNJSixnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lHLHNCQUFRLEVBQUU7QUFIZCxhQXpDRTtBQURILFdBRlE7O0FBQUE7QUFBQTtBQUFBO0FBb0RmYixpQkFBTyxDQUFDYyxLQUFSLENBQWNDLENBQWQ7QUFDQWYsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7O0FBckRlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXZCO0FBMERlUCxtRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL01haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBKb2JDYXJkIGZyb20gJy4vSm9iQ2FyZCc7XG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5cblxuY29uc3QgTWFpbiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtsYXRlc3RKb2JzLCBzZXRMYXRlc3RKb2JzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIHNldExhdGVzdEpvYnMocHJvcHMuam9icy5sZW5ndGggPiAwID8gcHJvcHMuam9icyA6IFtdKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJoaSBmcm9tIHVzZUVmZmVjdFwiKVxuICAgIH0sIFtdKVxuICAgIGNvbnN0IE1haW5TZWN0aW9uID0gc3R5bGVkLm1haW5gXG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgcGxhY2UtaXRlbXM6Y2VudGVyO2BcbiAgICBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOjkwJTtcbiAgICBwYWRkaW5nOiAxMDBweCA1MHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDJyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7YFxuICAgIHJldHVybiA8TWFpblNlY3Rpb24+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICB7bGF0ZXN0Sm9icy5tYXAoam9iID0+ICg8Sm9iQ2FyZCBrZXk9e2pvYi5pZH0+e2pvYi50aXRsZX08L0pvYkNhcmQ+KSl9XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTWFpblNlY3Rpb24+XG5cbn1cblxuTWFpbi5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGpvYnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJXZWIgZGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIlVTQVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJXZWIgZGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIlVTQVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJXZWIgZGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIlVTQVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJXZWIgZGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIlVTQVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJXZWIgZGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIlVTQVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiA2LFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJXZWIgZGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIlVTQVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiA3LFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJXZWIgZGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIlVTQVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiA4LFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJXZWIgZGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIlVTQVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiA5LFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJXZWIgZGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIlVTQVwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICBjb25zb2xlLmxvZyhcImZyb20gZXJyb3JcIilcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Main.js\n");

/***/ })

})