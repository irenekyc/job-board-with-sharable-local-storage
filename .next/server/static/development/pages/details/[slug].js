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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/JobDetails/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst JobDetailsPage = ({\n  id,\n  data\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (id) {\n      const history = JSON.parse(localStorage.getItem('broswedJob') || '[]');\n      const updatedHistory = history.concat(id);\n      localStorage.setItem('broswedJob', JSON.stringify(updatedHistory));\n    }\n  }, [id]);\n\n  const calculateTime = createdAt => {\n    const now = new Date();\n    const difference = now - new Date(createdAt);\n    return Math.ceil(difference / 1000 / 60 / 60 / 24);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 12\n    }\n  }, data ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 18\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  }, \"  \", data.title, \" - Jobify\"), __jsx(\"meta\", {\n    property: \"og:title\",\n    content: data.title,\n    key: \"ogTitle\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:site_name\",\n    content: \"Jobify: Find your dream developer job\",\n    key: \"ogSiteName\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: `${data.company} is looking for ${data.title}`,\n    key: \"description\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: `${data.company} is looking for ${data.title}`,\n    key: \"ogDescription\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 17\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=Monofett&display=swap\",\n    rel: \"stylesheet\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"job-page-container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"job-page-header\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 17\n    }\n  }, data.title), __jsx(\"div\", {\n    className: \"job-page-main\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"job-page-share\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 21\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 25\n    }\n  }, \" Share to your friends:  \", __jsx(\"a\", {\n    href: `https://api.whatsapp.com/send?text=Checkout this job: ${data.title} here: ${data.url}`,\n    target: \"_blank\",\n    \"data-action\": \"share/whatsapp/share\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 53\n    }\n  }, __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 202\n    }\n  }, \" \", __jsx(\"i\", {\n    className: \"fab fa-whatsapp\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 209\n    }\n  })), \" \"), __jsx(\"a\", {\n    href: `https://www.linkedin.com/shareArticle?mini=true&url=https://jobify-peach.vercel.app/details/${id}&title=${data.company}+is+Looking+for${data.title}source=jobify-peach.vercel.app`,\n    target: \"_blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 29\n    }\n  }, \" \", __jsx(\"i\", {\n    className: \"fab fa-linkedin\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 236\n    }\n  })), __jsx(\"a\", {\n    href: `mailto:?&subject=${data.company}%20is%20looking%20for%20${data.title}&body=Check%20this%20out%20\\nhttps://jobify-peach.vercel.app/details/${id}&title=${data.company}+is+Looking+for${data.title}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 29\n    }\n  }, \" \", __jsx(\"i\", {\n    className: \"fas fa-envelope\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 236\n    }\n  })))), __jsx(\"div\", {\n    className: \"job-page-details\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"job-company-logo\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 25\n    }\n  }, __jsx(\"img\", {\n    src: data.company_logo,\n    alt: data.company,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 29\n    }\n  })), __jsx(\"p\", {\n    className: \"description-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 25\n    }\n  }, \" \", data.company), __jsx(\"p\", {\n    className: \"secondary-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 25\n    }\n  }, \" Location: \", data.location), __jsx(\"p\", {\n    className: \"secondary-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 25\n    }\n  }, \" Post at \", calculateTime(data.created_at), \" day(s) ago \"), __jsx(\"div\", {\n    className: \"description-box description-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 25\n    }\n  }, \"Description: \", __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    source: data.description,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 42\n    }\n  }))), __jsx(\"div\", {\n    className: \"job-page-apply\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 21\n    }\n  }, __jsx(\"h3\", {\n    className: \"primary-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 25\n    }\n  }, \" How to Apply\"), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    source: data.how_to_apply,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 25\n    }\n  }))))) : __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 25\n    }\n  }, \"Loading...\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (JobDetailsPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Kb2JEZXRhaWxzL2luZGV4LmpzP2UzNzQiXSwibmFtZXMiOlsiSm9iRGV0YWlsc1BhZ2UiLCJpZCIsImRhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJoaXN0b3J5IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVwZGF0ZWRIaXN0b3J5IiwiY29uY2F0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNhbGN1bGF0ZVRpbWUiLCJjcmVhdGVkQXQiLCJub3ciLCJEYXRlIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJjZWlsIiwidGl0bGUiLCJjb21wYW55IiwidXJsIiwiY29tcGFueV9sb2dvIiwibG9jYXRpb24iLCJjcmVhdGVkX2F0IiwiZGVzY3JpcHRpb24iLCJob3dfdG9fYXBwbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGNBQWMsR0FBRyxDQUFDO0FBQUVDLElBQUY7QUFBTUM7QUFBTixDQUFELEtBQWtCO0FBQ3JDLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ1osUUFBSUosRUFBSixFQUFRO0FBQ0osWUFBTUssT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFlBQXJCLEtBQXNDLElBQWpELENBQWhCO0FBQ0EsWUFBTUMsY0FBYyxHQUFHTCxPQUFPLENBQUNNLE1BQVIsQ0FBZVgsRUFBZixDQUF2QjtBQUNBUSxrQkFBWSxDQUFDSSxPQUFiLENBQXFCLFlBQXJCLEVBQW1DTixJQUFJLENBQUNPLFNBQUwsQ0FBZUgsY0FBZixDQUFuQztBQUVIO0FBR0osR0FUUSxFQVNOLENBQUNWLEVBQUQsQ0FUTSxDQUFUOztBQVVBLFFBQU1jLGFBQWEsR0FBSUMsU0FBRCxJQUFlO0FBQ2pDLFVBQU1DLEdB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDaUIsTUFBQyxxREFBRDtBQUFlLFVBQU0sRUFBRXpCLElBQUksQ0FBQzBCLFdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEakIsQ0FQSixDQVBKLEVBa0JJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosRUFFSSxNQUFDLHFEQUFEO0FBQWUsVUFBTSxFQUFFMUIsSUFBSSxDQUFDMkIsWUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBbEJKLENBSkosQ0FsQkssQ0FBSixHQStDVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWhEYixDQUFQO0FBa0RILENBdEVEOztBQXVFZTdCLDZFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSm9iRGV0YWlscy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBKb2JEZXRhaWxzUGFnZSA9ICh7IGlkLCBkYXRhIH0pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICBjb25zdCBoaXN0b3J5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYnJvc3dlZEpvYicpIHx8ICdbXScpO1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEhpc3RvcnkgPSBoaXN0b3J5LmNvbmNhdChpZCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYnJvc3dlZEpvYicsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRIaXN0b3J5KSlcblxuICAgICAgICB9XG5cblxuICAgIH0sIFtpZF0pXG4gICAgY29uc3QgY2FsY3VsYXRlVGltZSA9IChjcmVhdGVkQXQpID0+IHtcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxuICAgICAgICBjb25zdCBkaWZmZXJlbmNlID0gbm93IC0gbmV3IERhdGUoY3JlYXRlZEF0KVxuICAgICAgICByZXR1cm4gKE1hdGguY2VpbChkaWZmZXJlbmNlIC8gMTAwMCAvIDYwIC8gNjAgLyAyNCkpXG5cbiAgICB9XG5cbiAgICByZXR1cm4gPEZyYWdtZW50PlxuICAgICAgICB7ZGF0YSA/ICg8RnJhZ21lbnQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+ICB7ZGF0YS50aXRsZX0gLSBKb2JpZnk8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzp0aXRsZScgY29udGVudD17ZGF0YS50aXRsZX0ga2V5PSdvZ1RpdGxlJyAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9J0pvYmlmeTogRmluZCB5b3VyIGRyZWFtIGRldmVsb3BlciBqb2InIGtleT0nb2dTaXRlTmFtZScgLz5cbiAgICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17YCR7ZGF0YS5jb21wYW55fSBpcyBsb29raW5nIGZvciAke2RhdGEudGl0bGV9YH1cbiAgICAgICAgICAgICAgICAgICAga2V5PSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17YCR7ZGF0YS5jb21wYW55fSBpcyBsb29raW5nIGZvciAke2RhdGEudGl0bGV9YH1cbiAgICAgICAgICAgICAgICAgICAga2V5PSdvZ0Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgey8qIDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZScgY29udGVudD0nJyBrZXk9J29nSW1hZ2UnIC8+ICovfVxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbm9mZXR0JmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpvYi1wYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iLXBhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iLXBhZ2UtbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpvYi1wYWdlLXNoYXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gU2hhcmUgdG8geW91ciBmcmllbmRzOiAgPGEgaHJlZj17YGh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3RleHQ9Q2hlY2tvdXQgdGhpcyBqb2I6ICR7ZGF0YS50aXRsZX0gaGVyZTogJHtkYXRhLnVybH1gfSB0YXJnZXQ9XCJfYmxhbmtcIiBkYXRhLWFjdGlvbj1cInNoYXJlL3doYXRzYXBwL3NoYXJlXCI+PHNwYW4+IDxpIGNsYXNzTmFtZT1cImZhYiBmYS13aGF0c2FwcFwiPjwvaT48L3NwYW4+IDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9taW5pPXRydWUmdXJsPWh0dHBzOi8vam9iaWZ5LXBlYWNoLnZlcmNlbC5hcHAvZGV0YWlscy8ke2lkfSZ0aXRsZT0ke2RhdGEuY29tcGFueX0raXMrTG9va2luZytmb3Ike2RhdGEudGl0bGV9c291cmNlPWpvYmlmeS1wZWFjaC52ZXJjZWwuYXBwYH0gdGFyZ2V0PVwiX2JsYW5rXCI+IDxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpblwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzo/JnN1YmplY3Q9JHtkYXRhLmNvbXBhbnl9JTIwaXMlMjBsb29raW5nJTIwZm9yJTIwJHtkYXRhLnRpdGxlfSZib2R5PUNoZWNrJTIwdGhpcyUyMG91dCUyMFxcbmh0dHBzOi8vam9iaWZ5LXBlYWNoLnZlcmNlbC5hcHAvZGV0YWlscy8ke2lkfSZ0aXRsZT0ke2RhdGEuY29tcGFueX0raXMrTG9va2luZytmb3Ike2RhdGEudGl0bGV9YH0+IDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lbnZlbG9wZVwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpvYi1wYWdlLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iLWNvbXBhbnktbG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmNvbXBhbnlfbG9nb30gYWx0PXtkYXRhLmNvbXBhbnl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLXRleHRcIj4ge2RhdGEuY29tcGFueX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWNvbmRhcnktdGV4dFwiPiBMb2NhdGlvbjoge2RhdGEubG9jYXRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2Vjb25kYXJ5LXRleHRcIj4gUG9zdCBhdCB7Y2FsY3VsYXRlVGltZShkYXRhLmNyZWF0ZWRfYXQpfSBkYXkocykgYWdvIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tYm94IGRlc2NyaXB0aW9uLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogPFJlYWN0TWFya2Rvd24gc291cmNlPXtkYXRhLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpvYi1wYWdlLWFwcGx5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJpbWFyeS10ZXh0XCI+IEhvdyB0byBBcHBseTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e2RhdGEuaG93X3RvX2FwcGx5fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRnJhZ21lbnQ+KSA6ICg8ZGl2PkxvYWRpbmcuLi48L2Rpdj4pfVxuICAgIDwvRnJhZ21lbnQ+XG59XG5leHBvcnQgZGVmYXVsdCBKb2JEZXRhaWxzUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/JobDetails/index.js\n");

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