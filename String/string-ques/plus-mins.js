/*
check how many plus and minus is present here
o/p: plus -> 4(+) , minus -> 2(-)
*/

const str = "+++--+";
let plusCount = 0;
let minusCount = 0;

for(let i=0; i<str.length; i++){
    if(str[i] == "+"){
        plusCount++;
    }
    if(str[i] == "-"){
        minusCount++;
    }
}
// console.log('plus - ' + plusCount);
// console.log('minus - ' + minusCount);

console.log(`plus - ${plusCount}`);
console.log(`minus - ${minusCount}`);