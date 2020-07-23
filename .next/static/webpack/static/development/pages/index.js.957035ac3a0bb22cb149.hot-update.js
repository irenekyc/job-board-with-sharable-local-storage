webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _JobCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JobCard */ \"./src/components/JobCard.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/Main.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    width:90%;\\n    padding: 100px 50px;\\n    display: grid;\\n    grid-gap: 2rem;\\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    width:100%;\\n    height:100%;\\n    display:grid;\\n    place-items:center;\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n // import axios from 'axios';\n\nvar Main = function Main(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      latestJobs = _useState[0],\n      setLatestJobs = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setLatestJobs(props.jobs ? props.jobs : []);\n  }, []);\n  var MainSection = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].main(_templateObject());\n  var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2());\n  return __jsx(MainSection, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 12\n    }\n  }, __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, latestJobs.map(function (job) {\n    return __jsx(_JobCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      key: job.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 37\n      }\n    }, job.title);\n  })));\n};\n\n_s(Main, \"tmfcAdSbHreNzsV2ZL6feRBGXDA=\");\n\n_c = Main;\nMain.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          return _context.abrupt(\"return\", {\n            jobs: [{\n              id: 1,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 2,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 3,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 4,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 5,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 6,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 7,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 8,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 9,\n              title: \"Web developer\",\n              location: \"USA\"\n            }]\n          });\n\n        case 4:\n          _context.prev = 4;\n          _context.t0 = _context[\"catch\"](0);\n          console.error(e);\n          console.log(\"from error\");\n\n        case 8:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee, null, [[0, 4]]);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluLmpzPzc4MmUiXSwibmFtZXMiOlsiTWFpbiIsInByb3BzIiwidXNlU3RhdGUiLCJsYXRlc3RKb2JzIiwic2V0TGF0ZXN0Sm9icyIsInVzZUVmZmVjdCIsImpvYnMiLCJNYWluU2VjdGlvbiIsInN0eWxlZCIsIm1haW4iLCJDb250YWluZXIiLCJkaXYiLCJtYXAiLCJqb2IiLCJpZCIsInRpdGxlIiwiZ2V0SW5pdGlhbFByb3BzIiwibG9jYXRpb24iLCJjb25zb2xlIiwiZXJyb3IiLCJlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBSUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ2dCQyxzREFBUSxDQUFDLElBQUQsQ0FEeEI7QUFBQSxNQUNiQyxVQURhO0FBQUEsTUFDREMsYUFEQzs7QUFHcEJDLHlEQUFTLENBQUMsWUFBTTtBQUNaRCxpQkFBYSxDQUFDSCxLQUFLLENBQUNLLElBQU4sR0FBYUwsS0FBSyxDQUFDSyxJQUFuQixHQUEwQixFQUEzQixDQUFiO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBLE1BQU1DLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsSUFBVixtQkFBakI7QUFLQSxNQUFNQyxTQUFTLEdBQUdGLHlEQUFNLENBQUNHLEdBQVYsb0JBQWY7QUFNQSxTQUFPLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0gsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1IsVUFBVSxDQUFDUyxHQUFYLENBQWUsVUFBQUMsR0FBRztBQUFBLFdBQUssTUFBQyxnREFBRDtBQUFTLFNBQUcsRUFBRUEsR0FBRyxDQUFDQyxFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXVCRCxHQUFHLENBQUNFLEtBQTNCLENBQUw7QUFBQSxHQUFsQixDQURMLENBREcsQ0FBUDtBQU1ILENBdkJEOztHQUFNZixJOztLQUFBQSxJO0FBeUJOQSxJQUFJLENBQUNnQixlQUFMLGlNQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FFUjtBQUNIVixnQkFBSSxFQUFFLENBQ0Y7QUFDSVEsZ0JBQUUsRUFBRSxDQURSO0FBRUlDLG1CQUFLLEVBQUUsZUFGWDtBQUdJRSxzQkFBUSxFQUFFO0FBSGQsYUFERSxFQU1GO0FBQ0lILGdCQUFFLEVBQUUsQ0FEUjtBQUVJQyxtQkFBSyxFQUFFLGVBRlg7QUFHSUUsc0JBQVEsRUFBRTtBQUhkLGFBTkUsRUFXRjtBQUNJSCxnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lFLHNCQUFRLEVBQUU7QUFIZCxhQVhFLEVBZ0JGO0FBQ0lILGdCQUFFLEVBQUUsQ0FEUjtBQUVJQyxtQkFBSyxFQUFFLGVBRlg7QUFHSUUsc0JBQVEsRUFBRTtBQUhkLGFBaEJFLEVBcUJGO0FBQ0lILGdCQUFFLEVBQUUsQ0FEUjtBQUVJQyxtQkFBSyxFQUFFLGVBRlg7QUFHSUUsc0JBQVEsRUFBRTtBQUhkLGFBckJFLEVBMEJGO0FBQ0lILGdCQUFFLEVBQUUsQ0FEUjtBQUVJQyxtQkFBSyxFQUFFLGVBRlg7QUFHSUUsc0JBQVEsRUFBRTtBQUhkLGFBMUJFLEVBK0JGO0FBQ0lILGdCQUFFLEVBQUUsQ0FEUjtBQUVJQyxtQkFBSyxFQUFFLGVBRlg7QUFHSUUsc0JBQVEsRUFBRTtBQUhkLGFBL0JFLEVBb0NGO0FBQ0lILGdCQUFFLEVBQUUsQ0FEUjtBQUVJQyxtQkFBSyxFQUFFLGVBRlg7QUFHSUUsc0JBQVEsRUFBRTtBQUhkLGFBcENFLEVBeUNGO0FBQ0lILGdCQUFFLEVBQUUsQ0FEUjtBQUVJQyxtQkFBSyxFQUFFLGVBRlg7QUFHSUUsc0JBQVEsRUFBRTtBQUhkLGFBekNFO0FBREgsV0FGUTs7QUFBQTtBQUFBO0FBQUE7QUFvRGZDLGlCQUFPLENBQUNDLEtBQVIsQ0FBY0MsQ0FBZDtBQUNBRixpQkFBTyxDQUFDRyxHQUFSLENBQVksWUFBWjs7QUFyRGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdkI7QUEwRGVyQixtRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL01haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBKb2JDYXJkIGZyb20gJy4vSm9iQ2FyZCc7XG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5cblxuY29uc3QgTWFpbiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtsYXRlc3RKb2JzLCBzZXRMYXRlc3RKb2JzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0TGF0ZXN0Sm9icyhwcm9wcy5qb2JzID8gcHJvcHMuam9icyA6IFtdKTtcbiAgICB9LCBbXSlcbiAgICBjb25zdCBNYWluU2VjdGlvbiA9IHN0eWxlZC5tYWluYFxuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIHBsYWNlLWl0ZW1zOmNlbnRlcjtgXG4gICAgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDo5MCU7XG4gICAgcGFkZGluZzogMTAwcHggNTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAycmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO2BcbiAgICByZXR1cm4gPE1haW5TZWN0aW9uPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAge2xhdGVzdEpvYnMubWFwKGpvYiA9PiAoPEpvYkNhcmQga2V5PXtqb2IuaWR9Pntqb2IudGl0bGV9PC9Kb2JDYXJkPikpfVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L01haW5TZWN0aW9uPlxuXG59XG5cbk1haW4uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBqb2JzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiV2ViIGRldmVsb3BlclwiLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJVU0FcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiV2ViIGRldmVsb3BlclwiLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJVU0FcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiV2ViIGRldmVsb3BlclwiLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJVU0FcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiV2ViIGRldmVsb3BlclwiLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJVU0FcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogNSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiV2ViIGRldmVsb3BlclwiLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJVU0FcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiV2ViIGRldmVsb3BlclwiLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJVU0FcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogNyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiV2ViIGRldmVsb3BlclwiLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJVU0FcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogOCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiV2ViIGRldmVsb3BlclwiLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJVU0FcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogOSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiV2ViIGRldmVsb3BlclwiLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJVU0FcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2h7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgY29uc29sZS5sb2coXCJmcm9tIGVycm9yXCIpXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Main.js\n");

/***/ })

})