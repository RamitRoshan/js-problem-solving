// const city = "Bangalore";

// function print(){
//     const location = "Jayanagar";
//     console.log(city, location);
// }
// print();
// console.log(city);
// // console.log(location); //reference error


//var function scope
function print(){  //function scope
    if(true){  //block scope - {  }
        var msg = "Hii there"; //declaring a variable inside the block, it will still be 
        //available, inside the print(), because var keywords are function scoped
        console.log('inside block', msg);
    }
    console.log('outside block', msg); // ✅ still works
 // function scope ends
}
print();
// console.log('outside function', msg);  //Reference error