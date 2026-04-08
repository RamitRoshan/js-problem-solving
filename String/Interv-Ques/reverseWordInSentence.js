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

let result = "";

for (let i = words.length - 1; i >= 0; i--) {
    result = result + words[i];
}

console.log(result);
