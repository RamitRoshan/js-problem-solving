/*
=====================================
Assignment: Concatenate Variable Number of Input Arrays
=====================================

Create a function that concatenates n input arrays, where n is variable.

Function Signature:
function concat(...args): any[]

Examples:
concat([1, 2, 3], [4, 5], [6, 7]) => [1, 2, 3, 4, 5, 6, 7]
concat([1], [2], [3], [4], [5], [6], [7]) => [1, 2, 3, 4, 5, 6, 7]
concat([1, 2], [3, 4]) => [1, 2, 3, 4]
concat([4, 4, 4, 4, 4]) => [4, 4, 4, 4, 4]

Hints:
- Use the rest parameter syntax to collect all input arrays.
- Use a for loop to iterate over each array and each element inside it.
- Optionally, use `[].concat(...args)` or `args.flat()` for one-line solutions.

Step-by-Step Algorithm:
1. Define the function using `...args` to collect all input arrays.
2. Create an empty result array.
3. Loop through each array in `args`.
4. Inside that, loop through each item and push it to the result.
5. Return the final concatenated array.
*/

function concat(...args) {
    // Your code here
    
}
  
module.exports = concat;
  