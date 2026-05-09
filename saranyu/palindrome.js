/*
Palindrome Check (without using methods)
Question:
Check if a string is a palindrome (same forward & backward).

Input: "madam"
Output: Palindrome

Input: "hello"
Output: Not Palindrome

*/


const str = "hello";

let reverseResult = "";

for(let i=str.length; i>=0; i--){
    reverseResult += str[i];
}

if(str === reverseResult){
    console.log("Palindrome");
}else{
    console.log("Non Palindrome");
}