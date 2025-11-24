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


// # With delay
