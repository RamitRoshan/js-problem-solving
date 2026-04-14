/*
Remove all occurrences of a character from string

Input:
str = "banana"
char = 'a'

Output:
"bnn"

Input:
str = "hello world"
char = 'l'

Output:
"heo word"
*/


const str = "banana";

let result = "";

for(let i=0; i<str.length; i++){
    let ch = str[i];

    if(ch !== 'a'){
        result = result + ch;
    }
}

console.log(result);