import { decorateObservable, createObservable, createObserver } from './index'

let main = createObservable()
let observer = createObserver('listener1', main)
observer.subscribe('go', function(data){console.log(data)})
let extend = decorateObservable(main, false)

@extend
class Car{
  constructor(wheels){
    this.wheels = wheels
  }
  go(){
    console.log('going')
  }
  stop(){
    console.log('stopping')
  }
}

@extend
class Truck{
  constructor(wheels){

  }
}



let car = new Car(4)
let truck = new Truck(6)
let observer2 = createObserver('tr listener', truck)
let observer3 = createObserver('truck listener', truck)
observer2.subscribe('go', function(data){console.log(data)})
observer3.subscribe('go', function(data){console.log(data)})
// car.emit('go', 'car going')
truck.emit('go', 'truck started driving')
// truck.go()