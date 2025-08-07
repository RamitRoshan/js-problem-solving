// const obj = {a:1, b:2, c:3};

// // for in
// //(for DSA we use this concept- find non-repeating character)
// for(let key in obj){
//     console.log(key, obj[key]);
// }

// /*

// iter    key   obj[key]
// 1       'a'   obj['a'] -> 1     a 1  
// 2       'b'   obj['b'] -> 2     b 2  
// 3       'c'   obj['c'] -> 3     c 3  

// */



// const arr = [10,20,30];
// for(let i=0; i<arr.length; i++){
//     console.log(arr['i']); 
// }
// o/p:
// undefined
// undefined
// undefined




//
// const arr = [10,20,30];
// const index = 1;
// console.log(index); //1
// console.log(arr[index]) //20


/*
Given a student object, print the key value pair
*/
const student = {
    name: 'rahul',
    age: 23,
    email: 'rahul@gmail.com',
    course: 'full stack development course'
}
// console.log(student);
for(let key in student){
    console.log(key + ": " + student[key]);
}