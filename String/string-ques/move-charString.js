// const str = "jAvAScRIpt";

//all the capital letters comes first followed by small letters
//o/p: "AASRIjvcpt"

// let result = "";

// for(let i=0; i<str.length; i++){
//     const char = str[i];
//      if (char >= 'A' && char <= 'Z') {
//         result = result + char;
//     }
     

// }

 
// for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (char >= 'a' && char <= 'z') {
//         result = result + char;
//     }
// }
// console.log(result);



const str = "jAvAScRIpt";

let capitalLetters = "";
let smallLetters = "";

for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= 'A' && char <= 'Z') {
        capitalLetters = capitalLetters + char;
    } else if (char >= 'a' && char <= 'z') {
        smallLetters = smallLetters + char;
    }
}

const result = capitalLetters + smallLetters;
console.log(result); // Output: "AASRIjvcpt"
