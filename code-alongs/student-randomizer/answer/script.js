
function randomizeStudentNames() {
  const students = ["Felipe", "Elise", "Joel", "Nicole","Daniella", "Jared", "Damon", "Jordyn", "Donavan", ]
  function shuffleNames(array) {
    console.time("Loop")
    for(let i = 0; i < 5; i ++) {
      let currentIndex = array.length
      let randomIndex = undefined
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex-- // currentIndex = currentIndex - 1

        //swap random index with current index
        let temp = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temp

        // Above is a simplified version of the code below
        // [array[currentIndex],array[randomIndex]] = [array[randomIndex], array[currentIndex]]
      }
    }
console.timeEnd("Loop")
    return array
  }

  let shuffledNames = shuffleNames(students)

  let reduceCallback = (accumulator, currentValue, index) => {
  if(index === 0) {
    accumulator = currentValue
  }
    else if(shuffledNames.length === index + 1) {
      accumulator = `${accumulator}, and ${currentValue}`
    } else {
      accumulator = `${accumulator}, ${currentValue}`

    }
    return accumulator
  }

  const stringifyShuffledNames = shuffledNames.reduce(reduceCallback, '')

  document.getElementById('target').innerHTML = stringifyShuffledNames

}

randomizeStudentNames()





