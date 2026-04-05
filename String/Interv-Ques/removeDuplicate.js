/*
Remove duplicates from a string :
Input: "programming" → Output: "progamin"
*/


const str = "programming";

let result = "";

for(let i=0; i<str.length; i++){
    console.log(str[i]);
    if(!result.includes(str[i])){
        result += str[i];
    }
}
console.log(result);