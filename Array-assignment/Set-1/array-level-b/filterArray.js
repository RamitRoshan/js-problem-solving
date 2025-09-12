/*
=====================================
Assignment: Filter out Strings from an Array
=====================================

Create a function that takes an array of non-negative integers and strings 
and returns a new array without the strings.

Function Signature:
function filterArray(arr): number[]

Examples:
filterArray([1, 2, "a", "b"]) => [1, 2]
filterArray([1, "a", "b", 0, 15]) => [1, 0, 15]
filterArray([1, 2, "aasf", "1", "123", 123]) => [1, 2, 123]

Hints:
- First try solving using a traditional `for` loop:
  1. Loop through the array.
  2. Check the type of each element.
  3. If it's a number, push it to the result array.
- Optionally, use `.filter()` with `typeof` check for a one-liner solution.

Step-by-Step Algorithm:
1. Create an empty array called `result`.
2. Loop through each item in the array.
3. If the item is a number (`typeof item === "number"`), push it to `result`.
4. Return the `result` array.
*/

function filterArray(arr) {
    // Your code here
    
}
  
module.exports = filterArray;
  