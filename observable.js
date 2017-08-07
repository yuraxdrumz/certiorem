
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

const AttachListeners = ({listeners}) => ({
  listeners:listeners || {}
})



export default function createObservable (parent = null) {
  let listeners = parent ? parent.listeners : {}
  return Object.assign({},
    Emit({listeners}),
    AddListener({listeners}),
    RemoveListener({listeners}),
    AttachListeners({listeners})
  )
}
