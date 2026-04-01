/*
Move all zeros to end:

Input: [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]
*/


/*
## 2-pointer approach

i → scans the array (checks every element), only finds the non-zero elements 
(observer 👀 (moves everywhere)).

j → stores position where next non-zero should go, j is  also responsible for placing 
non-zero elements in correct position. (placer 📦 (places non-zero elements at front))
*/
const array = [0, 1, 0, 3, 12];

let j = 0; //position for next non-zero

for(let i=0; i<array.length; i++){
    if(array[i] !== 0){
        // swap arr[i] and arr[j]
        let temp = array[i];
        array[i] = array[j];
        array[j]  = temp;

        j++;
    }
}
console.log(array);  // T.C = O(n) & S.C = O(1)








//2nd approach
// const arr = [0, 1, 0, 3, 12];
// let j = 0;

// // place non-zero elements
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//         arr[j++] = arr[i];
//     }
// }

// // fill remaining with 0
// for (let i = j; i < arr.length; i++) {
//     arr[i] = 0;
// }

// console.log(arr);  // T.C = O(n) & S.C = O(1)