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
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _this = this,
    _dec,
    _class,
    _dec2,
    _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Emit = function Emit(_ref) {
  var listeners = _ref.listeners;
  return {
    emit: function emit(label) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      listeners = listeners[label];
      if (listeners && listeners.length) {
        listeners.forEach(function (listener) {
          return listener.apply(undefined, args);
        });
        return true;
      }
      return false;
    }
  };
};

var AddListener = function AddListener(_ref2) {
  var listeners = _ref2.listeners;
  return {
    addListener: function addListener(label, callback) {
      if (!listeners[label]) listeners[label] = [];
      listeners[label].push(callback);
    }

  };
};

var RemoveListener = function RemoveListener(_ref3) {
  var listeners = _ref3.listeners;
  return {
    removeListener: function removeListener(label, observerName) {
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

  };
};

var ChildNotify = function ChildNotify(_ref4) {
  var _emit = _ref4.emit;
  return {
    emit: function emit(label) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      // same as emit but fired from child to notify parent that notifies all children
      return _emit.apply(undefined, [label].concat(args));
    }
  };
};

var AttachListeners = function AttachListeners(_ref5) {
  var listeners = _ref5.listeners;
  return {
    listeners: listeners || {}
  };
};

var Unsubscribe = function Unsubscribe(_ref6) {
  var parent = _ref6.parent,
      name = _ref6.name;
  return {
    unsubscribe: function unsubscribe(label) {
      parent.removeListener(label, name);
    }
  };
};

var Subscribe = function Subscribe(_ref7) {
  var parent = _ref7.parent,
      name = _ref7.name;
  return {
    subscribe: function subscribe(label, fn) {
      Object.defineProperty(fn, 'name', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: name
      });
      parent.addListener(label, fn.bind(_this));
    }
  };
};

function createObservable() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var listeners = parent ? parent.listeners : {};
  return Object.assign({}, Emit({ listeners: listeners }), AddListener({ listeners: listeners }), RemoveListener({ listeners: listeners }), AttachListeners({ listeners: listeners }));
}

function createObserver(name, parent) {
  return Object.assign({}, ChildNotify(Emit({ listeners: parent.listeners })), Subscribe({ parent: parent, name: name }), Unsubscribe({ parent: parent, name: name }));
}

function makeObservable(parent) {
  var attachListeners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return function (Class) {
    Object.assign(Class.prototype, createObservable(attachListeners ? parent : null));
    return Class;
  };
}

function makeObserver(name, parent) {
  return function (Class) {
    Object.assign(Class.prototype, createObserver(name, parent));
    return Class;
  };
}

function observe(Class) {
  //TODO write observe on prototype methods
  var methods = Object.getOwnPropertyNames(Class.prototype);
  console.log(Class.prototype[methods[1]].toString());
  console.log(methods);
}

var main = createObservable();
var observer = createObserver('observer1', main);
var observer2 = createObserver('observer2', main);
observer.subscribe('start', function (data) {
  return console.log(data);
});
observer2.subscribe('start', function (data) {
  return console.log(data);
});
// observer.unsubscribe('start')
// main.emit('start', 'awsomeeeee')
// observer.emit('start', 'started in observer')

var Test = (_dec = makeObservable(main), _dec(_class = function Test() {
  _classCallCheck(this, Test);
}) || _class);


var t = new Test();

var observer3 = createObserver('d', t);
observer3.subscribe('start', function (data) {
  return console.log(data);
});
main.emit('start', 'started in main');

var Obs = (_dec2 = makeObserver('dsasd', t), observe(_class2 = _dec2(_class2 = function () {
  function Obs() {
    _classCallCheck(this, Obs);
  }

  _createClass(Obs, [{
    key: 'start',
    value: function start() {
      console.log('started');
    }
  }]);

  return Obs;
}()) || _class2) || _class2);

var obs = new Obs();
obs.subscribe('start', function () {
  return console.log('comes from obssss');
});
t.emit('start', 'started in decorated class');

/***/ })
/******/ ]);
//# sourceMappingURL=backend.js.map