/*
reduce() - applies a function to an accumulator and each
element of the array, reducing it to a single value.
*/

//Q). find sum of the array using reduce.

// const arr = [100,150,200,250];

// const result = arr.reduce(function(acc,cv){  //cv-current value
//     return acc + cv;
// },0);
// console.log(result);


//Q). Find the total length of character/String in the array
//output: 9

const arrStr = [ 'abc', 'de', 'fghi'];
const result = arrStr.reduce(function(acc,cv){
    return acc + cv.length;
},0);
console.log(result);
