/*
=====================================
Assignment: Reverse an Array
=====================================

Write a function to reverse an array.

Function Signature:
function reverse(arr): any[]

Examples:
reverse([1, 2, 3, 4]) => [4, 3, 2, 1]
reverse([9, 9, 2, 3, 4]) => [4, 3, 2, 9, 9]
reverse([]) => []

Hints:
- First try solving it using a traditional for loop:
  1. Loop from the end of the array to the beginning.
  2. Push each element to a new array.
- Optionally, use the built-in `.reverse()` method for a one-liner solution.

Step-by-Step Algorithm:
1. Create an empty array `result`.
2. Start from the last index of the input array and loop backward.
3. Push each item into `result`.
4. Return the `result` array.
*/

function reverse(arr) {
    // Your code here
    const result = [];
    for(let i= arr.length-1; i>=0; i--){
      result.push(arr[i]);
    }
    return result;
}
  
module.exports = reverse;
  