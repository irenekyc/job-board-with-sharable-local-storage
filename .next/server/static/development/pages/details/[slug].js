module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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

/***/ "./pages/details/[slug].js":
/*!*********************************!*\
  !*** ./pages/details/[slug].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_JobDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/JobDetails */ \"./src/components/JobDetails/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/irenechow/Desktop/job-board/pages/details/[slug].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Details = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    slug\n  } = router.query;\n  const {\n    0: id,\n    1: setId\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  const {\n    0: jobDetails,\n    1: setJobDeatils\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    setId(slug);\n  }, [slug]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const getJobDetails = async id => {\n      const res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json?markdown=true`);\n      setJobDeatils(res.data);\n      setLoading(false);\n    };\n\n    if (id) {\n      getJobDetails(id);\n    }\n  }, [id]);\n  return __jsx(_src_components_JobDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    id: slug,\n    data: jobDetails,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 12\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Details);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxzL1tzbHVnXS5qcz9kOTg3Il0sIm5hbWVzIjpbIkRldGFpbHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJpZCIsInNldElkIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImpvYkRldGFpbHMiLCJzZXRKb2JEZWF0aWxzIiwidXNlRWZmZWN0IiwiZ2V0Sm9iRGV0YWlscyIsInJlcyIsImF4aW9zIiwiZ2V0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUNsQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVdGLE1BQU0sQ0FBQ0csS0FBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsRUFBRDtBQUFBLE9BQUtDO0FBQUwsTUFBY0Msc0RBQVEsQ0FBQyxJQUFELENBQTVCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRixzREFBUSxDQUFDLElBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJKLHNEQUFRLENBQUMsSUFBRCxDQUE1QztBQUVBSyx5REFBUyxDQUFDLE1BQU07QUFDWk4sU0FBSyxDQUFDSCxJQUFELENBQUw7QUFDSCxHQUZRLEVBRU4sQ0FBQ0EsSUFBRCxDQUZNLENBQVQ7QUFJQVMseURBQVMsQ0FBQyxNQUFNO0FBQ1osVUFBTUMsYUFBYSxHQUFHLE1BQU9SLEVBQVAsSUFBYztBQUNoQyxZQUFNUyxHQUFHLEdBQUcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUFXLHlFQUF3RVgsRUFBRyxxQkFBdEYsQ0FBbEI7QUFDQU0sbUJBQWEsQ0FBQ0csR0FBRyxDQUFDRyxJQUFMLENBQWI7QUFDQVIsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDSCxLQUpEOztBQUtBLFFBQUlKLEVBQUosRUFBUTtBQUNKUSxtQkFBYSxDQUFDUixFQUFELENBQWI7QUFDSDtBQUNKLEdBVFEsRUFTTixDQUFDQSxFQUFELENBVE0sQ0FBVDtBQVVBLFNBQU8sTUFBQyxrRUFBRDtBQUFnQixNQUFFLEVBQUVGLElBQXBCO0FBQTBCLFFBQUksRUFBRU8sVUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0gsQ0F0QkQ7O0FBd0JlVixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2RldGFpbHMvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgSm9iRGV0YWlsc1BhZ2UgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvSm9iRGV0YWlscydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBEZXRhaWxzID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnlcbiAgICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbam9iRGV0YWlscywgc2V0Sm9iRGVhdGlsc10gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0SWQoc2x1ZylcbiAgICB9LCBbc2x1Z10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRKb2JEZXRhaWxzID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vam9icy5naXRodWIuY29tL3Bvc2l0aW9ucy8ke2lkfS5qc29uP21hcmtkb3duPXRydWVgKVxuICAgICAgICAgICAgc2V0Sm9iRGVhdGlscyhyZXMuZGF0YSlcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICBnZXRKb2JEZXRhaWxzKGlkKVxuICAgICAgICB9XG4gICAgfSwgW2lkXSlcbiAgICByZXR1cm4gPEpvYkRldGFpbHNQYWdlIGlkPXtzbHVnfSBkYXRhPXtqb2JEZXRhaWxzfSAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/details/[slug].js\n");

/***/ }),

/***/ "./src/components/JobDetails/index.js":
/*!********************************************!*\
  !*** ./src/components/JobDetails/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/JobDetails/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst JobDetailsPage = ({\n  id,\n  data\n}) => {\n  const {\n    0: url,\n    1: setURL\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (id) {\n      const history = JSON.parse(localStorage.getItem('broswedJob') || '[]');\n      const updatedHistory = history.concat(id);\n      localStorage.setItem('broswedJob', JSON.stringify(updatedHistory));\n      console.log(router);\n    }\n  }, [id]);\n\n  const calculateTime = createdAt => {\n    const now = new Date();\n    const difference = now - new Date(createdAt);\n    return Math.ceil(difference / 1000 / 60 / 60 / 24);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 12\n    }\n  }, data ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 18\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }, \"  \", data.title, \" - Jobify\"), __jsx(\"meta\", {\n    property: \"og:title\",\n    content: data.title,\n    key: \"ogTitle\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:site_name\",\n    content: \"Jobify: Find your dream developer job\",\n    key: \"ogSiteName\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"Find your dream developer job in here, we offer job search specialised in developer, remote, paid relocation opportunities!\",\n    key: \"description\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: \"Find your dream developer job in here, we offer job search specialised in developer, remote, paid relocation opportunities!\",\n    key: \"ogDescription\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:image\",\n    content: \"\",\n    key: \"ogImage\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 17\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=Monofett&display=swap\",\n    rel: \"stylesheet\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"job-page-container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"job-page-header\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  }, data.title), __jsx(\"div\", {\n    className: \"job-page-main\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"job-page-share\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 21\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 25\n    }\n  }, \" Share to your friends:  \", __jsx(\"a\", {\n    href: `https://api.whatsapp.com/send?text=Checkout this job: ${data.title} here: ${data.url}`,\n    target: \"_blank\",\n    \"data-action\": \"share/whatsapp/share\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 53\n    }\n  }, __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 202\n    }\n  }, \" Whatsapp\"), \" \"), __jsx(\"a\", {\n    href: `https://www.linkedin.com/shareArticle?mini=true&url=https://jobify-peach.vercel.app/details/42280cbe-448f-4902-9034-4703c932a3ba&title=${data.company}+is+Looking+for${data.title}`,\n    target: \"_blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 29\n    }\n  }, \" LinkedIn\"))), __jsx(\"div\", {\n    className: \"job-page-details\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"job-company-logo\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 25\n    }\n  }, __jsx(\"img\", {\n    src: data.company_logo,\n    alt: data.company,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 29\n    }\n  })), __jsx(\"p\", {\n    className: \"description-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 25\n    }\n  }, \" \", data.company), __jsx(\"p\", {\n    className: \"secondary-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 25\n    }\n  }, \" Location: \", data.location), __jsx(\"p\", {\n    className: \"secondary-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 25\n    }\n  }, \" Post at \", calculateTime(data.created_at), \" day(s) ago \"), __jsx(\"div\", {\n    className: \"description-box description-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 25\n    }\n  }, \"Description: \", __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    source: data.description,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 42\n    }\n  }))), __jsx(\"div\", {\n    className: \"job-page-apply\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 21\n    }\n  }, __jsx(\"h3\", {\n    className: \"primary-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 25\n    }\n  }, \" How to Apply\"), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    source: data.how_to_apply,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 25\n    }\n  }))))) : __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 25\n    }\n  }, \"Loading...\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (JobDetailsPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Kb2JEZXRhaWxzL2luZGV4LmpzP2UzNzQiXSwibmFtZXMiOlsiSm9iRGV0YWlsc1BhZ2UiLCJpZCIsImRhdGEiLCJ1cmwiLCJzZXRVUkwiLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImhpc3RvcnkiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXBkYXRlZEhpc3RvcnkiLCJjb25jYXQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImNhbGN1bGF0ZVRpbWUiLCJjcmVhdGVkQXQiLCJub3ciLCJEYXRlIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJjZWlsIiwidGl0bGUiLCJjb21wYW55IiwiY29tcGFueV9sb2dvIiwibG9jYXRpb24iLCJjcmVhdGVkX2F0IiwiZGVzY3JpcHRpb24iLCJob3dfdG9fYXBwbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGNBQWMsR0FBRyxDQUFDO0FBQUVDLElBQUY7QUFBTUM7QUFBTixDQUFELEtBQWtCO0FBQ3JDLFFBQU07QUFBQSxPQUFDQyxHQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFnQkMsc0RBQVEsQ0FBQyxJQUFELENBQTlCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDWixRQUFJUCxFQUFKLEVBQVE7QUFDSixZQUFNUSxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsS0FBc0MsSUFBakQsQ0FBaEI7QUFDQSxZQUFNQyxjQUFjLEdBQUdMLE9BQU8sQ0FBQ00sTUFBUixDQUFlZCxFQUFmLENBQXZCO0FBQ0FXLGtCQUFZLENBQUNJLE9BQWIsQ0FBcUIsWUFBckIsRUFBbUNOLElBQUksQ0FBQ08sU0FB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QUFBQSxxQkFESixFQUVJLE1BQUMscURBQUQ7QUFBZSxVQUFNLEVBQUU5QixJQUFJLENBQUMrQixZQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FqQkosQ0FKSixDQWxCSyxDQUFKLEdBOENXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBL0NiLENBQVA7QUFpREgsQ0F2RUQ7O0FBd0VlakMsNkVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Kb2JEZXRhaWxzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBKb2JEZXRhaWxzUGFnZSA9ICh7IGlkLCBkYXRhIH0pID0+IHtcbiAgICBjb25zdCBbdXJsLCBzZXRVUkxdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICBjb25zdCBoaXN0b3J5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYnJvc3dlZEpvYicpIHx8ICdbXScpO1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEhpc3RvcnkgPSBoaXN0b3J5LmNvbmNhdChpZCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYnJvc3dlZEpvYicsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRIaXN0b3J5KSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvdXRlcilcblxuICAgICAgICB9XG5cblxuICAgIH0sIFtpZF0pXG4gICAgY29uc3QgY2FsY3VsYXRlVGltZSA9IChjcmVhdGVkQXQpID0+IHtcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxuICAgICAgICBjb25zdCBkaWZmZXJlbmNlID0gbm93IC0gbmV3IERhdGUoY3JlYXRlZEF0KVxuICAgICAgICByZXR1cm4gKE1hdGguY2VpbChkaWZmZXJlbmNlIC8gMTAwMCAvIDYwIC8gNjAgLyAyNCkpXG5cbiAgICB9XG5cbiAgICByZXR1cm4gPEZyYWdtZW50PlxuICAgICAgICB7ZGF0YSA/ICg8RnJhZ21lbnQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+ICB7ZGF0YS50aXRsZX0gLSBKb2JpZnk8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzp0aXRsZScgY29udGVudD17ZGF0YS50aXRsZX0ga2V5PSdvZ1RpdGxlJyAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9J0pvYmlmeTogRmluZCB5b3VyIGRyZWFtIGRldmVsb3BlciBqb2InIGtleT0nb2dTaXRlTmFtZScgLz5cbiAgICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD0nRmluZCB5b3VyIGRyZWFtIGRldmVsb3BlciBqb2IgaW4gaGVyZSwgd2Ugb2ZmZXIgam9iIHNlYXJjaCBzcGVjaWFsaXNlZCBpbiBkZXZlbG9wZXIsIHJlbW90ZSwgcGFpZCByZWxvY2F0aW9uIG9wcG9ydHVuaXRpZXMhJ1xuICAgICAgICAgICAgICAgICAgICBrZXk9J2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50PSdGaW5kIHlvdXIgZHJlYW0gZGV2ZWxvcGVyIGpvYiBpbiBoZXJlLCB3ZSBvZmZlciBqb2Igc2VhcmNoIHNwZWNpYWxpc2VkIGluIGRldmVsb3BlciwgcmVtb3RlLCBwYWlkIHJlbG9jYXRpb24gb3Bwb3J0dW5pdGllcyEnXG4gICAgICAgICAgICAgICAgICAgIGtleT0nb2dEZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZScgY29udGVudD0nJyBrZXk9J29nSW1hZ2UnIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9ub2ZldHQmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iLXBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2ItcGFnZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2ItcGFnZS1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iLXBhZ2Utc2hhcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBTaGFyZSB0byB5b3VyIGZyaWVuZHM6ICA8YSBocmVmPXtgaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/dGV4dD1DaGVja291dCB0aGlzIGpvYjogJHtkYXRhLnRpdGxlfSBoZXJlOiAke2RhdGEudXJsfWB9IHRhcmdldD1cIl9ibGFua1wiIGRhdGEtYWN0aW9uPVwic2hhcmUvd2hhdHNhcHAvc2hhcmVcIj48c3Bhbj4gV2hhdHNhcHA8L3NwYW4+IDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9taW5pPXRydWUmdXJsPWh0dHBzOi8vam9iaWZ5LXBlYWNoLnZlcmNlbC5hcHAvZGV0YWlscy80MjI4MGNiZS00NDhmLTQ5MDItOTAzNC00NzAzYzkzMmEzYmEmdGl0bGU9JHtkYXRhLmNvbXBhbnl9K2lzK0xvb2tpbmcrZm9yJHtkYXRhLnRpdGxlfWB9IHRhcmdldD1cIl9ibGFua1wiPiBMaW5rZWRJbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iLXBhZ2UtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2ItY29tcGFueS1sb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuY29tcGFueV9sb2dvfSBhbHQ9e2RhdGEuY29tcGFueX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tdGV4dFwiPiB7ZGF0YS5jb21wYW55fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNlY29uZGFyeS10ZXh0XCI+IExvY2F0aW9uOiB7ZGF0YS5sb2NhdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWNvbmRhcnktdGV4dFwiPiBQb3N0IGF0IHtjYWxjdWxhdGVUaW1lKGRhdGEuY3JlYXRlZF9hdCl9IGRheShzKSBhZ28gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1ib3ggZGVzY3JpcHRpb24tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiA8UmVhY3RNYXJrZG93biBzb3VyY2U9e2RhdGEuZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iLXBhZ2UtYXBwbHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcmltYXJ5LXRleHRcIj4gSG93IHRvIEFwcGx5PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17ZGF0YS5ob3dfdG9fYXBwbHl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GcmFnbWVudD4pIDogKDxkaXY+TG9hZGluZy4uLjwvZGl2Pil9XG4gICAgPC9GcmFnbWVudD5cbn1cbmV4cG9ydCBkZWZhdWx0IEpvYkRldGFpbHNQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/JobDetails/index.js\n");

/***/ }),

/***/ 4:
/*!***************************************!*\
  !*** multi ./pages/details/[slug].js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/irenechow/Desktop/job-board/pages/details/[slug].js */"./pages/details/[slug].js");


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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-markdown\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYXJrZG93blwiPzY4YjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtbWFya2Rvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYXJrZG93blwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-markdown\n");

/***/ })

/******/ });