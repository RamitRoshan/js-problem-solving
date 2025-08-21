/*
let city = "bangalore"

function workLocation(){
    let city = "Mysore";
    console.log(city);
}
console.log(city);
workLocation();

// bangalore
// Mysore

*/


//char is a lexical scope here 
function getValues(arr, char){
    const result = arr.filter((ele) => {  //arrow fns scope
        return ele === char;
    })
    return result;
}
console.log(getValues(['a','a', 'b', 'b', 'c']));   //['b', 'b']