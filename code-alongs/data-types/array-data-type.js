console.log('I love arrays!')

const name = 'Marty'
const name2 = 'Felipe'
const name3 = 'Nicole'
const name4 = 'Jared'
const name5 = 'Donavan'

// console.log(name)
// console.log(name2)
// console.log(name3)
// console.log(name4)
// console.log(name5)

const cohort = [name, name2, name3, name4, name5]
console.log(cohort)
// console.log(cohort[0])
// console.log(cohort[1])
// console.log(cohort[2])

// I want to loop over the array and run a console.log for each name in the array
console.log('using forEach')
cohort.forEach(name => console.log(name))

console.log('using for')
for (let i = 0; i < cohort.length; i++){
    console.log(cohort[i])
}