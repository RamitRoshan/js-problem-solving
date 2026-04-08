/*
Capitalize first letter of each word

Input:
"java is fun"

Output:
"Java Is Fun"
*/

const str  = "java is fun";

let words = str.split(" ");

let result = "";

for(let i=0; i<words.length; i++){
    let capitalFirst = words[i].charAt(0).toUpperCase() + words[i].slice(1);  //slice(1) → rest of the word
    result = result + " " + capitalFirst;
}

console.log(result.trim());
