// the difference between using a function's name with vs without () after it
// doSomeTask vs doSomeTask()

const doSomeTask = () => {
  return 'Ya, I did some task'
}

const doAnotherTask = doSomeTask
console.log(doAnotherTask)
const completedTask = doSomeTask()
console.log(completedTask)


const displayMessage = () => {
  console.log('Hello World')
}

const doSomeTaskThreeTimes = (someTask) => {
  for(let counter = 1; counter <= 3; counter++) {
    someTask()
  }
}

doSomeTaskThreeTimes(displayMessage)

const makeSomeTask = () => {
  const doAnotherTask = () => 'doing another task'
  return doAnotherTask
}

const text = makeSomeTask()

console.log('makeSomeTask', text)
console.log('running the returned function....', text())








