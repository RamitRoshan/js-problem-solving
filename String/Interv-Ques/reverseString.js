/*
Reverse a string:

Input: "hello"
Output: "olleh"
*/

// const str = "hello";

// let result = str.split("").reverse().join("");
// console.log(result);



const str = "hello";

let result = "";
for(let i = str.length-1; i>=0; i--){
    result += str[i];
}
console.log(result);
