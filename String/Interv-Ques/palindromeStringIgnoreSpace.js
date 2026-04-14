/*
Check if a String is Palindrome (Ignore Spaces & Case)

Q1
Input: "A man a plan a canal Panama"
Output: true

Q2
Input: "race a car"
Output: false

Q3
Input: "No lemon no melon"
Output: true

Q4
Input: "Hello"
Output: false
*/

// const str = "A man a plan a canal Panama";
// let cleaned = str.replace(/\s/g, "").toLowerCase();

// console.log(cleaned);
// let reversed = cleaned.split("").reverse().join("");

// // console.log(cleaned === reversed);

// if(cleaned === reversed){
//     console.log("true");
// }else{
//     console.log("false");
// }


//2nd methods 
const str = "A man a plan a canal Panama";

//remove spaces + make lowercase
let cleaned = str.replace(/\s/g, "").toLowerCase();

//reverse
let reversed = "";
for (let i = cleaned.length - 1; i >= 0; i--) {
    reversed += cleaned[i];
}

if (cleaned === reversed) {
    console.log(true);
} else {
    console.log(false);
}