// observer class
export default class Observer{
  constructor(name, parentEmitter){
    this.name = name
    this.parentEmitter = parentEmitter
  }
  // remove listener on a specific event, this.name is passed an will be compared to fn.name which is set on subscription
  unsubscribe(label){
    this.parentEmitter.removeListener(label, this.name)
  }
  // add a listener on a specific event, add this.name on fn.name
  subscribe(label, fn){
    Object.defineProperty(fn,'name',{
      enumerable: false,
      configurable: true,
      writable: true,
      value: this.name
    })
    // bind fn to this
    this.parentEmitter.addListener(label, fn.bind(this))
  }
  // emit change to parent
  emit(label, ...args){
    this.parentEmitter.childNotify(label, ...args)
  }
}
