// function countVowels(str){

//     let count = 0;
//     let vowels = "aeiouAEIOU";

//     for(let i = 0; i<str.length; i++){
//         let ch = str[i];
//         if(vowels.includes(ch)){
//             count++;
//         }
//     }
//     // console.log(count);
//     return count;
// }

// console.log(countVowels('React')); //2



//using Arrow functions 
const countVowels = (str) => {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (vowels.includes(ch)) {
            count++;
        }
    }

    return count;
};

console.log(countVowels("React")); // Output: 2
