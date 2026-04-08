//Finding Even Numbers - [10,11,12,13,14]
// o/p: [10,12,14]

const numbers = [10,11,12,13,14];
let result1 = [];

for(let i=0; i<numbers.length; i++){
    if(numbers[i] % 2 == 0){
        result1.push(numbers[i]);
    }
}
console.log(result1);