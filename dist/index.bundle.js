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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Plugin/Preset files are not allowed to export objects, only functions. In C:\\dev\\OEMPortal\\node_modules\\babel-preset-react\\lib\\index.js\n    at createDescriptor (C:\\dev\\OEMPortal\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:179:11)\n    at C:\\dev\\OEMPortal\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:104:12\n    at Array.map (<anonymous>)\n    at createDescriptors (C:\\dev\\OEMPortal\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:103:27)\n    at createPresetDescriptors (C:\\dev\\OEMPortal\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:95:10)\n    at C:\\dev\\OEMPortal\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:81:14\n    at cachedFunction (C:\\dev\\OEMPortal\\node_modules\\@babel\\core\\lib\\config\\caching.js:40:17)\n    at presets (C:\\dev\\OEMPortal\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:26:68)\n    at mergeChainOpts (C:\\dev\\OEMPortal\\node_modules\\@babel\\core\\lib\\config\\config-chain.js:298:68)\n    at C:\\dev\\OEMPortal\\node_modules\\@babel\\core\\lib\\config\\config-chain.js:251:7\n    at buildRootChain (C:\\dev\\OEMPortal\\node_modules\\@babel\\core\\lib\\config\\config-chain.js:64:27)\n    at loadPrivatePartialConfig (C:\\dev\\OEMPortal\\node_modules\\@babel\\core\\lib\\config\\partial.js:41:53)\n    at Object.loadPartialConfig (C:\\dev\\OEMPortal\\node_modules\\@babel\\core\\lib\\config\\partial.js:66:16)\n    at Object.<anonymous> (C:\\dev\\OEMPortal\\node_modules\\babel-loader\\lib\\index.js:82:26)\n    at Generator.next (<anonymous>)\n    at step (C:\\dev\\OEMPortal\\node_modules\\babel-loader\\lib\\index.js:3:221)\n    at _next (C:\\dev\\OEMPortal\\node_modules\\babel-loader\\lib\\index.js:3:409)\n    at C:\\dev\\OEMPortal\\node_modules\\babel-loader\\lib\\index.js:3:477\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (C:\\dev\\OEMPortal\\node_modules\\babel-loader\\lib\\index.js:3:97)\n    at Object._loader (C:\\dev\\OEMPortal\\node_modules\\babel-loader\\lib\\index.js:148:18)\n    at Object.loader (C:\\dev\\OEMPortal\\node_modules\\babel-loader\\lib\\index.js:36:18)\n    at Object.<anonymous> (C:\\dev\\OEMPortal\\node_modules\\babel-loader\\lib\\index.js:31:12)");

/***/ })
/******/ ]);