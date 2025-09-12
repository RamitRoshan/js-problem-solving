/*
=====================================
Assignment: Tuck in Array
=====================================

Create a function that takes two arrays and inserts the second array 
in the middle of the first array.

Function Signature:
function tuckIn(arr1, arr2): any[]

Examples:
tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
tuckIn([15, 150], [45, 75, 35]) => [15, 45, 75, 35, 150]
tuckIn([[1, 2], [5, 6]], [[3, 4]]) => [[1, 2], [3, 4], [5, 6]]

Hints:
- Assume the first array always has exactly two elements: start and end.
- Use a loop to add elements: start with arr1[0], then all of arr2, then arr1[1].
- Optionally, use `[arr1[0], ...arr2, arr1[1]]` with spread syntax.

Step-by-Step Algorithm:
1. Create a new result array and add the first element of arr1.
2. Loop through arr2 and push each item into result.
3. Push the second element of arr1 to the result.
4. Return the result.
*/

function tuckIn(arr1, arr2) {
    // Your code here

}
  
module.exports = tuckIn;
  