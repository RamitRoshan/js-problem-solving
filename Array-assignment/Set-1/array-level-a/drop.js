/*
=====================================
Assignment: Drop the First Elements of an Array
=====================================

Your challenge is to write your own version of dropping the first `n` elements
from an array using vanilla JavaScript.

Function Signature:
function drop(arr, n): any[]

Examples:
drop([1, 2, 3], 1) => [2, 3]
drop([1, 2, 3], 2) => [3]
drop([1, 2, 3], 5) => []
drop([1, 2, 3], 0) => [1, 2, 3]

Hints:
- First, try solving using a traditional `for` loop:
  1. Initialize an empty result array.
  2. Start the loop at index `n` and push the remaining elements to the result.
- Optionally, use `arr.slice(n)` to get the same behavior.

Step-by-Step Algorithm:
1. Create an empty array called `result`.
2. Loop from index `n` to the end of the input array.
3. Push each element into `result`.
4. Return the `result` array.
*/

function drop(arr, n) {
    // Your code here
    
}
  
module.exports = drop;
  