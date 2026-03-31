/*
Count even and odd numbers:

Input: [3, 44, 2, 9, 5]
Output: Even = 2, Odd = 3
*/

const arr = [3, 44, 2, 9, 5];
let countEven = [];
let countOdd = [];

for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
        countEven++;

    }else{
        countOdd++;
    }
}

console.log("Number of even count is: " + countEven);
console.log("Number of odd count is: " + countOdd);