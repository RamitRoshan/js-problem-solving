// console.log(this);  //{}


// //function declaration
// function f1(){
//     console.log(this);
// }
// f1(); //Global function


// //function expression
// const f2 = function(){
//     console.log(this);
// }
// f2();  //global object

//arrow function
// const af = () => {
//     console.log(this);
// }
// af();   //{}(empty object)



// const person = {
//     name: 'john',
//     details: function(){
//         console.log(this.name);  //current object
//     }
// }
// person.details();


// What is the value of this keyword inside an arrow function ? 

//exammple 1: global scope - this - {}
// const af1 = () => {
//     console.log(this); //{}
// }
// af1();


//example 2:
// function f1() {
//     //this - global object
//     const af2 =() => {
//         console.log(this);
//     }
//     af2();
// }
// f1();



//Ques). can I declare a method using arrow functions
const person = {
    name: 'john',
    details: () => {
        console.log(this);  //{}
    }
}
person.details();