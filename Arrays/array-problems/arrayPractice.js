/* Q1). Write a JavaScript function to check whether an `input` is an array or not.

Test Data :
console.log(is_array('w3resource'));

console.log(is_array([1, 2, 4, 0]));

false
true
*/

// function checkArray(arr){
//     return Array.isArray(arr);
// }
// console.log(checkArray([1,2,4,0]));


/* Q2). Clone Array
Write a JavaScript function to clone an array.

Test Data :

console.log(array_Clone([1, 2, 4, 0]));

console.log(array_Clone([1, 2, [4, 0]]));

[1, 2, 4, 0]

[1, 2, [4, 0]]
 */

// function cloneArray(arr){
//     return arr.slice(0);
// }
// console.log(cloneArray([1,2,4,0]));
// console.log(cloneArray([1, 2, [4, 0]]));



/*Q3).First Elements of Array

Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

Test Data :

console.log(first([7, 9, 0, -2])); // 7

console.log(first([],3)); //[]

console.log(first([7, 9, 0, -2],3)); //[7,9,0]

console.log(first([7, 9, 0, -2],6)); //[7,9,0,-2]

console.log(first([7, 9, 0, -2],-3)); //[]
*/

// function firstEle(arr,n){
//     if(arr == null) return [];
//     if(n == null) return arr[0];
//     if(n<0) return [];
//     return arr.slice(0,n);
// }
// console.log(firstEle([7,9,0,-2]));
// console.log(firstEle([],3)); //[]
// console.log(firstEle([7, 9, 0, -2],3)); //[7,9,0]



/* Q4).Last Elements of Array

Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]
*/

function lastEle(arr, n){
    if(arr == null) return [];
    if(n == null) return arr[arr.length-1];  //last element
    if(n<0) return [];
    return arr.slice(-n);
}
console.log(lastEle([7,9,0,-2]));
console.log(lastEle([7, 9, 0, -2],3));
console.log(lastEle([7, 9, 0, -2],6));

