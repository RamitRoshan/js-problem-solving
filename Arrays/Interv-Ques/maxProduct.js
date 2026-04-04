/*
Find the maximum product of any two elements in the array.

Input:
[3, 5, -2, 8, -7]
Output:
40

Reason:
Possible products:
8 × 5 = 40 ✅ (maximum)
-7 × -2 = 14
*/

const arr = [3, 5, -2, 8, -7];
let maxProduct = -Infinity;

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        let product = arr[i] * arr[j];

        if(product > maxProduct){
            maxProduct = product;
        }
    }
}
console.log(maxProduct);