/*
Check if array is sorted or not:

Input: [1, 2, 3, 4, 5]
Output: Sorted

Input: [1, 3, 2, 5, 4]
Output: Not Sorted
*/

const arr = [1, 2, 3, 4, 5];

let isSorted = true;

for(let i=0; i<arr.length; i++){
    if(arr[i] > arr[i+1]){
        isSorted = false;
        break;

    } 
}

if(isSorted){
    console.log("Sorted");
}else{
    console.log("Not Sorted");
}
