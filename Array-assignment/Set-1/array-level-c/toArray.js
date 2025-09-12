/*
=====================================
Assignment: Converting Objects to Arrays
=====================================

Write a function that converts an object into an array, where each element 
represents a key-value pair in the form of an array.

Function Signature:
function toArray(obj): any[][]

Examples:
toArray({ a: 1, b: 2 }) => [["a", 1], ["b", 2]]
toArray({ shrimp: 15, tots: 12 }) => [["shrimp", 15], ["tots", 12]]
toArray({}) => []

Hints:
- First try solving using a for...in loop:
  1. Create an empty result array.
  2. Loop through the object's keys.
  3. For each key, push [key, obj[key]] into the result array.
- Optionally, use `Object.entries(obj)` for a built-in one-liner.

Step-by-Step Algorithm:
1. Create an empty array called `result`.
2. Loop through each key in the object.
3. Push an array of [key, value] to `result`.
4. Return the `result` array.
*/

function toArray(obj) {
    // Your code here
    
}
  
module.exports = toArray;
  