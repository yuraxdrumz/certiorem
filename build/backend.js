require("source-map-support").install();
module.exports =
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
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var main = Object(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* createObservable */])();
var observer = Object(__WEBPACK_IMPORTED_MODULE_0__index__["b" /* createObserver */])('listener1', main);
observer.subscribe('go', function (data) {
  console.log(data);
});
var extend = Object(__WEBPACK_IMPORTED_MODULE_0__index__["c" /* decorateObservable */])(main, false);

var Car = extend(_class = function () {
  function Car(wheels) {
    _classCallCheck(this, Car);

    this.wheels = wheels;
  }

  _createClass(Car, [{
    key: 'go',
    value: function go() {
      console.log('going');
    }
  }, {
    key: 'stop',
    value: function stop() {
      console.log('stopping');
    }
  }]);

  return Car;
}()) || _class;

var Truck = extend(_class2 = function Truck(wheels) {
  _classCallCheck(this, Truck);
}) || _class2;

var car = new Car(4);
var truck = new Truck(6);
var observer2 = Object(__WEBPACK_IMPORTED_MODULE_0__index__["b" /* createObserver */])('tr listener', truck);
var observer3 = Object(__WEBPACK_IMPORTED_MODULE_0__index__["b" /* createObserver */])('truck listener', truck);
observer2.subscribe('go', function (data) {
  console.log(data);
});
observer3.subscribe('go', function (data) {
  console.log(data);
});
// car.emit('go', 'car going')
truck.emit('go', 'truck started driving');
// truck.go()

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return decorateObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__observer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable__ = __webpack_require__(4);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




// creates a new observable
function createObservable() {
  return new __WEBPACK_IMPORTED_MODULE_1__observable__["a" /* default */]();
}

// creates a new observer
function createObserver(name, parent) {
  return new __WEBPACK_IMPORTED_MODULE_0__observer__["a" /* default */](name, parent);
}

// TODO make tests...
// TODO test decorator and rewrite for better understanding and use cases
function decorateObservable(parentObservable) {
  var passListeners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  // if class, then type is func, if instance, type is object
  // if class and parent observable has listeners on it, pass them to child
  var listenersToPass = void 0;
  if (typeof parentObservable === 'function') {
    listenersToPass = parentObservable.prototype.listeners || {};
  } else if ((typeof parentObservable === 'undefined' ? 'undefined' : _typeof(parentObservable)) === 'object') {
    var fn = function fn() {};

    listenersToPass = Object.create(parentObservable.listeners);

    fn.prototype = parentObservable.__proto__;
    parentObservable = fn;
  }
  // handle merging prototypes of created class with decorated class and pass listeners from parent if flag === true
  return function (ObservableClass) {
    var passedClassMethods = Object.getOwnPropertyNames(ObservableClass.prototype).slice(1);

    var Observabled = function (_parentObservable) {
      _inherits(Observabled, _parentObservable);

      function Observabled() {
        _classCallCheck(this, Observabled);

        var _this = _possibleConstructorReturn(this, (Observabled.__proto__ || Object.getPrototypeOf(Observabled)).call(this));

        _this.listeners = passListeners ? listenersToPass : {};
        return _this;
      }

      return Observabled;
    }(parentObservable);

    Observabled.prototype.listeners = listenersToPass;
    passedClassMethods.forEach(function (method) {
      return Observabled.prototype[method] = ObservableClass.prototype[method];
    });
    return Observabled;
  };
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Observer; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// observer class
var Observer = function () {
  function Observer(name, parentEmitter) {
    _classCallCheck(this, Observer);

    this.name = name;
    this.parentEmitter = parentEmitter;
  }
  // remove listener on a specific event, this.name is passed an will be compared to fn.name which is set on subscription


  _createClass(Observer, [{
    key: 'unsubscribe',
    value: function unsubscribe(label) {
      this.parentEmitter.removeListener(label, this.name);
    }
    // add a listener on a specific event, add this.name on fn.name

  }, {
    key: 'subscribe',
    value: function subscribe(label, fn) {
      // TODO check if arrow func and replace for regular func in order to have bind this with name and parent emitter...
      Object.defineProperty(fn, 'name', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: this.name
      });
      // bind fn to this
      this.parentEmitter.addListener(label, fn.bind(this));
    }
    // emit change to parent

  }, {
    key: 'emit',
    value: function emit(label) {
      var _parentEmitter;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_parentEmitter = this.parentEmitter).childNotify.apply(_parentEmitter, [label].concat(args));
    }
  }]);

  return Observer;
}();



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Observable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_events__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



// observable class

var Observable = function (_EventEmitter) {
  _inherits(Observable, _EventEmitter);

  function Observable() {
    _classCallCheck(this, Observable);

    // all listeners
    var _this = _possibleConstructorReturn(this, (Observable.__proto__ || Object.getPrototypeOf(Observable)).call(this));

    _this.listeners = {};
    return _this;
  }
  // adding the event name as key and all listeners as an array value


  _createClass(Observable, [{
    key: 'addListener',
    value: function addListener(label, callback) {
      if (!this.listeners[label]) this.listeners[label] = [];
      this.listeners[label].push(callback);
    }
    // remove listener by observer name, when adding a listener, fn.name is added the observer name for easier removal

  }, {
    key: 'removeListener',
    value: function removeListener(label, observerName) {
      var listeners = this.listeners;
      var index = null;
      if (listeners[label] && listeners[label].length) {
        for (var i = 0, len = listeners[label].length; i < len; i++) {
          if (listeners[label][i].name.includes(observerName)) {
            index = i;
            break;
          }
        }
        if (index !== null) {
          listeners[label] = listeners[label].filter(function (fn) {
            return fn !== listeners[label][index];
          });
        }
      }
    }
    // emit to all observers subscribed to specific event, call all fns and pass args to them

  }, {
    key: 'emit',
    value: function emit(label) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var listeners = this.listeners[label];
      if (listeners && listeners.length) {
        listeners.forEach(function (listener) {
          return listener.apply(undefined, args);
        });
        return true;
      }
      return false;
    }
    // when a listener emits a change, notify all children

  }, {
    key: 'childNotify',
    value: function childNotify(label) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      // same as emit but fired from child to notify parent that notifies all children
      return this.emit.apply(this, [label].concat(args));
    }
  }]);

  return Observable;
}(__WEBPACK_IMPORTED_MODULE_0_events___default.a);



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ })
/******/ ]);
//# sourceMappingURL=backend.js.map