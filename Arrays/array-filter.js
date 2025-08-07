// Q) find the even numbers in given array

/*
function getEvens(arr){
    
    const result = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            result.push(arr[i]);
        }
    }
    return result;
} 
console.log(getEvens([10,11,12,13,14]));  //expected o/p: [10, 12, 14]
console.log(getEvens([11,13,15])); // expected o/p(empty array): []


// 2nd methods 
function getEvens(array){
    return array.filter(num => num%2 === 0);
} 
console.log(getEvens([10,11,12,13,14]));  //expected o/p: [10, 12, 14]
console.log(getEvens([11,13,15]));

*/

// ### positive number find

function allPositives(numbers){
    const result = numbers.filter(function(ele){
        return (ele>=0)
    }); 
    return result;
}
console.log(allPositives([1,2,3,-10,-5,7]));  //[1, 2, 3, 7]