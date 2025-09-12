/*
=====================================
Assignment: Find the Smallest and Biggest Numbers
=====================================

Create a function that takes an array of numbers and returns 
both the minimum and maximum numbers, in that order.

Function Signature:
function minMax(arr): number[]

Examples:
minMax([1, 2, 3, 4, 5]) => [1, 5]
minMax([2334454, 5]) => [5, 2334454]
minMax([1]) => [1, 1]

Hints:
- First, try solving this using a traditional for loop:
  1. Initialize two variables `min` and `max` with the first element of the array.
  2. Loop through the array from index 1 and compare each value with `min` and `max`.
  3. Update them accordingly.
- Optionally, try using `Math.min(...arr)` and `Math.max(...arr)` for a one-liner.

Step-by-Step Algorithm:
1. Set `min` and `max` to the first element of the array.
2. Loop through the rest of the array:
   - If the current element is smaller than `min`, update `min`.
   - If the current element is greater than `max`, update `max`.
3. Return an array containing `[min, max]`.
*/

function minMax(arr) {
    // Your code here
    
}
  
module.exports = minMax;
  