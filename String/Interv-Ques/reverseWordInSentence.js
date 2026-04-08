/*
Reverse words in a sentence (preserve word order)

(means reverse each word, not sentence order)

Input:
"hello world"

Output:
"olleh dlrow"
*/

const str = "hello world";

let words = str.split(" "); 
console.log(words); //[ 'hello', 'world' ]
 


let result = ""; 

for (let i = 0; i<words.length; i++) {
    let reverseWord = words[i].split("").reverse().join(""); //olleh /n dlrow
    result = result  +  reverseWord + " ";
}
console.log(result.trim()); //removing extra spaces.


