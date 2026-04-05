/*
Convert string to uppercase/lowercase: 

Input: "Hello World"
Output (uppercase): "HELLO WORLD"
Output (lowercase): "hello world"
*/

// const str = "Hello World";
// let result = "";

// for(let i=0; i<str.length; i++){
//     result = result + str[i].toUpperCase();
  
// }
// console.log(result);


//Convert String to lowerCase: Input: "Hello World", Output (lowercase): "hello world"
const str = "Hello World";
let result = "";
for(let i=0; i<str.length; i++){
    result = result + str[i].toLowerCase();
}
console.log(result);




//convert lower case to upppercase and UPPERCASE to LOWERCASE

// const str = "Hello World";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//         result = result + str[i].toUpperCase();
//     } else {
//         result = result + str[i].toLowerCase();
//     }
// }

// console.log(result);