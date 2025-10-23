//given a string , and if the character is vowels then make it a Uppercase.

const str = "javascript";
const vowels = "aeiou";
let result = "";

for(let i =0; i< str.length; i++){

    if(vowels.includes(str[i])){
        result = result + str[i].toUpperCase();
    }else{
        result = result+ str[i];
    }
}
console.log(result);

// str.split("").forEach((char) => {
//     if (!vowels.includes(char)) {
//         result = result + char.toUpperCase();
//     } else {
//         result = result + char;
//     }
// });
// console.log(result);