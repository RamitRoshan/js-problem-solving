/* FizzBuzz Variant (Face / Book / Facebook)

Question: For numbers from 1 to N:
Multiple of 3 → "Face"
Multiple of 5 → "Book"
Multiple of both → "Facebook"

Input: 15
Output:
1  
2  
Face  
4  
Book  
Face  
7  
8  
Face  
Book  
11  
Face  
13  
14  
Facebook
*/

let n = 15; 

for(let i=1; i<=n; i++){
    if(i % 15 === 0){
        console.log("Facebook");

    }else if(i % 3 === 0){
        console.log("Face");

    }else if(i % 5 === 0){
        console.log("Book");

    }else{
        console.log(i);
    }
}
 


//2nd methods
// let n = 15;

// for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) { // Multiple of both → "Facebook"
//         console.log("Facebook");
//     } else if (i % 3 === 0) {
//         console.log("Face");
//     } else if (i % 5 === 0) {
//         console.log("Book");
//     } else {
//         console.log(i);
//     }
// }