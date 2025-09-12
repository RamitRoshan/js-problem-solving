/*
=====================================
Assignment: Compact
=====================================

Create a function that removes all falsey values from an array.

Falsey values include:
- false
- null
- 0
- ""
- undefined
- NaN

Function Signature:
function compact(arr): any[]

Examples:
compact([0, 1, false, 2, "", 3]) => [1, 2, 3]

Hints:
- Use a for loop to iterate through the array.
- Use an if-statement to check if the item is truthy (e.g., `if (arr[i])`).
- Optionally, you can use `filter(Boolean)` for a one-liner.

Step-by-Step Algorithm:
1. Create an empty array `result`.
2. Loop through each element of the input array.
3. If the current value is truthy, push it into `result`.
4. Return the `result` array.
*/

function compact(arr) {
    // Your code here
    
}
  
module.exports = compact;
  