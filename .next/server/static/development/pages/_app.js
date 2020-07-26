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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.css */ \"./styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/store */ \"./src/store/index.js\");\nvar _jsxFileName = \"/Users/irenechow/Desktop/job-board/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    store: _src_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 12\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3BELFNBQU8sTUFBQyxvREFBRDtBQUFVLFNBQUssRUFBRUMsa0RBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSCxNQUFDLFNBQUQsZUFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREcsQ0FBUDtBQUdIIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3JjL3N0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICByZXR1cm4gPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Byb3ZpZGVyPlxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/store/actions/types.js":
/*!************************************!*\
  !*** ./src/store/actions/types.js ***!
  \************************************/
/*! exports provided: SET_JOBRES, FETCHERROR, INIT_NEW_SEARCH, SET_FILTER_OPTIONS, CLEAR_FILTER, SET_PAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_JOBRES\", function() { return SET_JOBRES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCHERROR\", function() { return FETCHERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INIT_NEW_SEARCH\", function() { return INIT_NEW_SEARCH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_FILTER_OPTIONS\", function() { return SET_FILTER_OPTIONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLEAR_FILTER\", function() { return CLEAR_FILTER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_PAGE\", function() { return SET_PAGE; });\nconst SET_JOBRES = 'SET_JOBRES';\nconst FETCHERROR = \"FETCHERROR\";\nconst INIT_NEW_SEARCH = \"INIT_NEW_SEARCH\";\nconst SET_FILTER_OPTIONS = 'SET_FILTER_OPTIONS';\nconst CLEAR_FILTER = \"CLEAR_FILTER\";\nconst SET_PAGE = \"SET_PAGE\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvYWN0aW9ucy90eXBlcy5qcz81ZjhlIl0sIm5hbWVzIjpbIlNFVF9KT0JSRVMiLCJGRVRDSEVSUk9SIiwiSU5JVF9ORVdfU0VBUkNIIiwiU0VUX0ZJTFRFUl9PUFRJT05TIiwiQ0xFQVJfRklMVEVSIiwiU0VUX1BBR0UiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUdBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLFlBQVksR0FBRyxjQUFyQjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxVQUFqQiIsImZpbGUiOiIuL3NyYy9zdG9yZS9hY3Rpb25zL3R5cGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgU0VUX0pPQlJFUyA9ICdTRVRfSk9CUkVTJ1xuZXhwb3J0IGNvbnN0IEZFVENIRVJST1IgPSBcIkZFVENIRVJST1JcIlxuZXhwb3J0IGNvbnN0IElOSVRfTkVXX1NFQVJDSCA9IFwiSU5JVF9ORVdfU0VBUkNIXCJcblxuXG5leHBvcnQgY29uc3QgU0VUX0ZJTFRFUl9PUFRJT05TID0gJ1NFVF9GSUxURVJfT1BUSU9OUydcbmV4cG9ydCBjb25zdCBDTEVBUl9GSUxURVIgPSBcIkNMRUFSX0ZJTFRFUlwiXG5leHBvcnQgY29uc3QgU0VUX1BBR0UgPSBcIlNFVF9QQUdFXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/actions/types.js\n");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ \"./src/store/reducers/index.js\");\n\n\n\n\nconst initialState = {// initialJobs: [],\n  // jobsRes: [],\n  // filter: {\n  //     searchQuery: \"\",\n  //     locationQuery: \"\"\n  // }\n};\nconst middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a];\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(...middleware)));\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanM/NDM2MCJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtaWRkbGV3YXJlIiwidGh1bmsiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTmlCLENBQXJCO0FBU0EsTUFBTUMsVUFBVSxHQUFHLENBQUNDLGtEQUFELENBQW5CO0FBRUEsTUFBTUMsS0FBSyxHQUFHQyx5REFBVyxDQUFDQyxpREFBRCxFQUFjTCxZQUFkLEVBQTRCTSxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHTixVQUFKLENBQWhCLENBQS9DLENBQXpCO0FBRWVFLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3N0b3JlL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHtcbiAgICBjb21wb3NlV2l0aERldlRvb2xzXG59IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgLy8gaW5pdGlhbEpvYnM6IFtdLFxuICAgIC8vIGpvYnNSZXM6IFtdLFxuICAgIC8vIGZpbHRlcjoge1xuICAgIC8vICAgICBzZWFyY2hRdWVyeTogXCJcIixcbiAgICAvLyAgICAgbG9jYXRpb25RdWVyeTogXCJcIlxuICAgIC8vIH1cbn1cblxuY29uc3QgbWlkZGxld2FyZSA9IFt0aHVua11cblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlLCBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSkpXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/index.js\n");

/***/ }),

/***/ "./src/store/reducers/index.js":
/*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _jobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobs */ \"./src/store/reducers/jobs.js\");\n/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query */ \"./src/store/reducers/query.js\");\n\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  jobs: _jobs__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  query: _query__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvaW5kZXguanM/MTVmOCJdLCJuYW1lcyI6WyJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImpvYnMiLCJxdWVyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBLE1BQU1BLFdBQVcsR0FBR0MsNkRBQWUsQ0FBQztBQUNoQ0MscURBRGdDO0FBRWhDQyx1REFBS0E7QUFGMkIsQ0FBRCxDQUFuQztBQU1lSCwwRUFBZiIsImZpbGUiOiIuL3NyYy9zdG9yZS9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGpvYnMgZnJvbSAnLi9qb2JzJ1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknXG5cblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGpvYnMsXG4gICAgcXVlcnlcblxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/reducers/index.js\n");

/***/ }),

/***/ "./src/store/reducers/jobs.js":
/*!************************************!*\
  !*** ./src/store/reducers/jobs.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/store/actions/types.js\");\n\nconst initialState = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (state = initialState, action) {\n  const {\n    type,\n    payload\n  } = action;\n\n  switch (type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_JOBRES\"]:\n      return {\n        newSearchLoading: false,\n        filtered: payload\n      };\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"INIT_NEW_SEARCH\"]:\n      return {\n        filtered: [],\n        newSearchLoading: true\n      };\n\n    default:\n      return state;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvam9icy5qcz9kMDU2Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJTRVRfSk9CUkVTIiwibmV3U2VhcmNoTG9hZGluZyIsImZpbHRlcmVkIiwiSU5JVF9ORVdfU0VBUkNIIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxZQUFZLEdBQUcsRUFBckI7QUFJZSx5RUFBVUMsS0FBSyxHQUFHRCxZQUFsQixFQUFnQ0UsTUFBaEMsRUFBd0M7QUFDbkQsUUFBTTtBQUFFQyxRQUFGO0FBQVFDO0FBQVIsTUFBb0JGLE1BQTFCOztBQUVBLFVBQVFDLElBQVI7QUFDSSxTQUFLRSx5REFBTDtBQUNJLGFBQU87QUFDSEMsd0JBQWdCLEVBQUUsS0FEZjtBQUVIQyxnQkFBUSxFQUFFSDtBQUZQLE9BQVA7O0FBSUosU0FBS0ksOERBQUw7QUFDSSxhQUFPO0FBQ0hELGdCQUFRLEVBQUUsRUFEUDtBQUVIRCx3QkFBZ0IsRUFBRTtBQUZmLE9BQVA7O0FBSUo7QUFDSSxhQUFPTCxLQUFQO0FBWlI7QUFlSCxDIiwiZmlsZSI6Ii4vc3JjL3N0b3JlL3JlZHVjZXJzL2pvYnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTRVRfSk9CUkVTLCBJTklUX05FV19TRUFSQ0ggfSBmcm9tIFwiLi4vYWN0aW9ucy90eXBlc1wiXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBTRVRfSk9CUkVTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuZXdTZWFyY2hMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZDogcGF5bG9hZCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBJTklUX05FV19TRUFSQ0g6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkOiBbXSxcbiAgICAgICAgICAgICAgICBuZXdTZWFyY2hMb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/reducers/jobs.js\n");

/***/ }),

/***/ "./src/store/reducers/query.js":
/*!*************************************!*\
  !*** ./src/store/reducers/query.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/store/actions/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  search: null,\n  location: null,\n  page: 1,\n  filteredSearch: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (state = initialState, action) {\n  const {\n    type,\n    payload\n  } = action;\n\n  switch (type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_FILTER_OPTIONS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        search: payload.search,\n        location: payload.location,\n        filteredSearch: true\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_PAGE\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        page: payload\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"CLEAR_FILTER\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        search: null,\n        location: null,\n        filteredSearch: false\n      });\n\n    default:\n      return state;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvcXVlcnkuanM/MjA4YyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJzZWFyY2giLCJsb2NhdGlvbiIsInBhZ2UiLCJmaWx0ZXJlZFNlYXJjaCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJTRVRfRklMVEVSX09QVElPTlMiLCJTRVRfUEFHRSIsIkNMRUFSX0ZJTFRFUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLFlBQVksR0FBRztBQUNqQkMsUUFBTSxFQUFFLElBRFM7QUFFakJDLFVBQVEsRUFBRSxJQUZPO0FBR2pCQyxNQUFJLEVBQUUsQ0FIVztBQUlqQkMsZ0JBQWMsRUFBRTtBQUpDLENBQXJCO0FBT2UseUVBQVVDLEtBQUssR0FBR0wsWUFBbEIsRUFBZ0NNLE1BQWhDLEVBQXdDO0FBQ25ELFFBQU07QUFBRUMsUUFBRjtBQUFRQztBQUFSLE1BQW9CRixNQUExQjs7QUFFQSxVQUFRQyxJQUFSO0FBQ0ksU0FBS0UsaUVBQUw7QUFDSSw2Q0FDT0osS0FEUDtBQUVJSixjQUFNLEVBQUVPLE9BQU8sQ0FBQ1AsTUFGcEI7QUFHSUMsZ0JBQVEsRUFBRU0sT0FBTyxDQUFDTixRQUh0QjtBQUlJRSxzQkFBYyxFQUFFO0FBSnBCOztBQU1KLFNBQUtNLHVEQUFMO0FBQ0ksNkNBQ09MLEtBRFA7QUFFSUYsWUFBSSxFQUFFSztBQUZWOztBQUlKLFNBQUtHLDJEQUFMO0FBQ0ksNkNBQ09OLEtBRFA7QUFFSUosY0FBTSxFQUFFLElBRlo7QUFHSUMsZ0JBQVEsRUFBRSxJQUhkO0FBSUlFLHNCQUFjLEVBQUU7QUFKcEI7O0FBTUo7QUFDSSxhQUFPQyxLQUFQO0FBckJSO0FBd0JILEMiLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdWNlcnMvcXVlcnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTRVRfRklMVEVSX09QVElPTlMsIENMRUFSX0ZJTFRFUiwgU0VUX1BBR0UgfSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgc2VhcmNoOiBudWxsLFxuICAgIGxvY2F0aW9uOiBudWxsLFxuICAgIHBhZ2U6IDEsXG4gICAgZmlsdGVyZWRTZWFyY2g6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgY29uc3QgeyB0eXBlLCBwYXlsb2FkIH0gPSBhY3Rpb25cblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFNFVF9GSUxURVJfT1BUSU9OUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgc2VhcmNoOiBwYXlsb2FkLnNlYXJjaCxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogcGF5bG9hZC5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZFNlYXJjaDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIFNFVF9QQUdFOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBwYWdlOiBwYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgQ0xFQVJfRklMVEVSOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBzZWFyY2g6IG51bGwsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IG51bGwsXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRTZWFyY2g6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/reducers/query.js\n");

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9tYWluLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/main.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ })

/******/ });