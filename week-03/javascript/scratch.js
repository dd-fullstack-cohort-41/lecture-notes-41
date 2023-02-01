const answerToLife = doSomething(42)
console.log(answerToLife)

function doSomething(parameter) {
  return parameter + " " + "is the answer to life"
}

const doSomethingElse = function (parameter)  {
  if(parameter === "42") {
    return "42 is the answer to life"
  } else {
    return "That is not the answer to life"
  }
}

const isThisTheAnswerToLife = doSomethingElse("43")