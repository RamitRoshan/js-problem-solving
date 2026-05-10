/* Count Vowels and Consonants

Question:
Count number of vowels and consonants in a string.

Input: "hello world"

Output:
Vowels: 3
Consonants: 7
*/

const str = "hello world";

let vowels = "aeiouAEIOU";

let vowelsCount = 0;
let consonentCount = 0;

for(let i=0; i<str.length; i++){
    if(vowels.includes(str[i])){
        vowelsCount++;

    }else if((str[i] >= 'a' && str[i] <='z') || (str[i] >='A' && str[i] <= 'Z')){
        consonentCount++
    }
}

console.log("Vowels: "+ vowelsCount);
console.log("Consonants: " + consonentCount);