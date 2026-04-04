/*
Given an array of integers and a target value, find the indices of the two numbers such that they add up to the target.

Input:
Array: [2, 7, 11, 15]
Target: 9

Output:
[0, 1] (because 2 + 7 = 9)
*/

const arr =[2, 7, 11, 15];
let target = 9;
let result = [];

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i] + arr[j] === target){
            result = [i, j];
        }
    }
}
console.log(result);