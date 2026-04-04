/*
Find union of two arrays: 
Input: [1, 2, 3, 4], [3, 4, 5, 6]
Output: [1, 2, 3, 4, 5, 6]
*/

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

let union = [];

// add all elements of arr1
for(let i=0; i<arr1.length; i++){
    union.push(arr1[i]);
}

// check elements of arr2
for(let i=0; i<arr2.length; i++){
    let isPresent = false;

    for(let j=0; j<union.length; j++){
        if(arr2[i] === union[j]){
            isPresent = true;
            break;
        }
    }

    if(!isPresent){
        union.push(arr2[i]);
    }
}
console.log(union);