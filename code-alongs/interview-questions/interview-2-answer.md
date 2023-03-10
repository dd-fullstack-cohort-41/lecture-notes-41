1. In pseudocode, write a function that takes a string and returns it with all vowels (not including y) removed.
```
function removeVowels (myString) {
    declare filteredString = '';
    declare array vowels = [a, e, i, o, u]

    convert myString into an array

    loop over our array character by character { if our current character is not in the vowels array, add it to the end of filteredString
       
    }

    return filteredString
}
```
2. In pseudocode, write a function that takes an array of numbers and returns the greatest number in the array.
```
declare function findHighestNumberInArray that takes an arrayOfNumbers as an argument 
    declare variable largestNumber = -infinity
    foreach value in arrayOfNumbers
        if value > largestNumber
            reassign largestNumber to value
    return largestVariable 
```
3. In pseudocode, write a function that computes the first 100 numbers in the Fibonacci sequence and returns the answer in a comma seperated string. The Fibonacci sequence is created by adding the two previous numbers in the sequence together, and starts 0, 1, 1, 2, 3, 5, 8, ...
```
declare a function calculateFirstOneHundredValuesInFibonacci that returns a string 
    declare a variable fibonacciString equal to "0,1"
    declare a variable previousNumber = 0
    declare a variable thisNumber = 1
    for i=3; i<=100; i equals i plus 1;
        declare variable nextNumber = previousNumber + thisNumber
        concatenate fibonacciString with ", nextNumber"
        redeclare previousNumber to equal thisNumber
        redeclare thisNumber to equal nextNumber
    return fibonacciString
    
```