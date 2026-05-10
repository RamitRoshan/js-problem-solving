/*Find Duplicates in Array

Question: Find duplicate elements in an array.

Input: [1, 2, 3, 4, 2, 5, 3]

Output: [2, 3]
*/

const arr = [1, 2, 3, 4, 2, 5, 3];

arr.sort((a,b) => a-b);

//console.log(arr);

let result = [];

for(let i=0; i<arr.length-1; i++){
    if(arr[i] === arr[i+1]){
        result[result.length] = arr[i];
    }
}

console.log(result);