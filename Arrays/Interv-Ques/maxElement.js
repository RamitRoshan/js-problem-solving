/*
Find the maximum element in an array:

Input: [3, 7, 2, 9, 5]
Output: 9

*/

const arr = [3, 7, 2, 9, 5];

let max = arr[0]; // better than -Infinity (if array not empty)
// let max = -Infinity;

for(let i=0; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}

console.log(max);