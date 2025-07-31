const str = "abca";
const char = "a"; //2
let count = 0;
for(let i=0; i<str.length; i++){
    if(str[i] == char){
        count++;
    }
}
console.log(count);

//using function so that we can reuse the code
//declaring a function
const str1 = "abca";
const charFind = "b";

function functionName(str, char) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(functionName(str1, charFind)); // Output: 2
