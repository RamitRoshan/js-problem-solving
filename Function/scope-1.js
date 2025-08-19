// for(var i=0; i<=3; i++){
//     console.log(i);
// }
// console.log('outside: ', i);

//Lexical scope: inner functions have access to variables in their outer scope

// function fnOne(){
//     const city = "Bangalore";
//     function fnTwo(){
//         const location = "Basavanagudi";
//         console.log('function two', city, location);
//     }
//     fnTwo();
//     // console.log(location); //ReferenceError: location is not defined
// }
// fnOne();


const country = "India";
function fnOne(){
    const city = "Bangalore";
    const location = "Basavanagudi";
    function fnTwo(){
        console.log('function two', city);
        function fnThree(){
            console.log('function three', location);
            console.log('f3', country);
        }
        fnThree();
    }
    fnTwo();
    // console.log(location); //ReferenceError: location is not defined
}
fnOne();