webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _JobCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JobCard */ \"./src/components/JobCard.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/Main.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    width:90%;\\n    padding: 100px 50px;\\n    display: grid;\\n    grid-gap: 2rem;\\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    width:100%;\\n    height:100%;\\n    display:grid;\\n    place-items:center;\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar jobData = [{\n  id: 1,\n  title: \"Web developer\",\n  location: \"USA\"\n}, {\n  id: 1,\n  title: \"Web developer\",\n  location: \"USA\"\n}, {\n  id: 1,\n  title: \"Web developer\",\n  location: \"USA\"\n}, {\n  id: 1,\n  title: \"Web developer\",\n  location: \"USA\"\n}, {\n  id: 1,\n  title: \"Web developer\",\n  location: \"USA\"\n}, {\n  id: 1,\n  title: \"Web developer\",\n  location: \"USA\"\n}, {\n  id: 1,\n  title: \"Web developer\",\n  location: \"USA\"\n}, {\n  id: 1,\n  title: \"Web developer\",\n  location: \"USA\"\n}];\n\nvar Main = function Main(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      latestJobs = _useState[0],\n      setLatestJobs = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setLatestJobs(props.jobs ? props.jobs : null);\n  }, []);\n  var MainSection = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].main(_templateObject());\n  var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2());\n  return __jsx(MainSection, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 12\n    }\n  }, __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, jobData.map(function (job) {\n    return __jsx(_JobCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      key: job.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 34\n      }\n    }, job.title);\n  })));\n};\n\n_s(Main, \"tmfcAdSbHreNzsV2ZL6feRBGXDA=\");\n\n_c = Main;\nMain.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var res, jobs;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(\"https://jobs.github.com/positions.json?page=0\");\n\n        case 2:\n          res = _context.sent;\n          _context.next = 5;\n          return res.json();\n\n        case 5:\n          jobs = _context.sent;\n          _context.prev = 6;\n          console.log(\"from initial props\");\n          return _context.abrupt(\"return\", {\n            jobs: jobs\n          });\n\n        case 11:\n          _context.prev = 11;\n          _context.t0 = _context[\"catch\"](6);\n          console.error(e);\n          console.log(\"from error\");\n\n        case 15:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee, null, [[6, 11]]);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluLmpzPzc4MmUiXSwibmFtZXMiOlsiam9iRGF0YSIsImlkIiwidGl0bGUiLCJsb2NhdGlvbiIsIk1haW4iLCJwcm9wcyIsInVzZVN0YXRlIiwibGF0ZXN0Sm9icyIsInNldExhdGVzdEpvYnMiLCJ1c2VFZmZlY3QiLCJqb2JzIiwiTWFpblNlY3Rpb24iLCJzdHlsZWQiLCJtYWluIiwiQ29udGFpbmVyIiwiZGl2IiwibWFwIiwiam9iIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLE9BQU8sR0FBRyxDQUNaO0FBQ0lDLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxlQUZYO0FBR0lDLFVBQVEsRUFBRTtBQUhkLENBRFksRUFNWjtBQUNJRixJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsZUFGWDtBQUdJQyxVQUFRLEVBQUU7QUFIZCxDQU5ZLEVBV1o7QUFDSUYsSUFBRSxFQUFFLENBRFI7QUFFSUMsT0FBSyxFQUFFLGVBRlg7QUFHSUMsVUFBUSxFQUFFO0FBSGQsQ0FYWSxFQWdCWjtBQUNJRixJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsZUFGWDtBQUdJQyxVQUFRLEVBQUU7QUFIZCxDQWhCWSxFQXFCWjtBQUNJRixJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsZUFGWDtBQUdJQyxVQUFRLEVBQUU7QUFIZCxDQXJCWSxFQTBCWjtBQUNJRixJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsZUFGWDtBQUdJQyxVQUFRLEVBQUU7QUFIZCxDQTFCWSxFQStCWjtBQUNJRixJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsZUFGWDtBQUdJQyxVQUFRLEVBQUU7QUFIZCxDQS9CWSxFQW9DWjtBQUNJRixJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsZUFGWDtBQUdJQyxVQUFRLEVBQUU7QUFIZCxDQXBDWSxDQUFoQjs7QUE0Q0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ2dCQyxzREFBUSxDQUFDLElBQUQsQ0FEeEI7QUFBQSxNQUNiQyxVQURhO0FBQUEsTUFDREMsYUFEQzs7QUFHcEJDLHlEQUFTLENBQUMsWUFBTTtBQUNaRCxpQkFBYSxDQUFDSCxLQUFLLENBQUNLLElBQU4sR0FBYUwsS0FBSyxDQUFDSyxJQUFuQixHQUEwQixJQUEzQixDQUFiO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBLE1BQU1DLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsSUFBVixtQkFBakI7QUFLQSxNQUFNQyxTQUFTLEdBQUdGLHlEQUFNLENBQUNHLEdBQVYsb0JBQWY7QUFNQSxTQUFPLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0gsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS2YsT0FBTyxDQUFDZ0IsR0FBUixDQUFZLFVBQUFDLEdBQUc7QUFBQSxXQUFLLE1BQUMsZ0RBQUQ7QUFBUyxTQUFHLEVBQUVBLEdBQUcsQ0FBQ2hCLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBdUJnQixHQUFHLENBQUNmLEtBQTNCLENBQUw7QUFBQSxHQUFmLENBREwsQ0FERyxDQUFQO0FBTUgsQ0F2QkQ7O0dBQU1FLEk7O0tBQUFBLEk7QUF5Qk5BLElBQUksQ0FBQ2MsZUFBTCxpTUFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDREMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLCtDQUFWLENBREM7O0FBQUE7QUFDYkMsYUFEYTtBQUFBO0FBQUEsaUJBRUFBLEdBQUcsQ0FBQ0MsSUFBSixFQUZBOztBQUFBO0FBRWJaLGNBRmE7QUFBQTtBQUlmYSxpQkFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFKZSwyQ0FLUjtBQUNIZCxnQkFBSSxFQUFFQTtBQURILFdBTFE7O0FBQUE7QUFBQTtBQUFBO0FBVWZhLGlCQUFPLENBQUNFLEtBQVIsQ0FBY0MsQ0FBZDtBQUNBSCxpQkFBTyxDQUFDQyxHQUFSLENBQVksWUFBWjs7QUFYZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF2QjtBQWdCZXBCLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IEpvYkNhcmQgZnJvbSAnLi9Kb2JDYXJkJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cblxuY29uc3Qgam9iRGF0YSA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICB0aXRsZTogXCJXZWIgZGV2ZWxvcGVyXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIlVTQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICB0aXRsZTogXCJXZWIgZGV2ZWxvcGVyXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIlVTQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICB0aXRsZTogXCJXZWIgZGV2ZWxvcGVyXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIlVTQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICB0aXRsZTogXCJXZWIgZGV2ZWxvcGVyXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIlVTQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICB0aXRsZTogXCJXZWIgZGV2ZWxvcGVyXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIlVTQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICB0aXRsZTogXCJXZWIgZGV2ZWxvcGVyXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIlVTQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICB0aXRsZTogXCJXZWIgZGV2ZWxvcGVyXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIlVTQVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICB0aXRsZTogXCJXZWIgZGV2ZWxvcGVyXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIlVTQVwiXG4gICAgfSxcblxuXVxuXG5jb25zdCBNYWluID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW2xhdGVzdEpvYnMsIHNldExhdGVzdEpvYnNdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRMYXRlc3RKb2JzKHByb3BzLmpvYnMgPyBwcm9wcy5qb2JzIDogbnVsbCk7XG4gICAgfSwgW10pXG4gICAgY29uc3QgTWFpblNlY3Rpb24gPSBzdHlsZWQubWFpbmBcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBwbGFjZS1pdGVtczpjZW50ZXI7YFxuICAgIGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6OTAlO1xuICAgIHBhZGRpbmc6IDEwMHB4IDUwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogMnJlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtgXG4gICAgcmV0dXJuIDxNYWluU2VjdGlvbj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIHtqb2JEYXRhLm1hcChqb2IgPT4gKDxKb2JDYXJkIGtleT17am9iLmlkfT57am9iLnRpdGxlfTwvSm9iQ2FyZD4pKX1cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgPC9NYWluU2VjdGlvbj5cblxufVxuXG5NYWluLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2pvYnMuZ2l0aHViLmNvbS9wb3NpdGlvbnMuanNvbj9wYWdlPTBcIilcbiAgICBjb25zdCBqb2JzID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZyb20gaW5pdGlhbCBwcm9wc1wiKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgam9iczogam9ic1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoe1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZnJvbSBlcnJvclwiKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main.js\n");

/***/ })

})