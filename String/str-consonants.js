//Return only consonants here
const str = "javascript";

let vowels = "aeiou";
let consonants = "";


for(let i =0; i<str.length; i++){
    
    if(!vowels.includes(str[i])){
        consonants = consonants + str[i];
    } 
}
console.log(consonants); // Output: jvscrpt

// !vowels.includes(str[i] → checks if the character is not a vowel

