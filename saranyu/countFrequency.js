/* Character Frequency Count

Question:
Count frequency of each character in a string.

Input:

"apple"

Output:

a: 1  
p: 2  
l: 1  
e: 1
*/

const str = "apple";

const result = {};

for(let i=0; i<str.length; i++){
    let ch = str[i];
    if(result[ch]){
        result[ch]++;
    }else{
        result[ch] = 1; //when the character is seen for the first time.
    }
}
//console.log(result);

for(let key in result){
    console.log(key + ": " + result[key]);
}
 