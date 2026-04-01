const numbers = [10, 11, 12, 13, 14];
// Find all the even numbers in the array
// o/p- [10, 12, 14];
 
//why [] because we want the answer in array
const result = [];
for(let i=0; i<numbers.length; i++){
    if(numbers[i] % 2 == 0){
        result.push(numbers[i]);
    }
}
console.log(result);


