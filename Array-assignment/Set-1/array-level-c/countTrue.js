/*
=====================================
Assignment: How Much is True?
=====================================

Create a function which returns the number of true values there are in an array.

Function Signature:
function countTrue(arr): number

Examples:
countTrue([true, false, false, true, false]) => 2
countTrue([false, false, false, false]) => 0
countTrue([]) => 0

Hints:
- First try solving using a traditional `for` loop:
  1. Loop through the array.
  2. Check if the value is strictly equal to `true`.
  3. If so, increment a counter.
- Optionally, try using `.filter(Boolean)` or `.filter(val => val === true)` and check the length.

Step-by-Step Algorithm:
1. Initialize a `count` variable to 0.
2. Loop through the input array.
3. If the current value is `true`, increment the count.
4. Return the count after the loop.
*/

function countTrue(arr) {
    // Your code here
    
}
  
module.exports = countTrue;
  