//practicing Questions 


/*
Q1). Reverse a String in J.S
*/
// const str = "java";
// const reverse = str.split("").reverse().join("");
// console.log(reverse);


//Q2) Split the string
// const str1 = "js, react, java";
// const splitStr = str1.split(",");
// console.log(splitStr);

//Q3). Reverse a String without in-build methods
// const str = "mulla";
// let result = "";
// for(let i= str.length-1; i>=0; i--){
//     result = result + str[i];
// }
// console.log(result);


//Q4). Remove Dublicates
const str = "aabbcdeabec";
let result = ""
for(let i=0; i<str.length-1; i++){
     let char = str[i];

     if(!result.includes(char)){
        result += char;
     }
}
console.log(result);


//Q5). 

  
