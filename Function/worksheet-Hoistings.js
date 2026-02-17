/*
//Q1). what will this log
console.log(a);
var a = 10;  //undefined


//Q2) will this throw an error
greet();
function greet(){
    console.log("Hello");
} //No

//Q3) will this work correctly ?
sayHello();
var sayHello = function(){
    console.log("hi");
};
//ans: No(TypeError: sayHello is not a function) 
, becz we used here function expression 

*/
//Q4). What will this log?
// var x = 5;
// function test(){
//     // var x; // 👈 Hoisted to the top, but value = undefined
//     // console.log(x); // prints undefined
//     // x = 10; // now value becomes 10, but too late
//     console.log(x);
//     var x = 10;
//     console.log(x);  //10
// }
// test(); 

//ans: undefined, 10

// Because of hoisting, the var x inside the function shadows the outside x.
// When console.log(x) runs, that local x exists but is still undefined.

// That’s why output = undefined. ✅



//Q5). What will happen here
// console.log(typeof name);
// var name = "Alex";   //undefined 


//✅ Part 2: Predict the output
// Q) What will the following code print or do?

//1.
console.log(msg);
var msg = "hii"; //undefined

//2.
print();
function print(){
    console.log("printed");
}  //printed 