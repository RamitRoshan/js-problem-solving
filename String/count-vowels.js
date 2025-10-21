// Q). Count the numbers of Vowels in the String
// O/p- 2

const str = "javascript";
let vowels = "aeiou";
let count = 0;

for(let i=0; i<str.length; i++){
    if(vowels.includes(str[i])){
        count++;
    }
}
console.log(count);