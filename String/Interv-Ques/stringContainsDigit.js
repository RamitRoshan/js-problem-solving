/*
Check if a string contains only digits:

Input: "12345" → Output: true
Input: "123a5" → Output: false
*/

const str = "123e45";

let result = /^[0-9]+$/.test(str);

console.log(result);




