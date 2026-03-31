/*
Reverse an array (without using built-in):
Input: [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]
*/


// const arr = [1, 2, 3, 4, 5];

// let result = [];

// for(let i=arr.length-1; i>=0; i--){
//     result.push(arr[i]);
// }
// console.log(result);


//2nd methods: Built-in method
// const arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);


//3rd methods: In-place (no extra space)

const arr = [1, 2, 3, 4, 5];

let start = 0;
let end = arr.length - 1;

while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
}
console.log(arr);