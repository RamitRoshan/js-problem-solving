
// ## arrow functions 

//const array = [10, 11, 12, 13, 14];

// const getEvens = (arr) =>{
//     const result = arr.filter(ele => ele % 2 == 0);
//     return result;
// }
// console.log(getEvens(array));  //[10, 12, 14]


// const getEvens = function(arr) {
//     const result = arr.filter(ele => ele % 2 == 0);
//     return result;
// }
// console.log(getEvens(array));  //[10, 12, 14]




//Q) adding array with particular indexes

// const numbers = [5, 6, 7];
// //function expression with arrow functions
// const addIndex = (arr) => {
//     const result = arr.map((ele, i) => ele + i);
//     return result;
// }

//2md method i.e in single line
const nums = [5, 6, 7];
const addIndex = arr => arr.map((ele, i) => ele + i);
console.log(addIndex(nums));  //[5,7,9]