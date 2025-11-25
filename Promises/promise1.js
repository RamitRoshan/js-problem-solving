/*
finding number is even or odd using promises
but here istead hardcoding the number , we are
generating the random number and based on the 
random number we are declaring it is even or odd.
*/

const myPromise = new Promise((resolve, reject) => { 

    const number = Math.round(Math.random() * 100);
    if(number % 2 === 0){
        //even
        resolve(number); //resolve the promise with a value
    } else{
        //odd
        // reject(number);

        //rejected with error
        reject(new Error(`${number} is odd`));  // reject the promise with an error
    }
});
 
// Promise consuming code....
myPromise
   .then((n) => {
    console.log('even number', n);
   }) // If the number is even - fulfill(resolve) the  promise.
    .catch((m) => {
        console.log('odd number', m);
    }) // If the number is odd - reject the promise.
