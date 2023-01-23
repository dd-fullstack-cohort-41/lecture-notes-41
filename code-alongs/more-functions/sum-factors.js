// 2. Write a function in JavaScript that takes a number and finds the sum of all unique positive factors of a number.  (The factors of a number are all numbers that divide evenly into it.  For example, the unique positive factors of 12 are 1, 2, 3, 4, 6, and 12, and the sum would thus be 28.)

const sumOfFactors = number => {
    let sum = 0
    //     loop start;    loop runs while true; loop steps by 1
    for (let counter = 1; counter <= number; counter++){
        // console.log(counter)
        if (number % counter === 0) {
            sum = sum + counter
        }
    }
    return sum
}

console.log(sumOfFactors(12))