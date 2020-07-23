webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _JobCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JobCard */ \"./src/components/JobCard.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/Main.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    min-width:90%;\\n    padding: 100px 50px;\\n    display: grid;\\n    grid-gap: 2rem;\\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    width:100%;\\n    height:100%;\\n    display:grid;\\n    place-items:center;\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar jobData = [{\n  id: 1,\n  title: \"Web developer\",\n  location: \"USA\"\n}, {\n  id: 1,\n  title: \"Web developer\",\n  location: \"USA\"\n}, {\n  id: 1,\n  title: \"Web developer\",\n  location: \"USA\"\n}, {\n  id: 1,\n  title: \"Web developer\",\n  location: \"USA\"\n}, {\n  id: 1,\n  title: \"Web developer\",\n  location: \"USA\"\n}, {\n  id: 1,\n  title: \"Web developer\",\n  location: \"USA\"\n}, {\n  id: 1,\n  title: \"Web developer\",\n  location: \"USA\"\n}, {\n  id: 1,\n  title: \"Web developer\",\n  location: \"USA\"\n}];\n\nvar Main = function Main(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      latestJobs = _useState[0],\n      setLatestJobs = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setLatestJobs(props.jobs ? props.jobs : null);\n    console.log(props);\n  }, []);\n  var MainSection = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].main(_templateObject());\n  var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2());\n  return __jsx(MainSection, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 12\n    }\n  }, __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, jobData.map(function (job) {\n    return __jsx(_JobCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      key: job.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 34\n      }\n    }, job.title);\n  })));\n};\n\n_s(Main, \"tmfcAdSbHreNzsV2ZL6feRBGXDA=\");\n\n_c = Main;\nMain.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var res;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(\"https://jobs.github.com/positions.json?page=0\");\n\n        case 2:\n          res = _context.sent;\n          _context.prev = 3;\n          return _context.abrupt(\"return\", {\n            jobs: res\n          });\n\n        case 7:\n          _context.prev = 7;\n          _context.t0 = _context[\"catch\"](3);\n          console.error(e);\n\n        case 10:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee, null, [[3, 7]]);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluLmpzPzc4MmUiXSwibmFtZXMiOlsiam9iRGF0YSIsImlkIiwidGl0bGUiLCJsb2NhdGlvbiIsIk1haW4iLCJwcm9wcyIsInVzZVN0YXRlIiwibGF0ZXN0Sm9icyIsInNldExhdGVzdEpvYnMiLCJ1c2VFZmZlY3QiLCJqb2JzIiwiY29uc29sZSIsImxvZyIsIk1haW5TZWN0aW9uIiwic3R5bGVkIiwibWFpbiIsIkNvbnRhaW5lciIsImRpdiIsIm1hcCIsImpvYiIsImdldEluaXRpYWxQcm9wcyIsImF4aW9zIiwiZ2V0IiwicmVzIiwiZXJyb3IiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsT0FBTyxHQUFHLENBQ1o7QUFDSUMsSUFBRSxFQUFFLENBRFI7QUFFSUMsT0FBSyxFQUFFLGVBRlg7QUFHSUMsVUFBUSxFQUFFO0FBSGQsQ0FEWSxFQU1aO0FBQ0lGLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxlQUZYO0FBR0lDLFVBQVEsRUFBRTtBQUhkLENBTlksRUFXWjtBQUNJRixJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsZUFGWDtBQUdJQyxVQUFRLEVBQUU7QUFIZCxDQVhZLEVBZ0JaO0FBQ0lGLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxlQUZYO0FBR0lDLFVBQVEsRUFBRTtBQUhkLENBaEJZLEVBcUJaO0FBQ0lGLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxlQUZYO0FBR0lDLFVBQVEsRUFBRTtBQUhkLENBckJZLEVBMEJaO0FBQ0lGLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxlQUZYO0FBR0lDLFVBQVEsRUFBRTtBQUhkLENBMUJZLEVBK0JaO0FBQ0lGLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxlQUZYO0FBR0lDLFVBQVEsRUFBRTtBQUhkLENBL0JZLEVBb0NaO0FBQ0lGLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxlQUZYO0FBR0lDLFVBQVEsRUFBRTtBQUhkLENBcENZLENBQWhCOztBQTRDQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUMsSUFBRCxDQUR4QjtBQUFBLE1BQ2JDLFVBRGE7QUFBQSxNQUNEQyxhQURDOztBQUdwQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pELGlCQUFhLENBQUNILEtBQUssQ0FBQ0ssSUFBTixHQUFhTCxLQUFLLENBQUNLLElBQW5CLEdBQTBCLElBQTNCLENBQWI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlQLEtBQVo7QUFDSCxHQUhRLEVBR04sRUFITSxDQUFUO0FBSUEsTUFBTVEsV0FBVyxHQUFHQyx5REFBTSxDQUFDQyxJQUFWLG1CQUFqQjtBQUtBLE1BQU1DLFNBQVMsR0FBR0YseURBQU0sQ0FBQ0csR0FBVixvQkFBZjtBQU1BLFNBQU8sTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSCxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLakIsT0FBTyxDQUFDa0IsR0FBUixDQUFZLFVBQUFDLEdBQUc7QUFBQSxXQUFLLE1BQUMsZ0RBQUQ7QUFBUyxTQUFHLEVBQUVBLEdBQUcsQ0FBQ2xCLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBdUJrQixHQUFHLENBQUNqQixLQUEzQixDQUFMO0FBQUEsR0FBZixDQURMLENBREcsQ0FBUDtBQU1ILENBeEJEOztHQUFNRSxJOztLQUFBQSxJO0FBMEJOQSxJQUFJLENBQUNnQixlQUFMLGlNQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNEQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsK0NBQVYsQ0FEQzs7QUFBQTtBQUNiQyxhQURhO0FBQUE7QUFBQSwyQ0FHUjtBQUNIYixnQkFBSSxFQUFFYTtBQURILFdBSFE7O0FBQUE7QUFBQTtBQUFBO0FBUWZaLGlCQUFPLENBQUNhLEtBQVIsQ0FBY0MsQ0FBZDs7QUFSZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF2QjtBQWFlckIsbUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgSm9iQ2FyZCBmcm9tICcuL0pvYkNhcmQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5jb25zdCBqb2JEYXRhID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHRpdGxlOiBcIldlYiBkZXZlbG9wZXJcIixcbiAgICAgICAgbG9jYXRpb246IFwiVVNBXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHRpdGxlOiBcIldlYiBkZXZlbG9wZXJcIixcbiAgICAgICAgbG9jYXRpb246IFwiVVNBXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHRpdGxlOiBcIldlYiBkZXZlbG9wZXJcIixcbiAgICAgICAgbG9jYXRpb246IFwiVVNBXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHRpdGxlOiBcIldlYiBkZXZlbG9wZXJcIixcbiAgICAgICAgbG9jYXRpb246IFwiVVNBXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHRpdGxlOiBcIldlYiBkZXZlbG9wZXJcIixcbiAgICAgICAgbG9jYXRpb246IFwiVVNBXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHRpdGxlOiBcIldlYiBkZXZlbG9wZXJcIixcbiAgICAgICAgbG9jYXRpb246IFwiVVNBXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHRpdGxlOiBcIldlYiBkZXZlbG9wZXJcIixcbiAgICAgICAgbG9jYXRpb246IFwiVVNBXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHRpdGxlOiBcIldlYiBkZXZlbG9wZXJcIixcbiAgICAgICAgbG9jYXRpb246IFwiVVNBXCJcbiAgICB9LFxuXG5dXG5cbmNvbnN0IE1haW4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbbGF0ZXN0Sm9icywgc2V0TGF0ZXN0Sm9ic10gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldExhdGVzdEpvYnMocHJvcHMuam9icyA/IHByb3BzLmpvYnMgOiBudWxsKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvcHMpXG4gICAgfSwgW10pXG4gICAgY29uc3QgTWFpblNlY3Rpb24gPSBzdHlsZWQubWFpbmBcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBwbGFjZS1pdGVtczpjZW50ZXI7YFxuICAgIGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgbWluLXdpZHRoOjkwJTtcbiAgICBwYWRkaW5nOiAxMDBweCA1MHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDJyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7YFxuICAgIHJldHVybiA8TWFpblNlY3Rpb24+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICB7am9iRGF0YS5tYXAoam9iID0+ICg8Sm9iQ2FyZCBrZXk9e2pvYi5pZH0+e2pvYi50aXRsZX08L0pvYkNhcmQ+KSl9XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTWFpblNlY3Rpb24+XG5cbn1cblxuTWFpbi5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9qb2JzLmdpdGh1Yi5jb20vcG9zaXRpb25zLmpzb24/cGFnZT0wXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGpvYnM6IHJlcyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2F0Y2h7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Main.js\n");

/***/ })

})