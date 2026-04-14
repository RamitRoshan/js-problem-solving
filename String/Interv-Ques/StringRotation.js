/*
Check if string is a rotation of another string

Input:
s1 = "abcd"
s2 = "cdab"

Output:
true

Input:
s1 = "abcd"
s2 = "acbd"

Output:
false
*/

const str1 = "abcd";
const str2  = "cdab";


//edge cases
if(str1.length !== str2.length){
    return false;

}else{
    const result = (str1 + str1).includes(str2);
    console.log(result);
}





