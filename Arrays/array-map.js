/*
map() - creates a new array by applying a function
to each element of the original array..

The map methods calls a callback function one time
for each element in the array.

- It works very similar to array filter 

ReactJS is filled with Map() methods, it is very useful
*/


// Ques1). Add 5 for each element in the array
//o/p: [ 15, 16, 17, 18, 19] 


//1st methods: Traditional methods
// const arr = [ 10, 11, 12, 13, 14];

// const result = [];
// for(let i=0; i<arr.length; i++){
//     //arr[i] is current index
//     result.push(arr[i] + 5);
// }
// console.log(result);



//2nd Methods: solve using Array Map methods
// const arr = [ 10, 11, 12, 13, 14];
// const result = arr.map(function(ele){
//     return ele+5;
// });
// console.log(result);



//Ques).Ques: Find the first character of each name using .map()

// const names = ['dravid', 'sachin', 'zaheer'];
// const result = names.map(function(ele){
//     return ele.charAt(0);
//     // return ele[0];
//     //✅ ele[0] or ele.charAt(0) gives the first character of each name.
// });
// console.log(result);   //['d', 's', 'z']




//Ques).Find the first and last character of each name using .map()

// const names = ['dravid', 'sachin', 'zaheer'];

// const result = names.map(function(ele){
//     return ele.charAt(0) + ele.charAt(ele.length-1);
    
//     // also we can write like this: 
//     // return ele[0] + ele[ele.length - 1];
// });
// console.log(result); //['dd', 'sn', 'zr']


//Interview.Ques) Given an array of numbers , here you have to add 2 to every even number

const arr = [10, 11, 12, 13, 14];
const result = arr.map(function(ele){
    if(ele % 2 === 0){
        return ele+2;
    }else{
        return ele;
    }
});
console.log(result);  //o/p = [12,11,14,13,16]


