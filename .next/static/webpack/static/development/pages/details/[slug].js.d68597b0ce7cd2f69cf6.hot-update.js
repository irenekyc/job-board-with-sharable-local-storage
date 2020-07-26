webpackHotUpdate("static/development/pages/details/[slug].js",{

/***/ "./src/components/JobDetails/index.js":
/*!********************************************!*\
  !*** ./src/components/JobDetails/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/JobDetails/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar JobDetailsPage = function JobDetailsPage(_ref) {\n  _s();\n\n  var id = _ref.id,\n      data = _ref.data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      url = _useState[0],\n      setURL = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (id) {\n      var history = JSON.parse(localStorage.getItem('broswedJob') || '[]');\n      var updatedHistory = history.concat(id);\n      localStorage.setItem('broswedJob', JSON.stringify(updatedHistory));\n      console.log(router);\n    }\n  }, [id]);\n\n  var calculateTime = function calculateTime(createdAt) {\n    var now = new Date();\n    var difference = now - new Date(createdAt);\n    return Math.ceil(difference / 1000 / 60 / 60 / 24);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 12\n    }\n  }, data ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 18\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }, \"  \", data.title, \" - Jobify\"), __jsx(\"meta\", {\n    property: \"og:title\",\n    content: data.title,\n    key: \"ogTitle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:site_name\",\n    content: \"Jobify: Find your dream developer job\",\n    key: \"ogSiteName\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"Find your dream developer job in here, we offer job search specialised in developer, remote, paid relocation opportunities!\",\n    key: \"description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: \"Find your dream developer job in here, we offer job search specialised in developer, remote, paid relocation opportunities!\",\n    key: \"ogDescription\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:image\",\n    content: \"\",\n    key: \"ogImage\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 17\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=Monofett&display=swap\",\n    rel: \"stylesheet\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"job-page-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"job-page-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  }, data.title), __jsx(\"div\", {\n    className: \"job-page-main\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"job-page-share\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 21\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 25\n    }\n  }, \" Share to your friends:  \", __jsx(\"a\", {\n    href: \"https://api.whatsapp.com/send?text=Checkout this job: \".concat(data.title, \" here: \").concat(data.url),\n    target: \"_blank\",\n    \"data-action\": \"share/whatsapp/share\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 53\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 202\n    }\n  }, \" Whatsapp\"), \" \"), __jsx(\"a\", {\n    href: \"fb-messenger://share/?link=\".concat(data.url, \"send-dialog&app_id=2710038422561321\"),\n    target: \"_blank\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 29\n    }\n  }, \" Send In Messenger\"), __jsx(\"a\", {\n    href: \"https://www.linkedin.com/shareArticle?mini=true&url=\".concat(id, \"program&source=LinkedIn\"),\n    target: \"_blank\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 29\n    }\n  }, \" LinkedIn\"))), __jsx(\"div\", {\n    className: \"job-page-details\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"job-company-logo\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 25\n    }\n  }, __jsx(\"img\", {\n    src: data.company_logo,\n    alt: data.company,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 29\n    }\n  })), __jsx(\"p\", {\n    className: \"description-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 25\n    }\n  }, \" \", data.company), __jsx(\"p\", {\n    className: \"secondary-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 25\n    }\n  }, \" Location: \", data.location), __jsx(\"p\", {\n    className: \"secondary-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 25\n    }\n  }, \" Post at \", calculateTime(data.created_at), \" day(s) ago \"), __jsx(\"div\", {\n    className: \"description-box description-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 25\n    }\n  }, \"Description: \", __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    source: data.description,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 42\n    }\n  }))), __jsx(\"div\", {\n    className: \"job-page-apply\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 21\n    }\n  }, __jsx(\"h3\", {\n    className: \"primary-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 25\n    }\n  }, \" How to Apply\"), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    source: data.how_to_apply,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 25\n    }\n  }))))) : __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 25\n    }\n  }, \"Loading...\"));\n};\n\n_s(JobDetailsPage, \"HjLCrf95qSGZbCHXwuRgU0hkt8s=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = JobDetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JobDetailsPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"JobDetailsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Kb2JEZXRhaWxzL2luZGV4LmpzP2UzNzQiXSwibmFtZXMiOlsiSm9iRGV0YWlsc1BhZ2UiLCJpZCIsImRhdGEiLCJ1c2VTdGF0ZSIsInVybCIsInNldFVSTCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImhpc3RvcnkiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXBkYXRlZEhpc3RvcnkiLCJjb25jYXQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImNhbGN1bGF0ZVRpbWUiLCJjcmVhdGVkQXQiLCJub3ciLCJEYXRlIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJjZWlsIiwidGl0bGUiLCJjb21wYW55X2xvZ28iLCJjb21wYW55IiwibG9jYXRpb24iLCJjcmVhdGVkX2F0IiwiZGVzY3JpcHRpb24iLCJob3dfdG9fYXBwbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxFQUFlLFFBQWZBLEVBQWU7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ2ZDLHNEQUFRLENBQUMsSUFBRCxDQURPO0FBQUEsTUFDOUJDLEdBRDhCO0FBQUEsTUFDekJDLE1BRHlCOztBQUVyQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlQLEVBQUosRUFBUTtBQUNKLFVBQU1RLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixLQUFzQyxJQUFqRCxDQUFoQjtBQUNBLFVBQU1DLGNBQWMsR0FBR0wsT0FBTyxDQUFDTSxNQUFSLENBQWVkLEVBQWYsQ0FBdkI7QUFDQVcsa0JBQVksQ0FBQ0ksT0FBYixDQUFxQixZQUFyQixFQUFtQ04sSUFBSSxDQUFDTyxTQUFMLENBQWVILGNBQWYsQ0FBbkM7QUFDQUksYUFBTyxDQUFDQyxHQUFSLENBQVliLE1BQVo7QUFFSDtBQUdKLEdBVlEsRUFVTixDQUFDTCxFQUFELENBVk0sQ0FBVDs7QUFXQSxNQUFNbUIsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxTQUFELEVBQWU7QUFDakMsUUFBTUMsR0FBRyxHQUFHLElBQUlDLElBQUosRUFBWjtBQUNBLFFBQU1DLFVBQVUsR0FBR0YsR0FBRyxHQUFHLElBQUlDLElBQUosQ0FBU0YsU0FBVCxDQUF6QjtBQUNBLFdBQVFJLElBQUksQ0FBQ0MsSUFBTCxDQUFVRixVQUFVLEdBQUcsSUFBYixHQUFvQixFQUFwQixHQUF5QixFQUF6QixHQUE4QixFQUF4QyxDQUFSO0FBRUgsR0FMRDs7QUFPQSxTQUFPLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNGdEIsSUFBSSxHQUFJLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNMLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBVUEsSUFBSSxDQUFDeUIsS0FBZixjQURKLEVBRUk7QUFBTSxZQUFRLEVBQUMsVUFBZjtBQUEwQixXQUFPLEVBQUV6QixJQUFJLENBQUN5QixLQUF4QztBQUErQyxPQUFHLEVBQUMsU0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBTSxZQUFRLEVBQUMsY0FBZjtBQUE4QixXQUFPLEVBQUMsdUNBQXRDO0FBQThFLE9BQUcsRUFBQyxZQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSTtBQUNJLFFBQUksRUFBQyxhQURUO0FBRUksV0FBTyxFQUFDLDZIQUZaO0FBR0ksT0FBRyxFQUFDLGFBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBU0k7QUFDSSxZQUFRLEVBQUMsZ0JBRGI7QUFFSSxXQUFPLEVBQUMsNkhBRlo7QUFHSSxPQUFHLEVBQUMsZUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosRUFjSTtBQUFNLFlBQVEsRUFBQyxVQUFmO0FBQTBCLFdBQU8sRUFBQyxFQUFsQztBQUFxQyxPQUFHLEVBQUMsU0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRKLEVBZUk7QUFBTSxRQUFJLEVBQUMsZ0VBQVg7QUFBNEUsT0FBRyxFQUFDLFlBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmSixDQURLLEVBa0JMO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0t6QixJQUFJLENBQUN5QixLQURWLENBREosRUFJSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBNEI7QUFBRyxRQUFJLGtFQUEyRHpCLElBQUksQ0FBQ3lCLEtBQWhFLG9CQUErRXpCLElBQUksQ0FBQ0UsR0FBcEYsQ0FBUDtBQUFrRyxVQUFNLEVBQUMsUUFBekc7QUFBa0gsbUJBQVksc0JBQTlIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBckosTUFBNUIsRUFDSTtBQUFHLFFBQUksdUNBQWdDRixJQUFJLENBQUNFLEdBQXJDLHdDQUFQO0FBQXNGLFVBQU0sRUFBQyxRQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLEVBRUk7QUFBRyxRQUFJLGdFQUF5REgsRUFBekQsNEJBQVA7QUFBNkYsVUFBTSxFQUFDLFFBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosQ0FESixDQURKLEVBT0k7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRUMsSUFBSSxDQUFDMEIsWUFBZjtBQUE2QixPQUFHLEVBQUUxQixJQUFJLENBQUMyQixPQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJO0FBQUcsYUFBUyxFQUFDLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBa0MzQixJQUFJLENBQUMyQixPQUF2QyxDQUpKLEVBS0k7QUFBRyxhQUFTLEVBQUMsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBMEMzQixJQUFJLENBQUM0QixRQUEvQyxDQUxKLEVBTUk7QUFBRyxhQUFTLEVBQUMsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBd0NWLGFBQWEsQ0FBQ2xCLElBQUksQ0FBQzZCLFVBQU4sQ0FBckQsaUJBTkosRUFPSTtBQUFLLGFBQVMsRUFBQyxrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNpQixNQUFDLHFEQUFEO0FBQWUsVUFBTSxFQUFFN0IsSUFBSSxDQUFDOEIsV0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURqQixDQVBKLENBUEosRUFrQkk7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUVJLE1BQUMscURBQUQ7QUFBZSxVQUFNLEVBQUU5QixJQUFJLENBQUMrQixZQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FsQkosQ0FKSixDQWxCSyxDQUFKLEdBK0NXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaERiLENBQVA7QUFrREgsQ0F4RUQ7O0dBQU1qQyxjO1VBRWFPLHFEOzs7S0FGYlAsYztBQXlFU0EsNkVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Kb2JEZXRhaWxzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBKb2JEZXRhaWxzUGFnZSA9ICh7IGlkLCBkYXRhIH0pID0+IHtcbiAgICBjb25zdCBbdXJsLCBzZXRVUkxdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICBjb25zdCBoaXN0b3J5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYnJvc3dlZEpvYicpIHx8ICdbXScpO1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEhpc3RvcnkgPSBoaXN0b3J5LmNvbmNhdChpZCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYnJvc3dlZEpvYicsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRIaXN0b3J5KSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvdXRlcilcblxuICAgICAgICB9XG5cblxuICAgIH0sIFtpZF0pXG4gICAgY29uc3QgY2FsY3VsYXRlVGltZSA9IChjcmVhdGVkQXQpID0+IHtcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxuICAgICAgICBjb25zdCBkaWZmZXJlbmNlID0gbm93IC0gbmV3IERhdGUoY3JlYXRlZEF0KVxuICAgICAgICByZXR1cm4gKE1hdGguY2VpbChkaWZmZXJlbmNlIC8gMTAwMCAvIDYwIC8gNjAgLyAyNCkpXG5cbiAgICB9XG5cbiAgICByZXR1cm4gPEZyYWdtZW50PlxuICAgICAgICB7ZGF0YSA/ICg8RnJhZ21lbnQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+ICB7ZGF0YS50aXRsZX0gLSBKb2JpZnk8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzp0aXRsZScgY29udGVudD17ZGF0YS50aXRsZX0ga2V5PSdvZ1RpdGxlJyAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9J0pvYmlmeTogRmluZCB5b3VyIGRyZWFtIGRldmVsb3BlciBqb2InIGtleT0nb2dTaXRlTmFtZScgLz5cbiAgICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD0nRmluZCB5b3VyIGRyZWFtIGRldmVsb3BlciBqb2IgaW4gaGVyZSwgd2Ugb2ZmZXIgam9iIHNlYXJjaCBzcGVjaWFsaXNlZCBpbiBkZXZlbG9wZXIsIHJlbW90ZSwgcGFpZCByZWxvY2F0aW9uIG9wcG9ydHVuaXRpZXMhJ1xuICAgICAgICAgICAgICAgICAgICBrZXk9J2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50PSdGaW5kIHlvdXIgZHJlYW0gZGV2ZWxvcGVyIGpvYiBpbiBoZXJlLCB3ZSBvZmZlciBqb2Igc2VhcmNoIHNwZWNpYWxpc2VkIGluIGRldmVsb3BlciwgcmVtb3RlLCBwYWlkIHJlbG9jYXRpb24gb3Bwb3J0dW5pdGllcyEnXG4gICAgICAgICAgICAgICAgICAgIGtleT0nb2dEZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZScgY29udGVudD0nJyBrZXk9J29nSW1hZ2UnIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9ub2ZldHQmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iLXBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2ItcGFnZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2ItcGFnZS1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iLXBhZ2Utc2hhcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBTaGFyZSB0byB5b3VyIGZyaWVuZHM6ICA8YSBocmVmPXtgaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/dGV4dD1DaGVja291dCB0aGlzIGpvYjogJHtkYXRhLnRpdGxlfSBoZXJlOiAke2RhdGEudXJsfWB9IHRhcmdldD1cIl9ibGFua1wiIGRhdGEtYWN0aW9uPVwic2hhcmUvd2hhdHNhcHAvc2hhcmVcIj48c3Bhbj4gV2hhdHNhcHA8L3NwYW4+IDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgZmItbWVzc2VuZ2VyOi8vc2hhcmUvP2xpbms9JHtkYXRhLnVybH1zZW5kLWRpYWxvZyZhcHBfaWQ9MjcxMDAzODQyMjU2MTMyMWB9IHRhcmdldD1cIl9ibGFua1wiPiBTZW5kIEluIE1lc3NlbmdlcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9taW5pPXRydWUmdXJsPSR7aWR9cHJvZ3JhbSZzb3VyY2U9TGlua2VkSW5gfSB0YXJnZXQ9XCJfYmxhbmtcIj4gTGlua2VkSW48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpvYi1wYWdlLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iLWNvbXBhbnktbG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmNvbXBhbnlfbG9nb30gYWx0PXtkYXRhLmNvbXBhbnl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLXRleHRcIj4ge2RhdGEuY29tcGFueX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWNvbmRhcnktdGV4dFwiPiBMb2NhdGlvbjoge2RhdGEubG9jYXRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2Vjb25kYXJ5LXRleHRcIj4gUG9zdCBhdCB7Y2FsY3VsYXRlVGltZShkYXRhLmNyZWF0ZWRfYXQpfSBkYXkocykgYWdvIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tYm94IGRlc2NyaXB0aW9uLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogPFJlYWN0TWFya2Rvd24gc291cmNlPXtkYXRhLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpvYi1wYWdlLWFwcGx5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJpbWFyeS10ZXh0XCI+IEhvdyB0byBBcHBseTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e2RhdGEuaG93X3RvX2FwcGx5fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRnJhZ21lbnQ+KSA6ICg8ZGl2PkxvYWRpbmcuLi48L2Rpdj4pfVxuICAgIDwvRnJhZ21lbnQ+XG59XG5leHBvcnQgZGVmYXVsdCBKb2JEZXRhaWxzUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/JobDetails/index.js\n");

/***/ })

})