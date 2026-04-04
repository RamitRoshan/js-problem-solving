/*
Count frequency of each character

Input: "aabbc"
Output: a:2, b:2, c:1
*/


const str = "aabbc";

let freq = {};

for(let i=0; i<str.length; i++){
    let ch = str[i];

    if(freq[ch]){
        freq[ch]++;
    }else{
        freq[ch] = 1;
    }
}

for(let key in freq){
    console.log(key + ": " + freq[key]);
}