# certiorem
An implementation of the observer pattern in node.js with event emitter.
0 dependencies and usage is very straight forward and declarative.
## Usage
you have two functions in certiorem, one is called `createObservable` and the other is called `createObserver`
`createObservable` creates a new instance of a parent class that will hold all the observers and notify them on events emitted, the `createObserver` creates a new instance of an observer that will talk directly to the observable instance.
you can have as many observables as you want and for each observable you can have as many observers as you want
First, install the package using npm:
`npm install certiorem --save`
Then, require it and use it like so:
![image of require](http://i.imgur.com/aWrEgJW.png)
## Observable methods
# emit
`the emit method receives the event name as the first argument and all arguments that come after are passed to all listeners subscribed`
```javascript
import { createObservable, createObserver } from 'certiorem'
let mainObservable = createObservable()
mainObservable.emit('start')
```
## Observer methods
`Observer receives two arguments, the first is the observers name, the second is the Observable to attach to, so that all subscribtions will listen to events emitted by that Observable`
`The example below shows how two listeners are added to the mainObservable instance, all emitted events will pass to them if they are subscribed`
```javascript
import { createObservable, createObserver } from 'certiorem'
let mainObservable = createObservable()
let listener1 = createObserver('listener1', mainObservable)
let listener2 = createObserver('listener2', mainObservable)
```
# subscribe
`subscribe receives two arguments, the first one is the event name to subscribe to and the second is a function that receives arguments`
`here you can see that listener1 is subscribed to the start event and its handler is a function that receives data and logs it to the console`
```javascript
import { createObservable, createObserver } from 'certiorem'
let mainObservable = createObservable()
let listener1 = createObserver('listener1', mainObservable)
listener1.subscribe('start', function(data){
    console.log(data)
})
mainObservable.emit('start', 'this string will be passed down to all listeners of the start event')
```
# unsubscribe
`the unsubscribe method removes the current listener from a specific event`
```javascript
import { createObservable, createObserver } from 'certiorem'
let mainObservable = createObservable()
let listener1 = createObserver('listener1', mainObservable)
let listener2 = createObserver('listener2', mainObservable)
listener1.subscribe('start', function(data){
    console.log(data)
})
listener2.subscribe('start', function(data){
    console.log(data)
})
listener1.unsubscribe('start')
mainObservable.emit('start')
// only listener2 will respond to this event
```
# emit
`the observers emit method allows an observer to dispatch an event to the parent he his attached to, the mainObservable in this example and the mainObservable automatically dispatches the event to all listeners attached`
```javascript
import { createObservable, createObserver } from 'certiorem'
let mainObservable = createObservable()
let listener1 = createObserver('listener1', mainObservable)
let listener2 = createObserver('listener2', mainObservable)
listener1.subscribe('start', function(data){
    console.log(data)
})
listener2.subscribe('start', function(data){
    console.log(data)
})
// this emit is similar to the parent emit, except it emits to the parent, and the parent automatically emits the event to all listeners
listener1.emit('start', 'started in listener1')
```
