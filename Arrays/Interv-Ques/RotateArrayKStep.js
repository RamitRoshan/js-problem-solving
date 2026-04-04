/*
Rotate array by K steps (left/right):

Input: [1, 2, 3, 4, 5], K = 2 (right rotation)
Output: [4, 5, 1, 2, 3]
*/

//Right Rotation
const arr = [1, 2, 3, 4, 5];
let k = 2;

k = k % arr.length; // handle large k

const result = arr.slice(-k).concat(arr.slice(0, arr.length - k));

console.log(result); // [4, 5, 1, 2, 3]


//Left Rotation
const arr1 = [1, 2, 3, 4, 5];
let k1 = 2;

k1 = k1 % arr1.length;

const result1 = arr1.slice(k1).concat(arr1.slice(0, k1));

console.log(result1); // [3, 4, 5, 1, 2]