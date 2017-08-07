import createObservable from './observable'
import createObserver from './observer'

export function makeObservable(parent, attachListeners = true){
  return function(Class){
    Object.assign(Class.prototype, createObservable(attachListeners?parent:null))
    return Class
  }
}

export function makeObserver(name, parent){
  return function(Class){
    Object.assign(Class.prototype, createObserver(name, parent))
    return Class
  }
}