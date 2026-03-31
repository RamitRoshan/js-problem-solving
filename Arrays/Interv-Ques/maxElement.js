/*
Find the maximum element in an array:

*/

const arr = [1,2,3,4,5];

let max = arr[0]; // better than -Infinity (if array not empty)
// let max = -Infinity;

for(let i=0; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}

console.log(max);