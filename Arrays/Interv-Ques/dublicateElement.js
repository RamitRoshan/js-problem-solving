/*
Find duplicate element : 
Input: [1, 3, 4, 2, 2]
Output: 2
*/

const arr = [1, 3, 4, 2, 2];
let result;

arr.sort((a, b) => a - b);
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[i + 1]) {
    result = arr[i];
  }
}
console.log(result);
