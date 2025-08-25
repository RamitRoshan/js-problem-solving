//practicing Questions 


/*
Q1). Reverse a String in J.S
*/
// const str = "java";
// const reverse = str.split("").reverse().join("");
// console.log(reverse);


//Q2) Split the string
// const str1 = "js, react, java";
// const splitStr = str1.split(",");
// console.log(splitStr);

//Q3). Reverse a String without in-build methods
// const str = "mullayam";
// let result = "";
// for(let i= str.length-1; i>=0; i--){
//     result = result + str[i];
// }
// console.log(result);


//Q4). Remove Dublicates
// const str = "aabbcdeabec";
// let result = ""
// for(let i=0; i<str.length-1; i++){
//      let char = str[i];

//      if(!result.includes(char)){
//         result += char;
//      }
// }
// console.log(result);


//Q5). sum of digits
// let n = 1234;
// let sum = 0;

// while(n>0){
//    sum += n%10;
//    n = Math.floor(n/10);
// }
// console.log(sum);
  
//Q6). Toggle cases(if char is capital, make it small and vice versa)
// const str = "rEaCT";
// let result = "";
// for(let i=0; i<str.length; i++){
//    let char = str[i];
//    if(char === char.toUpperCase()){
//       result += char.toLowerCase();
//    }else{
//       result += char.toUpperCase();
//    }
// }
// console.log(result);


//Q7). Print alphabet from 97 to 102(abcdef)
// let result = "";
// for(let i=97; i<=102; i++){
//    result = result + String.fromCharCode(i);
// }
// console.log(result);



//Arrays

const fruits = ["apple", "orange", "banana"];
for(let i =0; i<fruits.length; i++){
   console.log(i, fruits[i]);
}
 