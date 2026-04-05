/*
Check if two strings are anagrams

Input:
s1 = "listen"
s2 = "silent"

Output:
true
Explanation: Both the string have same characters with same frequency. So, they are anagrams.
*/

const s1 = "listen";
const s2 = "silent";

//edge cases
if(s1.length !== s2.length){
    return;
}

//sort both strings(main logic)
let result = s1.split('').sort().join('');
let result1 = s2.split('').sort().join('');

console.log(result);
console.log(result1);


console.log(result === result1);