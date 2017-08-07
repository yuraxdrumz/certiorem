const Emit = ({listeners}) =>({
  emit:(label, ...args)=>{
    listeners = listeners[label]
    if (listeners && listeners.length) {
      listeners.forEach(listener => listener(...args))
      return true
    }
    return false
  }
})

const ChildNotify = ({emit}) =>({
  emit:(label, ...args)=>{
    // same as emit but fired from child to notify parent that notifies all children
    return emit(label, ...args)
  }
})

const Unsubscribe = ({parent, name}) =>({
  unsubscribe: label =>{
    parent.removeListener(label, name)
  }
})

const Subscribe = ({parent, name}) =>({
  subscribe:(label, fn)=>{
    Object.defineProperty(fn,'name',{
      enumerable: false,
      configurable: true,
      writable: true,
      value: name
    })
    parent.addListener(label, fn.bind(this))
  }
})


export default function createObserver(name, parent){
  return Object.assign({},
    ChildNotify(Emit({listeners:parent.listeners})),
    Subscribe({parent, name}),
    Unsubscribe({parent, name})
  )
}