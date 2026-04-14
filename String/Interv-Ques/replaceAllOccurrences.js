/*
Replace All Occurrences of a Word in a String

Q1
Input: "I love coding, coding is fun", replace "coding" with "programming"
Output: "I love programming, programming is fun"

Q2
Input: "apple banana apple", replace "apple" with "orange"
Output: "orange banana orange"

Q3
Input: "hello world", replace "world" with "JavaScript"
Output: "hello JavaScript"

Q4
Input: "aaa aaa aaa", replace "aaa" with "bbb"
Output: "bbb bbb bbb"
*/


const str = "I love coding, coding is fun";
const result = str.replaceAll("coding", "programming");
console.log(result);




//2nd methods

// const str = "I love coding, coding is fun";
// let result = "";

// for (let i = 0; i < str.length; i++) {

//     // check substring from current index
//     if (str.substring(i, i + 6) === "coding") {
//         result += "programming";
//         i += 5; // skip "coding"
//     } else {
//         result += str[i];
//     }
// }

// console.log(result);


