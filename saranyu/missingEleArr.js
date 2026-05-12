/* Missing Element Between Two Arrays
Question: Find the missing element when one array has one element less.

Input:
arr1 = [1, 2, 3, 4, 5]
arr2 = [1, 2, 4, 5]

Output: 3

Logic:
Add all numbers in arr1
Add all numbers in arr2
Subtract → missing number
*/

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 4, 5];

let sum1 = 0;
let sum2 = 0;

for(let i=0; i<arr1.length; i++){
    sum1 = sum1 + arr1[i];
}
console.log(sum1);

for(let j=0; j<arr2.length; j++){
    sum2 = sum2 + arr2[j];
}
console.log(sum2);


let missingEle = sum1 - sum2;
console.log(missingEle);