/*
2. Missing Number (1 to 100)

Question:
Find the missing number from an array containing numbers from 1 to 100.

Input: [1, 2, 3, 4, 6, 7, 8, ..., 100]

Output: 5
*/

const arr = [1, 2, 3, 4, 6, 7, 8,9,10];
let n = 10;


let expectedSum = n*(n+1)/2;

let actualSum = 0;

for(let i=0; i<arr.length; i++){
    actualSum += arr[i];
}

let result = expectedSum - actualSum;
console.log(result);
