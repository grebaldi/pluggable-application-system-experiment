/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! module */ \"module\");\n/* harmony import */ var module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(module__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var plow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! plow-js */ \"plow-js\");\n/* harmony import */ var plow_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(plow_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var provider_lib_something__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! provider/lib/something */ \"provider/lib/something\");\n/* harmony import */ var provider_lib_something__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(provider_lib_something__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst obj = {\n\ttest: 'Hello World'\n};\n\ndocument.write(`<p>I am the consumer. Here's something the provider told me: ${module__WEBPACK_IMPORTED_MODULE_0___default.a}</p>`);\ndocument.write(`<p>Here's another thing the provider told me: ${module__WEBPACK_IMPORTED_MODULE_0__[\"alternative\"]}</p>`);\ndocument.write(`<p>As a consumer, I can use plow-js without bundling it: ${Object(plow_js__WEBPACK_IMPORTED_MODULE_1__[\"$get\"])('test', obj)}</p>`);\ndocument.write(`<p>As a consumer I can read modules deep within dependencies, as lon as they are exposed: ${provider_lib_something__WEBPACK_IMPORTED_MODULE_2___default.a}</p>`);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "module":
/*!************************************************!*\
  !*** external "window['@provider']['module']" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = window['@provider']['module'];\n\n//# sourceURL=webpack:///external_%22window%5B'@provider'%5D%5B'module'%5D%22?");

/***/ }),

/***/ "plow-js":
/*!*************************************************!*\
  !*** external "window['@provider']['plow-js']" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = window['@provider']['plow-js'];\n\n//# sourceURL=webpack:///external_%22window%5B'@provider'%5D%5B'plow-js'%5D%22?");

/***/ }),

/***/ "provider/lib/something":
/*!****************************************************************!*\
  !*** external "window['@provider']['provider/lib/something']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = window['@provider']['provider/lib/something'];\n\n//# sourceURL=webpack:///external_%22window%5B'@provider'%5D%5B'provider/lib/something'%5D%22?");

/***/ })

/******/ });