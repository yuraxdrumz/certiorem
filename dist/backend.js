module.exports=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){e.exports=require("babel-polyfill")},function(e,t,n){"use strict";function r(){return new u.a}function i(e,t){return new o.a(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"createObservable",function(){return r}),n.d(t,"createObserver",function(){return i});var o=n(3),u=n(4)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t,n){r(this,e),this.name=t,this.parentEmitter=n}return i(e,[{key:"unsubscribe",value:function(e){this.parentEmitter.removeListener(e,this.name)}},{key:"subscribe",value:function(e,t){Object.defineProperty(t,"name",{enumerable:!1,configurable:!0,writable:!0,value:this.name}),this.parentEmitter.addListener(e,t.bind(this))}},{key:"emit",value:function(e){for(var t,n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];(t=this.parentEmitter).childNotify.apply(t,[e].concat(r))}}]),e}();t.a=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(5),a=n.n(u),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.listeners={},e}return o(t,e),c(t,[{key:"addListener",value:function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)}},{key:"removeListener",value:function(e,t){var n=this.listeners,r=null;if(n[e]&&n[e].length){for(var i=0,o=n[e].length;i<o;i++)if(n[e][i].name.includes(t)){r=i;break}null!==r&&(n[e]=n[e].filter(function(t){return t!==n[e][r]}))}}},{key:"emit",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=this.listeners[e];return!(!i||!i.length)&&(i.forEach(function(e){return e.apply(void 0,n)}),!0)}},{key:"childNotify",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return this.emit.apply(this,[e].concat(n))}}]),t}(a.a);t.a=f},function(e,t){e.exports=require("events")}]);