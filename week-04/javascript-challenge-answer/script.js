console.log('howdy')

function findAndReplace() {
  console.log('find and replace')
  let text = document.getElementById('find-replace')
  console.log(text)
  let searchTerm =document.getElementById('text-find').value
  console.log(searchTerm)
  let replaceTerm =document.getElementById('text-replace').value
  console.log(replaceTerm)
  // text.innerText = text.innerText.replaceAll(searchTerm, replaceTerm)
  const regularExpression = new RegExp(searchTerm, 'gi')
  console.log(regularExpression)
  text.innerHTML = text.innerHTML.replaceAll(regularExpression, replaceTerm)
}

highlightFind = () => {
  console.log('highlight find')
  let text = document.getElementById('find-replace')
  console.log(text)
  let searchTerm =document.getElementById('text-find').value
  console.log(searchTerm)
  let replaceHighlight = `<span class="highlight">${searchTerm}</span>`
  const regularExpression = new RegExp(searchTerm, 'gi')
  console.log(regularExpression)
  text.innerHTML = text.innerHTML.replaceAll(regularExpression, replaceHighlight)
}

const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')
console.log(containers)

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })
  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})


containers.forEach(container => {
  container.addEventListener('dragover', event => {
    event.preventDefault()
    // what happens when something is dropped here
    console.log(event)
    const afterElement = getDragAfterElement(container, event.clientY)
    const dragging = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(dragging)
    } else {
      container.insertBefore(dragging, afterElement)
    }
  })
})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return {element: child, offset: offset}
    } else {
      return closest
    }
  },  {offset: Number.NEGATIVE_INFINITY}).element
}

function rot13() {
  let zombies = document.getElementById('zombies')
  // console.log(zombies)
  let zombieText = zombies.innerText
  let numberOfChars = zombieText.length
  // console.log(numberOfChars)
  // console.log(zombieText.charCodeAt(numberOfChars-1), zombieText[numberOfChars-1])
  let codedZombieText = ''
  for (let index = 0; index < numberOfChars; index = index + 1){
    let charCode = zombieText.charCodeAt(index)
    let codedCharCode = charCode
    if((charCode >= 65 && charCode <= 77)
    ||
      (charCode >= 97 && charCode <= 109)) {
      codedCharCode = charCode + 13
    } else if ((charCode >= 78 && charCode <= 90)
    ||
      (charCode >= 110 && charCode <= 122)){
      codedCharCode = charCode - 13
    }
    codedZombieText = codedZombieText + String.fromCharCode(codedCharCode)
  }
  zombies.innerText = codedZombieText
}