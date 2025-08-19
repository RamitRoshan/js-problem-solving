//Q1)
// let name = "Ava";
// function showName(){
//     console.log(name);
// }
// showName();  //Ava

//Q2)
// let city = "Delhi";
// function printCity(){
//     console.log(city);
// }
// printCity();


//Q3)
// let score = 0;
// function increaseScore(){
//     score = score + 10;
// }
// increaseScore();
// console.log(score);

//Q4).
// const country = "India";
// function accessOut(){
//     console.log(country);
// }
// accessOut();

//Q5). Modify the global variable count inside the function
// let count=0;
// function updateCount(){
//     count = count+1;
// }
// updateCount();
// //If we call updateCount() multiple times, the value will keep increasing.
// updateCount();
// console.log(count);  //2

//Q6). Access a global variable language from inside two different fucntions
// let language = "JavaScript";
// function showLang(){
//     console.log(language);
// }
// function printLang(){
//     console.log(language);
// }
// showLang();
// printLang();


//Q7). Set a global variable inside one function, use it in another
// let user;
// function login(){
//     user = "Admin";
// }
// function greet(){
//     console.log("Welcome," + user);
// }
// login();
// greet();

//Q8). Declare a variable inside a function and try to log it outside
// function greet(){
//     var message = "Hello";
//     console.log(message);
// }
// greet();

// //here it will give Refernce error, because varibale is declare  inside the functional scope..
// console.log(message); 


//Q9). Can this variable be accessed outside the fucntion?
// function test(){
//     let num = 5;
// }
// console.log(num); //Reference Error