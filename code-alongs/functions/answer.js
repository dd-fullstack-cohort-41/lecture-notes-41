/**
 * A simple function that takes two numbers and divides them.
 *
 * @param numerator the initial number we want to divide by
 * @param denominator the number that will be divided by.
 *
 * @return the quotient from dividing the numerator by the denominator
 **/

function divideTwoNumbers(numerator, denominator) {
  let quotient = numerator / denominator
  return quotient
}

let returnValue = divideTwoNumbers(2239, 6)


/**
 * A simple function that takes two strings and combines(concatenates) them together
 *
 * @param string1 the first string that will be combined
 * @param string2 the second string that will be combined
 * @return the combination (concatenation) of the first and second string
 **/

function combineTwoStrings(string1, string2) {
  return string1 + string2 // `${string1}${string2}`
}

let secondReturnValue = combineTwoStrings('use numbers for mathematical operations','use strings for everything else')

//A function is a way of defining how to preform a task so that the task can be easily repeated

// a function is not activated until it is called with parenthesis

// a function can take arguments/parameters from the outside world/scope that can be used inside the function.

// a function is a black box and the computation inside the function is not available to the outside world. the only way to get a value outside of the function is to use the return keyword













