//fn are special object in JavaScript

// function greet(name){
//     return `Hello, ${name}`;
// }
// //invoking a function
// console.log(greet('punith'));

// console.log(typeof greet); //function -> Functions are special objects in js
// console.log(greet.length); //1 (length property)

// //invoking a function
// console.log(greet.call({}, 'mark'));  //Hello, mark (call methods)





// const today = new Date();  //2025-08-21T09:19:12.948Z
// console.log(today);
// console.log(today.getFullYear());  //2025
// console.log(today.getMonth()); //7


//Object literal(single object is called as an Object literal)
const person = {
    // key: value
    //Storing information
    firstName: 'Punith',
    lastName: 'raj',
    //methods - adds behaviour to object
    //methods are functions inside an object
    //Property which holds fucntion as a value is a method
    fullName: function(){  //use to declare methods (here fullName is reference variable)
        //inside a method this refers to current object
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(person.fullName());  //punit raj
