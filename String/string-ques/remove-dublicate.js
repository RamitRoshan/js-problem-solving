// const str = "aabbcdabc";


// let result = " ";
// for(let i =0; i<str.length; i++){
//     let b = str[i];
//     if(!result.includes(b)){
//         result = result + b;
//     }
// }
// console.log(result);

const str = "aabbcdabc";
let result = " ";
for(let i=0; i<str.length; i++){
    console.log(str[i]);
    let c = str[i];
    if(!result.includes(c)){
        result = result + c;
    }
}
console.log(result);