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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Engine/Core/BasicObject.ts":
/*!****************************************!*\
  !*** ./src/Engine/Core/BasicObject.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var BasicObject = /** @class */ (function () {
    function BasicObject() {
    }
    return BasicObject;
}());
exports["default"] = BasicObject;


/***/ }),

/***/ "./src/Engine/Core/Math/Vector2.ts":
/*!*****************************************!*\
  !*** ./src/Engine/Core/Math/Vector2.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        this.x = x;
        this.y = y;
    }
    return Vector2;
}());
exports["default"] = Vector2;


/***/ }),

/***/ "./src/Engine/Rendering/RenderBasics/Renderable.ts":
/*!*********************************************************!*\
  !*** ./src/Engine/Rendering/RenderBasics/Renderable.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var BasicObject_1 = __webpack_require__(/*! ../../Core/BasicObject */ "./src/Engine/Core/BasicObject.ts");
var Renderable = /** @class */ (function (_super) {
    __extends(Renderable, _super);
    function Renderable(pos) {
        var _this = _super.call(this) || this;
        _this.pos = pos;
        return _this;
    }
    Renderable.prototype.update = function (DeltaTime) {
    };
    return Renderable;
}(BasicObject_1["default"]));
exports["default"] = Renderable;


/***/ }),

/***/ "./src/Engine/Rendering/RenderBasics/Square.ts":
/*!*****************************************************!*\
  !*** ./src/Engine/Rendering/RenderBasics/Square.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Renderable_1 = __webpack_require__(/*! ./Renderable */ "./src/Engine/Rendering/RenderBasics/Renderable.ts");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(pos, size, color) {
        var _this = _super.call(this, pos) || this;
        _this.size = size;
        _this.color = color;
        return _this;
    }
    Square.prototype.render = function (context) {
        context.fillStyle = this.color;
        context.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    };
    Square.prototype.init = function () {
        throw new Error("Method not implemented.");
    };
    return Square;
}(Renderable_1["default"]));
exports["default"] = Square;


/***/ }),

/***/ "./src/Engine/Rendering/RenderingEngine.ts":
/*!*************************************************!*\
  !*** ./src/Engine/Rendering/RenderingEngine.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var RenderingEngine = /** @class */ (function () {
    function RenderingEngine(canvas) {
        this.canvas = canvas;
    }
    RenderingEngine.prototype.init = function () {
        this.context = this.canvas.getContext('2d');
        this.clear();
    };
    RenderingEngine.prototype.clear = function () {
        this.context.fillStyle = '#000000';
        this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    };
    RenderingEngine.prototype.render = function (renderble) {
        renderble.render(this.context);
    };
    return RenderingEngine;
}());
exports["default"] = RenderingEngine;


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var RenderingEngine_1 = __webpack_require__(/*! ./Engine/Rendering/RenderingEngine */ "./src/Engine/Rendering/RenderingEngine.ts");
var Square_1 = __webpack_require__(/*! ./Engine/Rendering/RenderBasics/Square */ "./src/Engine/Rendering/RenderBasics/Square.ts");
var Vector2_1 = __webpack_require__(/*! ./Engine/Core/Math/Vector2 */ "./src/Engine/Core/Math/Vector2.ts");
var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var renderer = new RenderingEngine_1["default"](canvas);
renderer.init();
var pos = new Vector2_1["default"](10, 10);
var size = new Vector2_1["default"](100, 100);
var color = "#ffc107";
var s = new Square_1["default"](pos, size, color);
function update() {
    s.pos.x += 10;
    s.pos.y += 5;
}
function render() {
    renderer.clear();
    renderer.render(s);
}
function loop() {
    update();
    render();
    requestAnimationFrame(loop);
}
loop();


/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/app.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/app.ts */"./src/app.ts");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map