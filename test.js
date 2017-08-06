

const Emit = ({listeners}) =>{
  let ls = listeners
  return {
    emit:(label, ...args)=>{
      let listeners = ls[label]
      if (listeners && listeners.length) {
        listeners.forEach(listener => listener(...args))
        return true
      }
      return false
    }
  }
}

const AddListener = ({listeners}) =>{
  return {
    addListener:(label, callback)=>{
      if(!listeners[label]) listeners[label] = []
      listeners[label].push(callback)
    }
  }
}

const RemoveListener = ({listeners}) =>{
  let ls = listeners
  return {
    removeListener:(label, observerName)=>{
      let index = null
      let listeners = ls
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
  }
}

const ChildNotify = ({emit}) =>{
  let em = emit
  return {
    childNotify:(label, ...args)=>{
      // same as emit but fired from child to notify parent that notifies all children
      return em(label, ...args)
    }
  }
}

const AttachListeners = ({listeners}) => {
  let ls = listeners || {}
  return {
    listeners: ls
  }
}

const Unsubscribe = ({parent, name}) =>{
  let pr = parent
  let nm = name
  return {
    unsubscribe: label =>{
      pr.removeListener(label, nm)
    }
  }
}

const Subscribe = ({parent, name}) =>{
  let pr = parent
  let nm = name
  return {
    subscribe:(label, fn)=>{
      Object.defineProperty(fn,'name',{
        enumerable: false,
        configurable: true,
        writable: true,
        value: nm
      })
      pr.addListener(label, fn.bind(this))
    }
  }
}

function createObservable () {
  let listeners = {}
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

function makeObservable(parent){
  // TODO create decorator to make an observable
}


let main = createObservable()
let observer = createObserver('observer1', main)
let observer2 = createObserver('observer2', main)
observer.subscribe('start',data=>console.log(data))
observer2.subscribe('start',data=>console.log(data))
observer.unsubscribe('start')
main.emit('start', 'awsomeeeee')
