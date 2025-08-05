// const arr = [10, 20, 30, 40]
// console.log(arr.includes(30)); //true

// //first element greater than 25
// console.log(arr.find(n=>n>25));


//Q) Find the 1st number in the array greater than n 

//1st methods

// function findGreater(arr, n){

     //traditional - for loop
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > n){
//             return arr[i];
//         }
//     }
//     //its not need but you explicitly(by own) define it , if nothing then undefined  
//     return undefined;
// }
// console.log(findGreater([10, 15, 20, 25, 30], 22)) //25
// console.log(findGreater([10, 15, 20, 25, 30], 100)) //undefined


//2nd methods
// function findGreater(arr, n){
       //modern - new methods
//     const result = arr.find(function(ele) {
//         return ele>n;
//     })
//     return result;
// }
    

// //here find greater nos than 22 and 100 
// console.log(findGreater([10, 15, 20, 25, 30], 22)) //25
// console.log(findGreater([10, 15, 20, 25, 30], 100)) //undefined


//Q) Find the first string in the array

//1st methods

// function firstStr(arr){
//     for(let i=0; i<arr.length; i++){
//         if(typeof arr[i] === 'string' ){
//             return arr[i];
//         }
//     }
// }
// console.log(firstStr([1,2,3,'d','c','t'])); //'d'


//2md methods
function firstStr(arr){
    const result = arr.find(function(ele){
        return typeof ele === 'string';
    })
    return result;
}
console.log(firstStr([1,2,3,'d','c','t'])); //'d'