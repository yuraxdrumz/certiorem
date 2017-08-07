

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

const AddListener = ({listeners}) =>({
  addListener:(label, callback)=>{
    if(!listeners[label]) listeners[label] = []
    listeners[label].push(callback)
  }

})

const RemoveListener = ({listeners}) =>({
  removeListener:(label, observerName)=>{
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

})

const ChildNotify = ({emit}) =>({
  emit:(label, ...args)=>{
    // same as emit but fired from child to notify parent that notifies all children
    return emit(label, ...args)
  }
})

const AttachListeners = ({listeners}) => ({
  listeners:listeners || {}
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

function createObservable (parent = null) {
  let listeners = parent ? parent.listeners : {}
  return Object.assign({},
    Emit({listeners}),
    AddListener({listeners}),
    RemoveListener({listeners}),
    AttachListeners({listeners})
  )
}

function createObserver(name, parent){
  return Object.assign({},
    ChildNotify(Emit({listeners:parent.listeners})),
    Subscribe({parent, name}),
    Unsubscribe({parent, name})
  )
}

function makeObservable(parent, attachListeners = true){
  return function(Class){
    Object.assign(Class.prototype, createObservable(attachListeners?parent:null))
    return Class
  }
}

function makeObserver(name, parent){
  return function(Class){
    Object.assign(Class.prototype, createObserver(name, parent))
    return Class
  }
}


let main = createObservable()
let observer = createObserver('observer1', main)
let observer2 = createObserver('observer2', main)
observer.subscribe('start',data=>console.log(data))
observer2.subscribe('start',data=>console.log(data))
// observer.unsubscribe('start')
// main.emit('start', 'awsomeeeee')
// observer.emit('start', 'started in observer')

@makeObservable(main)
class Test{
  constructor(){

  }
}

let t = new Test()

let observer3 = createObserver('d', t)
observer3.subscribe('start',data=>console.log(data))
main.emit('start', 'started in main')
@makeObserver('dsasd', t)
class Obs{
  constructor(){

  }
}
let obs = new Obs()
obs.subscribe('start',()=>console.log(`comes from obssss`))
t.emit('start', 'started in decorated class')
