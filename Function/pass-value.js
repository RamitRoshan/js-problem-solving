let a = 10, b=20;

console.log('outside the function before invocation: ', 'a', a, 'b', b); //10 20

function alter(a,b){
    console.log('inside function before updating: ', 'a', a, 'b', b); //10 20

    a = 100, b=200;
    console.log('inside function after updating: ', 'a', a, 'b', b); //100 200
}
alter(a,b); //primitive datatype - are pass by value.
//console.log(alter(a,b)); //undefined
console.log('outside function after invocation: ', 'a', a, 'b', b); //10 20 