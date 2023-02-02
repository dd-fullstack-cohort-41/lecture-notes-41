console.log('this is on')

let targetDiv = document.getElementById('target')

console.log(targetDiv)

let people = ['Mary', 'Sue', 'Jane', 'Fred', 'Matt']

for(let person of people){
  console.log(person)
  targetDiv.innerHTML = targetDiv.innerHTML + '<p>' + person + '</p>'
}

// concatenation to current value of a variable
let test = "a"
console.log(test)
test = "a" + 'b'
console.log(test)
test = "a" + 'b' + 'c'
console.log(test)
test = test + 'd'
console.log(test)
test = test + 'e'
console.log(test)
test = test + 'f'
console.log(test)
test = test + 'g'
console.log(test)












