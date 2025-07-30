/*
Q) str = "hello world"
o/p - #HelloWorld

Q2) str = "i love coding"
o/p- #ILoveCoding
*/

const str = "hello world";

const result = "#"+  str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");

console.log(result);



const str1 = "i love coding";

const result2 = "#" + str1.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");
console.log(result2);