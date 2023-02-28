let person = {
  name: 'Juan',
  employer: 'build with robots',
  age: 32,
  worksRemote: false,
  work: () => console.log('building robots')
}

console.log(`${person.name} works for ${person.employer} and is ${person.age} years old.`)

// let name = person.name
// let employer = person.employer
// let age = person.age
// let worksRemote = person.worksRemote
// let work = person.work
let {name, employer, age, worksRemote, work} = person

console.log(`${name} works for ${employer} and is ${age} years old.`)

let props = {
  person: person
}

console.log(props.person.name)

