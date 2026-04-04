/*
Check if a string is a palindrome or not :

Input: "madam"
Output: true

Input: "hello"
Output: false
*/

const str = "madam";

let reverseResult = "";
for(let i=str.length-1; i>=0; i--){
    reverseResult = reverseResult + str[i];
}

if(str === reverseResult){
    console.log("true");
}else{
    console.log("false");
}