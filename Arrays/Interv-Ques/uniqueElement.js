/*
Unique element in array (element that appears only once):
(single unique element case: mostly asked)
Input: [2, 3, 2, 4, 4]
Output: 3
*/

const arr = [2, 3, 2, 4, 4];
let result;

arr.sort((a, b) => a - b);
console.log(arr);

for(let i=0; i<arr.length; i++){
    if(arr[i] !== arr[i-1] && arr[i] !== arr[i+1]){
        result = arr[i];
    }
}

console.log(result);



/*
=>
    Multiple Unique elements
    Input: [1, 2, 3, 2, 1, 4, 5, 4]
    Output: [3, 5]
*/
const array = [1, 2, 3, 2, 1, 4, 5, 4];

array.sort((a, b) => a - b);

let result1 = [];

for (let i = 0; i < array.length; i++) {
    //check both sides of array
    if (array[i] !== array[i - 1] && array[i] !== array[i + 1]) {
        result1.push(array[i]);
    }
}

console.log(result1);