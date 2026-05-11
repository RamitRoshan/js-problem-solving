/* Find factorial of a number.

Input: 5
 
Output: 120  (5*4*3*2*1)
*/


const n = 5;

let fact = 1;

for(let i=1; i<=n; i++){
    fact = fact * i;
}
console.log(fact);
