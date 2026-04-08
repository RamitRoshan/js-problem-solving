/*
Find longest word in a sentence

Input:
"I love programming in Java"

Output:
"programming"
*/

const str = "I love programming in Java";

let words = str.split(" ");
console.log(words);

let longest = "";

for(let i=0; i<words.length; i++){
    if(words[i].length > longest.length){
        longest = words[i];
    }
}
console.log(longest);
