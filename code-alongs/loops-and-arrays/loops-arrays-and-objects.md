```
* Loops
```javascript
for (let currentValue = 0; currentValue < 10; currentValue = currentValue + 1) {
   console.log(currentValue)
}
```
### Arrays
* data that we group together
``` javascript
  let students = ['Agnes', 'Xavier', 'Demetrius', 'Isabella'];
  
  // Output: 'Agnes'
  console.log(students[0]);             
  
  // Output: 'Hello and welcome, Isabella'
  console.log('Hello and welcome, ' + students[3]);   
  ```
* The number we refer to elements in the array is called the **array index**
    * Always starts at 0, not 1
* Lots of different things we can do with an array to manipulate it: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
* Arrays are best suited when we have a lot of data that is simple and all the same type
    * examples
        * the first names of students in the class
        * a list of prime numbers
        * a list of ingredients in a recipe

### Objects
* If we have a list of different data and want to encapsulate it all, it's better to use an object
* syntax
``` javascript
  let student = {
    firstName: 'Isabella',
    lastName: 'Morales',
    age: 31
  };
  // Output: 'Isabella'
  console.log(student['firstName']);
  // Output: 'Full name: Isabella Morales'
  console.log('Full name: ' + student['firstName'] + student['lastName']);
  ```

### Objects vs. arrays: Which should we use?  Both!
* We access things in objects by property name, but by index in arrays
* Items in an object are often different, whereas in an array they are all the same type of thing.
* Objects are much more general purpose than arrays.
* Arrays have more default functionality for mathematical operations like sorting and can have better performance.
* Rule of thumb - if all data is exactly the same type and can be reordered freely, use an array.  If it's different, use an object.
* Question: What if we wanted to make a list of all the students in the class, but also allow them to have first and last names?
* Answer: Use nesting!
* Nesting: putting objects or arrays inside of other objects or arrays
``` javascript
    let students = [
      {
        firstName: 'Isabella',
        lastName: 'Morales',
      },
      {
        firstName: 'Shawn',
        lastName: 'Saito',
      },
      {
        firstName: 'Rochelle',
        lastName: 'Puckett',
      }
    ];
    // Output 'Hello Shawn Saito'
    console.log('Hello ' + students[1]['firstName'] + ' ' + students[1]['lastName'];
```
* Nesting objects within an array allows us to
    * encapsulate complicated entities using properties of an object
    * iterate over each instance of an entity by using arrays
    * pull out only the relevant pieces of the objects when we need them
* This "array of objects" structure is the fundamental building block of modern JS
    * JSON - JavaScript Object Notation
    * Founds the basis of how you will be using JavaScript in your capstone