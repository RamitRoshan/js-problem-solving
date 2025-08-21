
//var - function scoped, can redeclare, can reassign, hoisted
//only the variable declaration gets hoisted to the top of the scope

// console.log(city); //undefined
// var city = "bangalore";
// console.log(city); //bangalore



/*

//🔹 var vs let (in real projects with multiple developers)

// Example with var:

// Developer 1
var ip_address = "192.168.1.1";

// Developer 2 (accidentally redeclares)
var ip_address = "127.0.0.1";


// ✅ No error.
// ❌ But the original value is silently overwritten.
// 👉 This can create bugs that are hard to track because Developer 1 won’t even know why the value changed.


// Example with let:

// Developer 1
let ip_address = "192.168.1.1";

// Developer 2 (tries to redeclare)
let ip_address = "127.0.0.1";  // ❌ Error: Identifier 'ip_address' has already been declared


// ❌ It throws an error immediately.
// ✅ Safer, because you know when the same variable is declared again.

// Reassignment with let:
let ip_address = "192.168.1.1";
ip_address = "127.0.0.1"; // ✅ Allowed (only value changes, not redeclaration)

// 📝 Key Notes:

// var → Function-scoped, allows redeclaration (dangerous in big projects).

// let → Block-scoped, does not allow redeclaration in the same scope.

// With let, you still can reassign values (just not redeclare).

// Safer in team projects because it prevents silent overwrites.

*/


//block scope
// function print(){ //function scope
//     console.log('inside print', msg);  //undefined
//     if(true){  //block scope
//         var msg = "hi there";
//     }
//     console.log(msg);
// }
// print();
// console.log('outside', msg); //ReferenceError: msg is not defined



//✅function expression are not hoisted
// sayHi();
// var sayHi = function(){
//     console.log("Hi");
// }



console.log(typeof username);  //undefined
var username = "aditi";
console.log(typeof username);  //string