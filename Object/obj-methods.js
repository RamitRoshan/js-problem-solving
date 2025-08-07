//Interview Ques) how to check whether object is empty or not
//like : array we use includes methods but in object we can only use 'in' operators

const obj1 = {a:1, b:2};
const obj2 = {};

//extract all the keys
console.log(Object.keys(obj1)); //['a', 'b'];


//extract all the values
console.log(Object.values(obj1)); //[1, 2];

//extract object to array
console.log(Object.entries(obj1)); //[ ['a', 1], ['b', 2] ]

//count number of key value pairs
console.log(Object.keys(obj1).length) //2
console.log(Object.keys(obj2).length) //0

//check if object is empty
console.log(Object.keys(obj1).length == 0); //false
console.log(Object.keys(obj2).length == 0); //true

//check iif a property (key) exists in an object
console.log('a' in obj1); //true
console.log('z' in obj1); //false


console.log(obj1.hasOwnProperty('a')); //true
console.log(obj1.hasOwnProperty('z')); //false