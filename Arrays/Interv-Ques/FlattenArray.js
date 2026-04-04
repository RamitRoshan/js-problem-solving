/*
Flatten an array:
Input:
[1, [2, 3], 4]
Output:
[1, 2, 3, 4]
*/

// const arr = [1, [2, 3], 4];
// let flatArr = arr.flat(Infinity);
// console.log(flatArr);


//Without using in-built flat 
// const arr = [1, [2, 3], 4, [5,6]];

// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (Array.isArray(arr[i])) {
//     for (let j = 0; j < arr[i].length; j++) {
//       result.push(arr[i][j]);
//     }
//   } else {
//     result.push(arr[i]);
//   }
// }
// console.log(result);

/*

Solve using Recursion (important for interview)

Deep flatten array (infinite nesting) 🔥🔥
Input:
[1, [2, [3, [4]]]]
Output:
[1, 2, 3, 4]
*/
 
function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

const arr = [1, [2, [3, [4]]]];
console.log(flatten(arr));

