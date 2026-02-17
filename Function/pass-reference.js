const fruits = ['mango', 'apple'];
console.log('outside the function before invocation:', fruits); //['mango', 'apple']

function addFruit(fruit1, newFruit){
    console.log('inside function before adding:', fruits); //['mango', 'apple']
    //any changes made to an object, will reflect outside the function, bcoz of pass by reference
    fruit1.push(newFruit);
    console.log('inside function after adding', fruit1); // [ 'mango', 'apple', 'orange' ]
}
addFruit(fruits, 'orange');
console.log('outside the function after invocation', fruits); //[ 'mango', 'apple', 'orange' ]




