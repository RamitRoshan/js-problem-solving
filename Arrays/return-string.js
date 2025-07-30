// const arr = [1, 'a',2, 'b', 3, 'c'];

//o/p = 'abc'

// let result = "";
// for(let i=0; i<arr.length; i++){
//     let ch = arr[i]; 
//     if(typeof ch === 'string'){
//         result  = result + ch;
//     }
// }
// console.log(result);


//using filter
const arr = [1, 'a',2, 'b', 3, 'c'];

const result = arr.filter(item => typeof item === 'string').join('');  

console.log(result);  

// Explanation :
// filter(item => typeof item === 'string') =>  shows only elements like 'a', 'b', 'c'

// join('') => combines them into a single string without spaces

