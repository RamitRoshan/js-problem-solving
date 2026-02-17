// A closure in JS is a feature where an inner fn has access to the outer fn variables, even after the outer fn has finished executing 

function main(name){
    function sayMyName(){
        console.log(name);
    }
    return sayMyName;
}

let consoleRamit = main("Ramit");
console.log(consoleRamit);