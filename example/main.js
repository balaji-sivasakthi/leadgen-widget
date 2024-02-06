/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/http/http-common.ts":
/*!**************************************!*\
  !*** ./src/core/http/http-common.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpService: () => (/* binding */ HttpService)\n/* harmony export */ });\nvar HttpService = /** @class */ (function () {\n    function HttpService(options) {\n        this.options = options;\n    }\n    HttpService.prototype.postRequest = function (body) {\n        return fetch(this.options.baseUrl, {\n            method: \"POST\",\n            headers: {\n                \"content-Type\": \"application/json\",\n            },\n            body: JSON.stringify(body),\n        });\n    };\n    return HttpService;\n}());\n\n\n\n//# sourceURL=webpack://leadgen-widget/./src/core/http/http-common.ts?");

/***/ }),

/***/ "./src/core/index.ts":
/*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/logger */ \"./src/utils/logger.ts\");\n/* harmony import */ var _ui_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Input */ \"./src/ui/Input/index.ts\");\n/* harmony import */ var _ui_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/Text */ \"./src/ui/Text/index.ts\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/button */ \"./src/ui/button/index.ts\");\n/* harmony import */ var _ui_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/container */ \"./src/ui/container/index.ts\");\n/* harmony import */ var _http_http_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http/http-common */ \"./src/core/http/http-common.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n\n\n\n\nvar CoreWidget = /** @class */ (function () {\n    function CoreWidget(options) {\n        this._root = document.getElementsByTagName(\"body\")[0];\n        this.httpService = new _http_http_common__WEBPACK_IMPORTED_MODULE_6__.HttpService({\n            baseUrl: options === null || options === void 0 ? void 0 : options.callbackUrl,\n        });\n        this.init();\n    }\n    CoreWidget.prototype.init = function () {\n        var _this = this;\n        var errorLabel = new _ui_Text__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n            name: \"\",\n            type: \"p\",\n            className: \"error\",\n        });\n        var email = new _ui_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({ name: \"Email\" });\n        var phone = new _ui_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n            name: \"Mobile\",\n            type: \"text\",\n            maxLength: 10,\n        });\n        phone.handleInputChange(function (event) {\n            var mobileNumber = event.target.value;\n            if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.validateMobile)(mobileNumber) && !!mobileNumber.length) {\n                errorLabel.setText(\"Please enter a valid Mobile Number\");\n            }\n            else {\n                errorLabel.setText(\"\");\n            }\n        });\n        phone.handleOnKeyPress(function (event) {\n            if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.numberOnly)(event))\n                event.preventDefault();\n        });\n        var closeLabel = new _ui_Text__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n            name: \"X\",\n            type: \"span\",\n            className: \"close\",\n        });\n        var closeBox = new _ui_container__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n            attributes: {\n                className: \"close\",\n            },\n            children: [closeLabel.getNode()],\n        });\n        closeBox.getNode().addEventListener(\"click\", function () {\n            container.hide();\n        });\n        var submitButton = new _ui_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({ name: \"Submit\" });\n        var container = new _ui_container__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n            attributes: {\n                className: \"form-container\",\n            },\n            children: [\n                closeBox.getNode(),\n                email.getNode(),\n                phone.getNode(),\n                errorLabel.getNode(),\n                submitButton.getNode(),\n            ],\n        });\n        this._root.appendChild(container.getNode());\n        submitButton.handleClickEvent(function (event) { return __awaiter(_this, void 0, void 0, function () {\n            var response, error_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        return [4 /*yield*/, this.httpService.postRequest({\n                                email: email.getText(),\n                                phone: phone.getText(),\n                            })];\n                    case 1:\n                        response = _a.sent();\n                        _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.d(\"Form Response\", response);\n                        return [3 /*break*/, 3];\n                    case 2:\n                        error_1 = _a.sent();\n                        _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.e(\"[HandleClickEvent]\", error_1);\n                        return [3 /*break*/, 3];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); });\n    };\n    return CoreWidget;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoreWidget);\n\n\n//# sourceURL=webpack://leadgen-widget/./src/core/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LeadGenWidget: () => (/* binding */ LeadGenWidget)\n/* harmony export */ });\n/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/index */ \"./src/core/index.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar LeadGenWidget = /** @class */ (function (_super) {\n    __extends(LeadGenWidget, _super);\n    function LeadGenWidget(options) {\n        return _super.call(this, options) || this;\n    }\n    return LeadGenWidget;\n}(_core_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n\n\n//# sourceURL=webpack://leadgen-widget/./src/index.ts?");

/***/ }),

/***/ "./src/ui/Input/index.ts":
/*!*******************************!*\
  !*** ./src/ui/Input/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar InputField = /** @class */ (function () {\n    function InputField(options) {\n        this.options = options;\n        this._element = document.createElement(\"input\");\n        this._element.type = options.type || \"text\";\n        this._element.maxLength = options.maxLength || 25;\n        this._element.placeholder = options.name;\n    }\n    InputField.prototype.handleInputChange = function (listener) {\n        this._element.addEventListener(\"input\", listener);\n    };\n    InputField.prototype.handleOnKeyPress = function (listener) {\n        this._element.addEventListener(\"keydown\", listener);\n    };\n    InputField.prototype.getText = function () {\n        return this._element.value;\n    };\n    InputField.prototype.getNode = function () {\n        return this._element;\n    };\n    return InputField;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputField);\n\n\n//# sourceURL=webpack://leadgen-widget/./src/ui/Input/index.ts?");

/***/ }),

/***/ "./src/ui/Text/index.ts":
/*!******************************!*\
  !*** ./src/ui/Text/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Text = /** @class */ (function () {\n    function Text(options) {\n        this.options = options;\n        this._element = document.createElement(options.type);\n        this._element.className = options.className;\n        this._element.innerHTML = options.name;\n    }\n    Text.prototype.setText = function (str) {\n        this._element.innerHTML = str;\n    };\n    Text.prototype.getText = function () {\n        return this._element.innerHTML;\n    };\n    Text.prototype.getNode = function () {\n        return this._element;\n    };\n    return Text;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);\n\n\n//# sourceURL=webpack://leadgen-widget/./src/ui/Text/index.ts?");

/***/ }),

/***/ "./src/ui/button/index.ts":
/*!********************************!*\
  !*** ./src/ui/button/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Button = /** @class */ (function () {\n    function Button(options) {\n        this.options = options;\n        this._element = document.createElement(\"button\");\n        this._element.className = options === null || options === void 0 ? void 0 : options.className;\n        this._element.innerHTML = options.name;\n    }\n    Button.prototype.handleClickEvent = function (onClick) {\n        this._element.addEventListener(\"click\", onClick);\n    };\n    Button.prototype.getNode = function () {\n        return this._element;\n    };\n    return Button;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n\n//# sourceURL=webpack://leadgen-widget/./src/ui/button/index.ts?");

/***/ }),

/***/ "./src/ui/container/index.ts":
/*!***********************************!*\
  !*** ./src/ui/container/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Container = /** @class */ (function () {\n    function Container(options) {\n        this.attributes = options.attributes;\n        this.container = document.createElement(options.attributes.type || \"div\");\n        this.container.className = options.attributes.className;\n        this.children = options.children;\n        this.render();\n    }\n    Container.prototype.show = function () {\n        this.container.style.display = \"block\";\n    };\n    Container.prototype.hide = function () {\n        this.container.style.display = \"none\";\n    };\n    Container.prototype.getNode = function () {\n        return this.container;\n    };\n    Container.prototype.render = function () {\n        var _a;\n        (_a = this.container).append.apply(_a, this.children);\n    };\n    return Container;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);\n\n\n//# sourceURL=webpack://leadgen-widget/./src/ui/container/index.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   alphaOnly: () => (/* binding */ alphaOnly),\n/* harmony export */   numberOnly: () => (/* binding */ numberOnly),\n/* harmony export */   parseHtml: () => (/* binding */ parseHtml),\n/* harmony export */   spreadObject: () => (/* binding */ spreadObject),\n/* harmony export */   validateMobile: () => (/* binding */ validateMobile)\n/* harmony export */ });\nfunction parseHtml(str) {\n    var template = document.createElement(\"template\");\n    template.innerHTML = str;\n    return template.content.childNodes;\n}\nfunction spreadObject(options) {\n    return JSON.stringify(options);\n}\n// TODO: need support for other countries.\nfunction validateMobile(str) {\n    var pattern = \"^([0|+[0-9]{1,5})?([7-9][0-9]{9})$\";\n    var obj = new RegExp(pattern);\n    if (obj.test(str)) {\n        return true;\n    }\n    else {\n        return false;\n    }\n}\nfunction alphaOnly(event) {\n    var key = event.keyCode;\n    return (key >= 65 && key <= 90) || key == 8;\n}\nfunction numberOnly(event) {\n    var key = event.keyCode;\n    return (key >= 48 && key <= 57) || key == 8;\n}\n\n\n//# sourceURL=webpack://leadgen-widget/./src/utils/index.ts?");

/***/ }),

/***/ "./src/utils/logger.ts":
/*!*****************************!*\
  !*** ./src/utils/logger.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Logger: () => (/* binding */ Logger)\n/* harmony export */ });\nvar Logger = /** @class */ (function () {\n    function Logger() {\n    }\n    Logger.e = function (tag, message) {\n        console.error(\"[\".concat(tag, \"]\"), message);\n    };\n    Logger.d = function (tag, message) {\n        console.log(\"[\".concat(tag, \"]\"), message);\n    };\n    return Logger;\n}());\n\n\n\n//# sourceURL=webpack://leadgen-widget/./src/utils/logger.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});