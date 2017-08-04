import EventEmitter from 'events'

// observable class
export default class Observable extends EventEmitter{
  constructor() {
    super()
    // all listeners
    this.listeners = {}
  }
  // adding the event name as key and all listeners as an array value
  addListener(label, callback) {
    if(!this.listeners[label]) this.listeners[label] = []
    this.listeners[label].push(callback)
  }
  // remove listener by observer name, when adding a listener, fn.name is added the observer name for easier removal
  removeListener(label, observerName){
    let listeners = this.listeners
    let index = null
    if(listeners[label] && listeners[label].length){
      for(let i = 0, len = listeners[label].length; i < len; i++){
        if(listeners[label][i].name.includes(observerName)){
          index = i
          break
        }
      }
      if(index !== null){
        listeners[label] = listeners[label].filter(fn => fn !== listeners[label][index])
      }
    }
  }
  // emit to all observers subscribed to specific event, call all fns and pass args to them
  emit(label, ...args){
    let listeners = this.listeners[label]
    if (listeners && listeners.length) {
      listeners.forEach(listener => listener(...args))
      return true
    }
    return false
  }
  // when a listener emits a change, notify all children
  childNotify(label, ...args){
    // same as emit but fired from child to notify parent that notifies all children
    return this.emit(label, ...args)
  }
}