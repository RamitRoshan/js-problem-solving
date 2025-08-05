/*
reduce() - applies a function to an accumulator and each
element of the array, reducing it to a single value.
*/

//Q). find sum of the array using reduce.

const arr = [10,20,30,40];

const total = arr.reduce(function(acc,curr){
    return acc + curr;
},0);
console.log(total);