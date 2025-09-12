/*
=====================================
Assignment: Check if One Array can be Nested in Another
=====================================

Create a function that returns true if the first array can be nested 
inside the second and false otherwise.

arr1 can be nested inside arr2 if:
- min(arr1) > min(arr2)
- max(arr1) < max(arr2)

Function Signature:
function canNest(arr1, arr2): boolean

Examples:
canNest([1, 2, 3, 4], [0, 6]) => true
canNest([3, 1], [4, 0]) => true
canNest([9, 9, 8], [8, 9]) => false
canNest([1, 2, 3, 4], [2, 3]) => false

Hints:
- First, try solving it using a traditional for loop:
  1. Find the min and max of both arrays manually.
  2. Compare conditions based on the nesting rules.
- Optionally, use `Math.min()` and `Math.max()` for cleaner implementation.

Step-by-Step Algorithm:
1. Initialize `min1` and `max1` for arr1.
2. Initialize `min2` and `max2` for arr2.
3. Use a loop to calculate min and max for each array.
4. Return true if `min1 > min2` and `max1 < max2`, otherwise return false.
*/

function canNest(arr1, arr2) {
    // Your code here
}
  
module.exports = canNest;
  