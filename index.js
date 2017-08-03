import Observer from './observer'
import Observable from './observable'



class OtherExec extends Observer{
  constructor(id, parentEmitter){
    super(id, parentEmitter)
    this.id = id
    this.parentEmitter = parentEmitter
  }
  makeSomething(){
    this.parentEmitter.childNotify('change', this.id, {a:3})
  }
}

class Exec extends Observer{
  constructor(id, parentEmitter){
    super(id, parentEmitter)
    this.id = id
    this.parentEmitter = parentEmitter
  }
  makeSomething(){
    this.parentEmitter.childNotify('change', this.id, {b:5})
  }
}

let worker = new Observable()

let observer1 = new Exec(1,worker)
let observer2 = new OtherExec(2, worker)
let observer3 = new OtherExec(3, worker)


// observer3.makeSomething()
// observer1.makeSomething()

// setTimeout(()=>{
//   observer2.makeSomething()
// }, 3000)
