/*
Find first repeating character
Input: "swiss" → Output: "s"
*/

const str = "swiss";

for(let i=0; i<str.length; i++){
    let found  = false;

    for(let j= i+1; j<str.length; j++){
        if(str[i] === str[j]){
            console.log(str[i]);
            found = true;
            break;
        }
    }
    if(found){ 
        break;
    }
}