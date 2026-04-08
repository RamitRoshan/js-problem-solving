/*
Count number of words in a string

Input:
"Java is very easy"

Output:
4
*/

const str = "Java is very easy";

let words = str.split(" ");

console.log(words);

let count  = 0;

for(let i=0; i<words.length; i++){
    count++;
}
console.log(count);