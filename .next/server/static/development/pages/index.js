module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Head */ \"./src/components/Head.js\");\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\n/* harmony import */ var _src_components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/NavBar */ \"./src/components/NavBar.js\");\n/* harmony import */ var _src_components_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Main */ \"./src/components/Main.js\");\n/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/irenechow/Desktop/job-board/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nconst Index = ({\n  jobs,\n  error\n}) => {\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  const {\n    0: failed,\n    1: setError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: latestJobs,\n    1: setLatestJob\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    setLoading(false);\n    setLatestJob(jobs);\n  }, [jobs]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (error) {\n      setError(true);\n    }\n  }, [error]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }), __jsx(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, __jsx(_src_components_NavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  }), __jsx(_src_components_Main__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    jobs: latestJobs,\n    error: failed,\n    loading: loading,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 17\n    }\n  }), __jsx(_src_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  })));\n};\n\nasync function getStaticProps() {\n  const res = await axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(\"https://jobs.github.com/positions.json?page=0\");\n\n  try {\n    return {\n      props: {\n        jobs: res.data\n      }\n    };\n  } catch (error) {\n    return {\n      props: {\n        error: true\n      }\n    };\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4Iiwiam9icyIsImVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsImZhaWxlZCIsInNldEVycm9yIiwibGF0ZXN0Sm9icyIsInNldExhdGVzdEpvYiIsInVzZUVmZmVjdCIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiYXhpb3MiLCJnZXQiLCJwcm9wcyIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQUQsS0FBcUI7QUFDL0IsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLElBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBcUJGLHNEQUFRLENBQUMsS0FBRCxDQUFuQztBQUNBLFFBQU07QUFBQSxPQUFDRyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE2Qkosc0RBQVEsQ0FBQyxFQUFELENBQTNDO0FBRUFLLHlEQUFTLENBQUMsTUFBTTtBQUNaTixjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FLLGdCQUFZLENBQUNSLElBQUQsQ0FBWjtBQUNILEdBSFEsRUFHTixDQUFDQSxJQUFELENBSE0sQ0FBVDtBQUtBUyx5REFBUyxDQUFDLE1BQU07QUFDWixRQUFJUixLQUFKLEVBQVc7QUFDUEssY0FBUSxDQUFDLElBQUQsQ0FBUjtBQUNIO0FBQ0osR0FKUSxFQUlOLENBQUNMLEtBQUQsQ0FKTSxDQUFUO0FBTUEsU0FDSSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyw0REFBRDtBQUFNLFFBQUksRUFBRU0sVUFBWjtBQUF3QixTQUFLLEVBQUVGLE1BQS9CO0FBQXVDLFdBQU8sRUFBRUgsT0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FGSixDQURKO0FBU0gsQ0F6QkQ7O0FBMkJPLGVBQWVRLGNBQWYsR0FBZ0M7QUFDbkMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSwrQ0FBVixDQUFsQjs7QUFDQSxNQUFJO0FBQ0EsV0FBTztBQUNIQyxXQUFLLEVBQUU7QUFDSGQsWUFBSSxFQUFFVyxHQUFHLENBQUNJO0FBRFA7QUFESixLQUFQO0FBS0gsR0FORCxDQU1FLE9BQU9kLEtBQVAsRUFBYztBQUNaLFdBQU87QUFDSGEsV0FBSyxFQUFFO0FBQ0hiLGFBQUssRUFBRTtBQURKO0FBREosS0FBUDtBQU1IO0FBQ0o7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1ldGFIZWFkIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0hlYWQnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9zcmMvbGF5b3V0L0xheW91dCc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL05hdkJhcic7XG5pbXBvcnQgTWFpbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9NYWluJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBJbmRleCA9ICh7IGpvYnMsIGVycm9yIH0pID0+IHtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbZmFpbGVkLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2xhdGVzdEpvYnMsIHNldExhdGVzdEpvYl0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICBzZXRMYXRlc3RKb2Ioam9icylcbiAgICB9LCBbam9ic10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldEVycm9yKHRydWUpXG4gICAgICAgIH1cbiAgICB9LCBbZXJyb3JdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPE1ldGFIZWFkIC8+XG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAgICAgICAgICA8TWFpbiBqb2JzPXtsYXRlc3RKb2JzfSBlcnJvcj17ZmFpbGVkfSBsb2FkaW5nPXtsb2FkaW5nfSAvPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L0ZyYWdtZW50Pilcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vam9icy5naXRodWIuY29tL3Bvc2l0aW9ucy5qc29uP3BhZ2U9MFwiKTtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICBqb2JzOiByZXMuZGF0YSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/Footer.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Footer = () => {\n  const Footer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer`\n    width:100%;\n    display:grid;\n    place-items:center;\n    background:white;`;\n  return __jsx(Footer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 12\n    }\n  }, \"Copyright 2020. Designed and Developed by Irene K.\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIuanM/MjcwYiJdLCJuYW1lcyI6WyJGb290ZXIiLCJzdHlsZWQiLCJmb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBR0EsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDakIsUUFBTUEsTUFBTSxHQUFHQyx3REFBTSxDQUFDQyxNQUFPOzs7O3NCQUE3QjtBQU1BLFNBQU8sTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMERBQVA7QUFDSCxDQVJEOztBQVVlRixxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0Zvb3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBGb290ZXIgPSBzdHlsZWQuZm9vdGVyYFxuICAgIHdpZHRoOjEwMCU7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIHBsYWNlLWl0ZW1zOmNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOndoaXRlO2BcblxuICAgIHJldHVybiA8Rm9vdGVyPkNvcHlyaWdodCAyMDIwLiBEZXNpZ25lZCBhbmQgRGV2ZWxvcGVkIGJ5IElyZW5lIEsuPC9Gb290ZXI+XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Footer.js\n");

/***/ }),

/***/ "./src/components/Head.js":
/*!********************************!*\
  !*** ./src/components/Head.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/Head.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst MetaHead = () => {\n  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 12\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, \" Jobify: Dev job search platform\"), __jsx(\"meta\", {\n    property: \"og:title\",\n    content: \"Jobify: Find your dream developer job\",\n    key: \"ogTitle\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:site_name\",\n    content: \"Jobify: Find your dream developer job\",\n    key: \"ogSiteName\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"Find your dream developer job in here, we offer job search specialised in developer, remote, paid relocation opportunities!\",\n    key: \"description\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: \"Find your dream developer job in here, we offer job search specialised in developer, remote, paid relocation opportunities!\",\n    key: \"ogDescription\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:image\",\n    content: \"\",\n    key: \"ogImage\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=Monofett&display=swap\",\n    rel: \"stylesheet\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MetaHead);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkLmpzPzkzNjIiXSwibmFtZXMiOlsiTWV0YUhlYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFDbkIsU0FBTyxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQURHLEVBRUg7QUFBTSxZQUFRLEVBQUMsVUFBZjtBQUEwQixXQUFPLEVBQUMsdUNBQWxDO0FBQTBFLE9BQUcsRUFBQyxTQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkcsRUFHSDtBQUFNLFlBQVEsRUFBQyxjQUFmO0FBQThCLFdBQU8sRUFBQyx1Q0FBdEM7QUFBOEUsT0FBRyxFQUFDLFlBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRyxFQUlIO0FBQ0ksUUFBSSxFQUFDLGFBRFQ7QUFFSSxXQUFPLEVBQUMsNkhBRlo7QUFHSSxPQUFHLEVBQUMsYUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkcsRUFTSDtBQUNJLFlBQVEsRUFBQyxnQkFEYjtBQUVJLFdBQU8sRUFBQyw2SEFGWjtBQUdJLE9BQUcsRUFBQyxlQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURyxFQWNIO0FBQU0sWUFBUSxFQUFDLFVBQWY7QUFBMEIsV0FBTyxFQUFDLEVBQWxDO0FBQXFDLE9BQUcsRUFBQyxTQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEcsRUFlSDtBQUFNLFFBQUksRUFBQyxnRUFBWDtBQUE0RSxPQUFHLEVBQUMsWUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZHLENBQVA7QUFpQkgsQ0FsQkQ7O0FBb0JlQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hlYWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBNZXRhSGVhZCA9ICgpID0+IHtcbiAgICByZXR1cm4gPEhlYWQ+XG4gICAgICAgIDx0aXRsZT4gSm9iaWZ5OiBEZXYgam9iIHNlYXJjaCBwbGF0Zm9ybTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzp0aXRsZScgY29udGVudD0nSm9iaWZ5OiBGaW5kIHlvdXIgZHJlYW0gZGV2ZWxvcGVyIGpvYicga2V5PSdvZ1RpdGxlJyAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyBjb250ZW50PSdKb2JpZnk6IEZpbmQgeW91ciBkcmVhbSBkZXZlbG9wZXIgam9iJyBrZXk9J29nU2l0ZU5hbWUnIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgIGNvbnRlbnQ9J0ZpbmQgeW91ciBkcmVhbSBkZXZlbG9wZXIgam9iIGluIGhlcmUsIHdlIG9mZmVyIGpvYiBzZWFyY2ggc3BlY2lhbGlzZWQgaW4gZGV2ZWxvcGVyLCByZW1vdGUsIHBhaWQgcmVsb2NhdGlvbiBvcHBvcnR1bml0aWVzISdcbiAgICAgICAgICAgIGtleT0nZGVzY3JpcHRpb24nXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgICBwcm9wZXJ0eT0nb2c6ZGVzY3JpcHRpb24nXG4gICAgICAgICAgICBjb250ZW50PSdGaW5kIHlvdXIgZHJlYW0gZGV2ZWxvcGVyIGpvYiBpbiBoZXJlLCB3ZSBvZmZlciBqb2Igc2VhcmNoIHNwZWNpYWxpc2VkIGluIGRldmVsb3BlciwgcmVtb3RlLCBwYWlkIHJlbG9jYXRpb24gb3Bwb3J0dW5pdGllcyEnXG4gICAgICAgICAgICBrZXk9J29nRGVzY3JpcHRpb24nXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZScgY29udGVudD0nJyBrZXk9J29nSW1hZ2UnIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbm9mZXR0JmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG4gICAgPC9IZWFkPlxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXRhSGVhZDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Head.js\n");

/***/ }),

/***/ "./src/components/JobCard.js":
/*!***********************************!*\
  !*** ./src/components/JobCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst JobCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\nbackground: #fff;\nbox-shadow: 5px 5px 20px rgba(0,0,0,0.05);\nborder-radius: 24px;\nmin-height:200px;\nmax-width:350px;\nplace-items:center;`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JobCard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Kb2JDYXJkLmpzP2YyNzgiXSwibmFtZXMiOlsiSm9iQ2FyZCIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7Ozs7OztvQkFBM0I7QUFRZUYsc0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Kb2JDYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEpvYkNhcmQgPSBzdHlsZWQuZGl2YFxuYmFja2dyb3VuZDogI2ZmZjtcbmJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsMCwwLDAuMDUpO1xuYm9yZGVyLXJhZGl1czogMjRweDtcbm1pbi1oZWlnaHQ6MjAwcHg7XG5tYXgtd2lkdGg6MzUwcHg7XG5wbGFjZS1pdGVtczpjZW50ZXI7YFxuXG5leHBvcnQgZGVmYXVsdCBKb2JDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/JobCard.js\n");

/***/ }),

/***/ "./src/components/Logo.js":
/*!********************************!*\
  !*** ./src/components/Logo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/Logo.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Logo = () => {\n  const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`\n    font-family: 'Monofett', cursive;\n    font-size:36px;\n    text-align:center;\n    color: var(--primary);\n    `;\n  return __jsx(Logo, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 12\n    }\n  }, \"Jobify\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dvLmpzPzE3YjAiXSwibmFtZXMiOlsiTG9nbyIsInN0eWxlZCIsInNwYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFDZixRQUFNQSxJQUFJLEdBQUdDLHdEQUFNLENBQUNDLElBQUs7Ozs7O0tBQXpCO0FBTUEsU0FBTyxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBR0gsQ0FWRDs7QUFZZUYsbUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2dvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IExvZ28gPSAoKSA9PiB7XG4gICAgY29uc3QgTG9nbyA9IHN0eWxlZC5zcGFuYFxuICAgIGZvbnQtZmFtaWx5OiAnTW9ub2ZldHQnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTozNnB4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBgXG4gICAgcmV0dXJuIDxMb2dvPlxuICAgICAgICBKb2JpZnlcbiAgICA8L0xvZ28+XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ28iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Logo.js\n");

/***/ }),

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _JobCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JobCard */ \"./src/components/JobCard.js\");\nvar _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/Main.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // import axios from 'axios';\n\nconst Main = ({\n  jobs,\n  loading,\n  error\n}) => {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    console.log(jobs);\n  }, [loading]);\n  const MainSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main`\n    width:100%;\n    height:100%;\n    display:grid;\n    place-items:center;`;\n  const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n    width:90%;\n    padding: 100px 50px;\n    display: grid;\n    grid-gap: 2rem;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));`;\n  return __jsx(MainSection, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 12\n    }\n  }, __jsx(Container, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, loading ? __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 24\n    }\n  }, \" Loading ...\") : jobs.map(job => __jsx(_JobCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    key: job.id,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 34\n    }\n  }, job.title))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluLmpzPzc4MmUiXSwibmFtZXMiOlsiTWFpbiIsImpvYnMiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiTWFpblNlY3Rpb24iLCJzdHlsZWQiLCJtYWluIiwiQ29udGFpbmVyIiwiZGl2IiwibWFwIiwiam9iIiwiaWQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBSUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQyxTQUFSO0FBQWlCQztBQUFqQixDQUFELEtBQThCO0FBQ3ZDQyx5REFBUyxDQUFDLE1BQU07QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVlMLElBQVo7QUFFSCxHQUhRLEVBR04sQ0FBQ0MsT0FBRCxDQUhNLENBQVQ7QUFJQSxRQUFNSyxXQUFXLEdBQUdDLHdEQUFNLENBQUNDLElBQUs7Ozs7d0JBQWhDO0FBS0EsUUFBTUMsU0FBUyxHQUFHRix3REFBTSxDQUFDRyxHQUFJOzs7OztpRUFBN0I7QUFNQSxTQUFPLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0gsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1QsT0FBTyxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQUgsR0FDSkQsSUFBSSxDQUFDVyxHQUFMLENBQVNDLEdBQUcsSUFBSyxNQUFDLGdEQUFEO0FBQVMsT0FBRyxFQUFFQSxHQUFHLENBQUNDLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUJELEdBQUcsQ0FBQ0UsS0FBM0IsQ0FBakIsQ0FGUixDQURHLENBQVA7QUFPSCxDQXZCRDs7QUF5QmVmLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgSm9iQ2FyZCBmcm9tICcuL0pvYkNhcmQnO1xuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5cbmNvbnN0IE1haW4gPSAoeyBqb2JzLCBsb2FkaW5nLCBlcnJvciB9KSA9PiB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coam9icylcblxuICAgIH0sIFtsb2FkaW5nXSlcbiAgICBjb25zdCBNYWluU2VjdGlvbiA9IHN0eWxlZC5tYWluYFxuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIHBsYWNlLWl0ZW1zOmNlbnRlcjtgXG4gICAgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDo5MCU7XG4gICAgcGFkZGluZzogMTAwcHggNTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAycmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO2BcbiAgICByZXR1cm4gPE1haW5TZWN0aW9uPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAge2xvYWRpbmcgPyA8aDI+IExvYWRpbmcgLi4uPC9oMj4gOlxuICAgICAgICAgICAgICAgIGpvYnMubWFwKGpvYiA9PiAoPEpvYkNhcmQga2V5PXtqb2IuaWR9Pntqb2IudGl0bGV9PC9Kb2JDYXJkPikpfVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L01haW5TZWN0aW9uPlxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Main.js\n");

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBar */ \"./src/components/SearchBar.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ \"./src/components/User.js\");\nvar _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/NavBar.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst NavBar = () => {\n  const Nav = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav`\n    display:grid;\n    grid-template-columns: 100px 1fr 100px;\n    place-items:center;\n    top:0;\nleft:0;\npadding: 0 60px;\nwidth:100vw;\n    position:fixed;\n    box-shadow: 5px 5px 10px rgba(0,0,0,0.05);\n    height: 60px;\n    background: white;`;\n  return __jsx(Nav, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 12\n    }\n  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }), __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }), __jsx(_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanM/MWEyZiJdLCJuYW1lcyI6WyJOYXZCYXIiLCJOYXYiLCJzdHlsZWQiLCJuYXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDakIsUUFBTUMsR0FBRyxHQUFHQyx3REFBTSxDQUFDQyxHQUFJOzs7Ozs7Ozs7Ozt1QkFBdkI7QUFZQSxTQUFPLE1BQUMsR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0gsTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREcsRUFFSCxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRyxFQUdILE1BQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhHLENBQVA7QUFNSCxDQW5CRDs7QUFxQmVILHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBMb2dvIGZyb20gJy4vTG9nbyc7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vU2VhcmNoQmFyJztcbmltcG9ydCBVc2VyIGZyb20gJy4vVXNlcidcblxuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgTmF2ID0gc3R5bGVkLm5hdmBcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxZnIgMTAwcHg7XG4gICAgcGxhY2UtaXRlbXM6Y2VudGVyO1xuICAgIHRvcDowO1xubGVmdDowO1xucGFkZGluZzogMCA2MHB4O1xud2lkdGg6MTAwdnc7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO2BcbiAgICByZXR1cm4gPE5hdj5cbiAgICAgICAgPExvZ28gLz5cbiAgICAgICAgPFNlYXJjaEJhciAvPlxuICAgICAgICA8VXNlciAvPlxuICAgIDwvTmF2PlxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n");

/***/ }),

/***/ "./src/components/SearchBar.js":
/*!*************************************!*\
  !*** ./src/components/SearchBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/SearchBar.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst SearchBar = () => {\n  const Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input`\n    outline: none;\n    height:28px;\n    line-height: 28px;\n    padding: 0 8px;\n    border-radius: 4px;\n    font-size: inherit;\n    font-family:inherit;\n    border: 1px solid var(--lightText);\n    margin: 0 10px;\n    width: 200px;\n    \n    &:focus{\n        border: 1px solid var(--primary);\n    }\n    `;\n  const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`\n    background: var(--primary);\n    color: white;\n    font-size:inherit;\n    font-family:inherit;\n    font-weight:500;\n    outline:none;\n    border:none;\n    height: 28px;\n    line-height:28px;\n    padding: 0 28px;\n    border-radius: 12px;\n    \n    &:hover{\n        filter: brightness(1.1);\n    }`;\n  return __jsx(\"form\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(Input, {\n    type: \"text\",\n    placeholder: \"Start searching\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }), __jsx(Input, {\n    type: \"text\",\n    placeholder: \"Location, City, Country\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }), __jsx(Button, {\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, \"Search\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIuanM/ZGU2MyJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJJbnB1dCIsInN0eWxlZCIsImlucHV0IiwiQnV0dG9uIiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFNBQVMsR0FBRyxNQUFNO0FBRXBCLFFBQU1DLEtBQUssR0FBR0Msd0RBQU0sQ0FBQ0MsS0FBTTs7Ozs7Ozs7Ozs7Ozs7O0tBQTNCO0FBaUJBLFFBQU1DLE1BQU0sR0FBR0Ysd0RBQU0sQ0FBQ0csTUFBTzs7Ozs7Ozs7Ozs7Ozs7O01BQTdCO0FBaUJBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsS0FBRDtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGVBQVcsRUFBQyxpQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxLQUFEO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsZUFBVyxFQUFDLHlCQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSSxNQUFDLE1BQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosQ0FESjtBQU1ILENBMUNEOztBQTRDZUwsd0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgU2VhcmNoQmFyID0gKCkgPT4ge1xuXG4gICAgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBoZWlnaHQ6MjhweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBwYWRkaW5nOiAwIDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGZvbnQtZmFtaWx5OmluaGVyaXQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHRUZXh0KTtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgXG4gICAgJjpmb2N1c3tcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gICAgfVxuICAgIGBcblxuICAgIGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTppbmhlcml0O1xuICAgIGZvbnQtZmFtaWx5OmluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6NTAwO1xuICAgIG91dGxpbmU6bm9uZTtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6MjhweDtcbiAgICBwYWRkaW5nOiAwIDI4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBcbiAgICAmOmhvdmVye1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcbiAgICB9YFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlN0YXJ0IHNlYXJjaGluZ1wiIC8+XG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkxvY2F0aW9uLCBDaXR5LCBDb3VudHJ5XCIgLz5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlYXJjaDwvQnV0dG9uPlxuICAgICAgICA8L2Zvcm0+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SearchBar.js\n");

/***/ }),

/***/ "./src/components/User.js":
/*!********************************!*\
  !*** ./src/components/User.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/User.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst User = () => {\n  return __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 13\n    }\n  }, \" User\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2VyLmpzP2ExZjgiXSwibmFtZXMiOlsiVXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUNmLFNBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFSO0FBQ0gsQ0FGRDs7QUFJZUEsbUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Vc2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgVXNlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKDxwPiBVc2VyPC9wPilcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/User.js\n");

/***/ }),

/***/ "./src/layout/Layout.js":
/*!******************************!*\
  !*** ./src/layout/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Layout = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\ndisplay:grid;\nmin-height: 100vh;\nwidth:100vw;\ngrid-template-rows: 1fr 60px`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L0xheW91dC5qcz9lNzBmIl0sIm5hbWVzIjpbIkxheW91dCIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7Ozs7NkJBQTFCO0FBTWVGLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2xheW91dC9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgTGF5b3V0ID0gc3R5bGVkLmRpdmBcbmRpc3BsYXk6Z3JpZDtcbm1pbi1oZWlnaHQ6IDEwMHZoO1xud2lkdGg6MTAwdnc7XG5ncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2MHB4YFxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layout/Layout.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/irenechow/Desktop/job-board/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });