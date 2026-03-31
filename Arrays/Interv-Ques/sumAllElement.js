/*
Calculate sum of all elements:
Input: [3, 7, 2, 9, 5]
Output: 26
*/

const arr = [3, 7, 2, 9, 5];
let sum = 0;

for(let i=0; i<arr.length; i++){
    sum = sum + arr[i];
}
console.log(sum);