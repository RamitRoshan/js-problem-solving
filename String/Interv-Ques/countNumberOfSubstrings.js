/*
Count number of substrings in a string
(Formula: n(n+1)/2)

Input:
"abc"

Output:
6
(substrings: a, b, c, ab, bc, abc)

Input:
"abcd"

Output:
10
*/

const str = "abc";

let n = str.length;
let count = n*(n+1)/2;
 

console.log(count);