// some() and every() returns boolean- true/false

//some() -> one or more elements should satisfy the condition
// const arr1 = {a:1, b:2, c:3};
// //one or more even number
// const result = arr1.some((ele) => {
//     return ele %2 == 0;
// });
// console.log(result);


// //every() -> every(all) elements should satisfy the conditions
// const arr2 = [99, 101, 103];
// // check every element is odd
// const result2 = arr2.every((ele) => {
//     return ele %2 != 0;
// });
// console.log(result2);



const obj = {a:1, b:2, c:3};
for(let key in obj){
    console.log(`key - ${key} : value - ${obj[key]}`);
}

Object.keys([obj]).forEach((key) => {
    console.log(key, obj[key]);
});