/* create a fn called as getEvens which takes an array as argument, the functiion should
return all the even number from the array

getEvens[1,2,4,5,6] // [2,4,6]
getEvens([]) //[]
*/

function getEvens(arr){
    let result = [];

    for(let i =0; i<arr.length; i++){
        if(arr[i] %2 == 0){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(getEvens([2,1,4]));
console.log(getEvens([20,21,22]));