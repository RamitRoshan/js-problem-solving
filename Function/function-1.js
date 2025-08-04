//A function is a reusable block of code designed to perform a specific task.


// ## Fucntion Declaration
// function add(a,b){
//     return a+b;
// }

 //function invocation
// console.log(add(11,20));



//## function expression

const add = function(a,b){
    return a+b;
}
//invoking the function
console.log(add(10,20));


//##  Reusability (using function expression)
const isEven = function(ele){
    return ele% 2  == 0;
}
console.log(isEven(10));
console.log(isEven(11));

const arr = [10, 11, 12, 13, 14, 15];
const result = arr.filter(isEven);
console.log(result);