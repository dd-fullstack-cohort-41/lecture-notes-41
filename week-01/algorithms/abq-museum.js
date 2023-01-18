let age = 3
let nMResident = true
let foundationMember = false
let cost

if (foundationMember === true){
    cost = 0
} else {
    if (age >= 65) {
        cost = 4
    } else if (age > 12) {
        if (nMResident === true) {
            cost = 5
        } else {
            cost = 6
        }
    } else if (age > 3) {
        cost = 3
    } else {
        cost = 0
    }
}
console.log(cost)
