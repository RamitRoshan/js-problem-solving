/* Find Common Elements in Two Arrays

Question:
Find common elements between two arrays.

Input:
arr1 = [1, 2, 3, 4]
arr2 = [3, 4, 5, 6]

Output: [3, 4]
*/

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

let result = [];


for(let i=0; i<arr1.length; i++){
    let ch = arr1[i];

    for(let j=0; j<arr2.length; j++){
        let ch1 = arr2[j];

        if(ch === ch1){
            result.push(ch);
        }
    }
}
console.log(result);   // [3,4]
