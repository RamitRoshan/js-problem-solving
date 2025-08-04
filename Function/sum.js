// function add(a,b){
//     const sum = a+b;
//     return sum;
// }
// console.log(add(10,20));

/* Think of return as:
 "Packing the result and sending it back to whoever called the function."
*/


// const a = Number(prompt("Enter first number: "));
// const b = Number(prompt("Enter second number: "));

// function add(a,b){
//     const sum = a +b;
//     return sum;
// }
// console.log(add(a,b));


function add(a, b){
    const sum = a+b;
    return sum;
}
console.log(add(3,4));

//convert to arrrow function

const arrowF = (a, b) => {
    const sum = a+b;
    return sum;
}
console.log(arrowF(5,3));