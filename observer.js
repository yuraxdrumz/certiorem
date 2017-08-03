export default class Observer{
  constructor(id, parentEmitter){
    this.id = id
    this.parentEmitter = parentEmitter
    this.handleStart = this.handleStart.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.parentEmitter.addListener('start', this.handleStart)
    this.parentEmitter.addListener('change', this.handleChange)

  }
  handleStart(id, job){
    console.log(`${this.id} was notified of start`)
  }
  handleChange(id, change){
    console.log(`${this.id} was notified of change: id: ${id}, ${JSON.stringify(change)}`)
    if(this.id === 2){
      console.log(`${this.id} was deleted`)
      this.deactivateChange('change', this.handleChange)
    }
  }
  deactivateChange(label, callback){
    this.parentEmitter.removeListener(label, callback)
  }
}