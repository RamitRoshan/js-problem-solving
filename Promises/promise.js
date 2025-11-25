/*

 * Whenever, we are working with promises, 
 then there are 2 parts to Promise code.

1. promise producing code

it is, producing the promise.

2. promise consuming code

it is, consuming the promise.

90 -95% of the time, we will be working with 
*promise consuming code.

we do an API call: 
(here, we are consuming promise code)
axios.get()
    .then()
    .catch()

- using post method, to create .then & .catch
axios.post()
    .then()
    .catch()



    Product.find()
        .then()
        .catch()

    Product.save()
        .then()
        .catch()


- try & catch and then & catch both are same
 */



// Q). Creating a promise object, either resolve it  or reject it. 👇

// # Without delay
//Promise producing code
// Create a promise object - this return's number
// via a constructor fn we create a promise object
const myPromise = new Promise((resolve, reject) => {
    console.log(typeof resolve, typeof reject); //both are fns
    const number = 10;
    if(number % 2 === 0){
        //even
        resolve();
    } else{
        //odd
        reject();
    }
});



// The fn, we are passing in .then() is resolve method
// and the fn we are passing in catch() is reject
 
// Promise consuming code....
myPromise
   .then(() => {
    console.log('even number');
   }) // If the number is even - fulfill(resolve) the  promise.
    .catch(() => {
        console.log('odd number');
    }) // If the number is odd - reject the promise.

  


//Q).  Sum function    
// function sum(arr){
//     return arr.reduce((acc, cv) => acc + cv);
// }
// console.log(sum([10, 20, 30]));   //o/p: 60  



/* 
Q) There is a match, if India won I have to call
a happy function, & If India lose I have to call a
Lost Functions.. 
*/
// function match(happy, sad) {
//     let indiaWon = true;
//     //if it is true..
//     if(indiaWon){
//         //function invoked
//         happy();
//     }else {
//         sad();
//     }
// }
// function happy() {
//     console.log('YaY! we won');
// }

// function sad() {
//     console.log('shit! we lost');
// }
// match(happy, sad);



/*
Q). create a promise object which determines the
length of the password.
If the password length is 8 characters and more then
resolve the promise, else reject the promise.
*/
const passwordPromise = new Promise((resolve, reject) => {
    //logic written
    const password = "secret@123";
    if(password.length >= 8){
        resolve();  //fulfilled
    }else {
        reject();  //reject
    }
});

passwordPromise
    .then(() => {
        console.log('promise resolved');
    })
    .catch(() => {
        console.log('promise rejected');
    })