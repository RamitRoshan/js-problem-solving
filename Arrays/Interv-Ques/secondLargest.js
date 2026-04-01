/*
Find second largest element:

Input: [3, 7, 2, 9, 5]
Output: 7
*/

const arr = [3, 7, 2, 9, 5];
let max = -Infinity;
let secondMax = -Infinity;

for(let i=0; i<arr.length; i++){
    if(arr[i] > max){
        secondMax = max;
        max = arr[i];

    }else if(arr[i] > secondMax && arr[i] !== max){
        secondMax = arr[i];
    }
}
console.log(secondMax);