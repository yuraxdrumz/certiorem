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


export { createObservable, createObserver }