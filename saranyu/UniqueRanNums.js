/* Generate 1–100 Unique Random Numbers (Single Loop)

Question: Generate numbers from 1 to 100 randomly without repetition using one loop.

Input: 100

Output: [23, 1, 76, 54, 9, ..., 100]  (all numbers unique, order random)
*/


const n = 100;
let result = [];

//fill array 1 to 100
for(let i=1; i<=n; i++){
    result.push(i);
}

//shuffle using one loop
for(let i=n-1; i>0; i--){
    let j = Math.floor(Math.random() * (i + 1));

    //swap
    let temp = result[i];
    result[i] = result[j];
    result[j] = temp;
}

console.log(result);
