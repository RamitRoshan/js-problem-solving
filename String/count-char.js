//count how many 'a' is present in the string str

const str = "javascript";
const char = 'a';
let count = 0;
for(let i=0; i<str.length; i++){
    console.log(i, str[i]);
    if(str[i] == char){
        count++;  //count += 1 or count++
    }
}
console.log( "count of a is: ", count);




 

 