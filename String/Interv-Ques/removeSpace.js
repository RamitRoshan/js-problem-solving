/*
Remove all spaces from a string
Input: "Hello World Java" → Output: "HelloWorldJava"
*/

const str = " Hello World From Java ";

let result = str.split(" ").join("");
console.log(result);