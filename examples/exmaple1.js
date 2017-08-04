import{ createObservable, createObserver } from 'certiorem'
// or
const certiorem = require('certiorem')

const watcher = createObservable()
const otherWatcher = createObservable()

const worker = createObserver('worker name1', watcher)
const worker2 = createObserver('worker name2', watcher)


const otherWorker = createObserver('other worker', otherWatcher)

worker.subscribe('start', ()=>console.log('work has started'))
worker2.subscribe('start', ()=>console.log('work has started'))
worker2.subscribe('end', data => console.log(`work has ended with data: ${JSON.stringify(data)}`))


otherWorker.subscribe('other worker start', ()=>console.log('other worker has started :)'))

watcher.emit('start')
otherWatcher.emit('other worker start')
watcher.emit('end', 'data emmited on end')
