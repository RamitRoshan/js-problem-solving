/*
Q) str = "hello world"
o/p - #HelloWorld

Q2) str = "i love coding"
o/p- #ILoveCoding
*/

// const str = "hello world";

// const result = "#"+  str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");

// console.log(result);

 

const str1 = "i love coding";

const result2 = "#" + str1.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");
console.log(result2);



const str = "hello world";

const words = str.split(" "); // ['hello', 'world']
let capitalized = "";

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const firstChar = word.charAt(0).toUpperCase(); // 'H' or 'W'
    const rest = word.slice(1);                     // 'ello' or 'orld'
    capitalized += firstChar + rest;                // 'Hello' + 'World'
}

const result = "#" + capitalized;

console.log(result); // #HelloWorld
