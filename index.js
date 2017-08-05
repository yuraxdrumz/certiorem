import Observer from './observer'
import Observable from './observable'

// creates a new observable
function createObservable(){
  return new Observable()
}

// creates a new observer
function createObserver(name, parent){
  return new Observer(name, parent)
}

// TODO make tests...
// TODO test decorator and rewrite for better understanding and use cases
function decorateObservable(parentObservable, passListeners = false) {
  // if class, then type is func, if instance, type is object
  // if class and parent observable has listeners on it, pass them to child
  let listenersToPass
  if(typeof parentObservable === 'function'){
    listenersToPass = parentObservable.prototype.listeners || {}
  }else if(typeof parentObservable === 'object'){
    listenersToPass = Object.create(parentObservable.listeners)
    function fn(){}
    fn.prototype = parentObservable.__proto__
    parentObservable = fn
  }
  // handle merging prototypes of created class with decorated class and pass listeners from parent if flag === true
  return function(ObservableClass){
    let passedClassMethods = Object.getOwnPropertyNames(ObservableClass.prototype).slice(1)
    class Observabled extends parentObservable{
      constructor(){
        super()
        this.listeners = passListeners ? listenersToPass : {}
      }
    }
    Observabled.prototype.listeners = listenersToPass
    passedClassMethods.forEach(method=>Observabled.prototype[method] = ObservableClass.prototype[method])
    return Observabled
  }
}

export { createObservable, createObserver, decorateObservable }