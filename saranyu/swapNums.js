/*
Swap Two Variables (Without Temp)

Question:
Swap two numbers without using a third variable.

Input:

a = 5, b = 10

Output:

a = 10, b = 5
*/



//solved without using temp 
let a = 5;
let b = 10;

a = a + b; // a = 15
b = a - b; // b = 5
a = a - b; // a = 10

console.log(a, b); // 10, 5








//solved using temp 
// let a = 5;
// let b = 10;

// let temp = a;
// a = b;
// b = temp;

// console.log("value of a after swap: " + a);
// console.log("value of b after swap: " + b)