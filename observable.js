import EventEmitter from 'events'

export default class Observable extends EventEmitter{
  constructor() {
    super()
    this.listeners = {}
  }

  addListener(label, callback) {
    if(this.listeners[label]){
      this.listeners[label].push(callback)
    }else{
      this.listeners[label] = []
      this.listeners[label].push(callback)
    }
  }
  removeListener(label, callback){
    let listeners = this.listeners
    let index = null
    if(listeners[label] && listeners[label].length){
      for(let i = 0, len = listeners[label].length; i < len; i++){
        if(listeners[label][i] === callback){
          index = i
        }
      }
      if(index){
        listeners[label] = listeners[label].filter(fn => fn !== listeners[label][index])
      }
    }
  }
  emit(label, ...args){
    let listeners = this.listeners[label]
    if (listeners && listeners.length) {
      listeners.forEach(listener => listener(...args))
      return true
    }
    return false
  }
  childNotify(label, ...args){
    // same as emit but fired from child to notify parent that notifies all children
    console.log(`${args[0]} notified about change`)
    return this.emit(label, ...args)
  }
}