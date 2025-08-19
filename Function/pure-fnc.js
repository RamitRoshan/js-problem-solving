/* Interview Questions ? 
- Can you run your project locally on the system?
- Difference between for-in and for-of loops, and which one was introduced first (for-in).
- Why don’t we use the for-in loop with arrays?
- Difference between Object.freeze and Object.seal.
- What is Object.seal?
*/

// const person = {id:1, name: 'adam'};
// person.age = 22;
// console.log(person.age)
// console.log(person);


// const student = {id:1, name:'punith', course: 'fullstack'}
// console.log(student)

// Object.seal(student);
// Object.isSealed(student);


//Code for pure fns
//How to convert impure function to pure functions

const fruits = ['mango', 'orange'];
function addFruit(fruit, fruitName){
    //const newArr = fruits shallow copy (copy by reference)
    //deep copy of an array
    const newArr = [...fruit];  //spread operator
    newArr.push(fruitName);
    return newArr;
}
console.log(addFruit(fruits, 'chikko')); //[ 'mango', 'orange', 'chikko' ]
console.log(addFruit(fruits, 'chikko')); //[ 'mango', 'orange', 'chikko' ]
console.log(addFruit(fruits, 'chikko')); //[ 'mango', 'orange', 'chikko' ]

