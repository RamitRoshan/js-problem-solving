/*
Find the minimum element in an array:

Input: [3, 7, 2, 9, 5]
Output: 2
*/

const arr = [3, 7, 2, 9, 5];
let min = Infinity;

for(let i=0; i<arr.length; i++){
    if(arr[i] < min){
        min = arr[i];
    }
}
console.log(min);