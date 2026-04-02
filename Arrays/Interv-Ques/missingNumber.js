/*
Find missing number (1 to N):

Input: [1, 2, 4, 5] (N = 5)
Output: 3
*/

const arr = [1, 2, 4, 5];

let n = 5;

let expectedSum = n*(n+1)/2;

let actualSum = 0;
for(let i=0; i<arr.length; i++){
    actualSum = actualSum + arr[i];
}

//missing 
let missing = expectedSum - actualSum;
console.log(missing);