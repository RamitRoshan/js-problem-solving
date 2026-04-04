/*
Count vowels and consonants in a string

Input: "programming"
Output: Vowels: 3, Consonants: 8
*/

const str = "programming";

let vowels = "aeiouAEIOU";

let vowelsCount = 0;
let consonentCount = 0;

for(let i=0; i<str.length; i++){
    if(vowels.includes(str[i])){
        vowelsCount++;
    }else{
        consonentCount++;
    }
}

console.log("Count of vowels is: " + vowelsCount);
console.log("Count of consonents is: " + consonentCount);