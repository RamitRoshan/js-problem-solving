//instance methods - are those called on objects(instances)
//you need to have an object to call the method
const a1 = new Array();
a1.push(20);
console.log("a1:", a1); // [20]

const str=  "dct";
console.log("Uppercase:", str.toUpperCase()); // DCT

const obj = {a:1,b:2};
// obj.hasOwnProperty('a');
console.log("Has a:", obj.hasOwnProperty("a")); // true


//static method - are those called on classes ( constructor function)[like: classes- Array, Object]
//you don't need to have an object to called the method

Array.isArray(a1);
Object.keys(obj);


//Mutable methods - push(), pop(), shift(), unshift(), splice()
// are those that changes the value of the variables

//Immutable methods - indexOf(), includes(), filter(), slice()
// are those that do not change the valye of the variable.

// Mutable vs Immutable methods
let arr = [1, 2, 3];

// Mutable (changes arr)
arr.push(4);
console.log("After push:", arr); // [1,2,3,4]

// Immutable (does not change arr)
let newArr = arr.slice(0, 2);
console.log("After slice:", newArr); // [1,2]
console.log("Original arr still:", arr); // [1,2,3,4]