const str = "java";

//reverse a string 
//i/p: java and o/p: avaj


//inbuilt methods
//let reverse = str.split("").reverse().join("");
//console.log(reverse);

//without methods
let result = "";
for(let i= str.length-1; i>=0; i--){
    result = result+ str[i];
}

console.log(result);



 