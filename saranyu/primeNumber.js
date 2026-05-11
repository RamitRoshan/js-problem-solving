/*
Prime Numbers (1 to N)

Question:
Print all prime numbers from 1 to N.

Input: 10
Output: 2 3 5 7
*/

const n = 10;

const result = [];

for(let i=2; i<=n; i++){
    let isPrime = true;

    for(let j=2; j<i; j++){
        if(i%j === 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        result.push(i);
    }
}

console.log(result.join(" "));