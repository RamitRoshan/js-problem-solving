//frequency distribution

// function frequency(str){
//     const result = {};
//     for(let char of str){
//         if(char in result){
//             result[char] += 1;  //result[char] ++;
//         }else{
//             result[char] = 1;
//         }
//     }
//     return result;
// }
// console.log(frequency('aabcca'));  //{a:3, b:1, c:2}

/*
ite  char      cond           result
1     a       f(else)        {'a'= 1}
2     a       true           {'a'= 2}
3     b       f(else)        {'a'= 2, b:1}
4     c       f(else)        {'a'= 2, b:1, c:1}
5     c       true           {'a'= 2, b:1, c:2}
6     a       true           {'a'= 3, b:1, c:2}

*/

//2nd M - using for-loop
// function frequency(str) {
//     const result = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (char in result) {
//             result[char] += 1;
//         } else {
//             result[char] = 1;
//         }
//     }
//     return result;
// }

// console.log(frequency('aabcca'));  // Output: { a: 3, b: 1, c: 2 }




//Ques).  non-repeating character
// function nonRepeating(str){
//     const result = {};
//     for(let char of str){
//         if(char in result){
//             result[char] ++;
//         }else{
//             result[char] = 1;
//         }
//     }
//     //{d:3, c:1, t:2}
//     for(let key in result){  //used for-in loop
//         if(result[key] == 1){
//             return key;
//         }
//     }
//     return '';
// }
// console.log(nonRepeating('ddcttd'));  //'c'




//Ques). repeating character
// o/p: ['d', 't']
// function repeatingChar(str){
//     const result = {};
//     for(let char of str){
//         if(char in result){
//             result[char]++;
//         }else{
//             result[char] = 1;
//         }
//     }
//     // { d:3, c:1, t:2}
//     const output = [];
//     for(let key in result){
//         if(result[key]>1){
//             output.push(key);
//         }
//     }
//     return output;
// }
// console.log(repeatingChar('ddcttd'));  // ['d', 't']



//Ques). swap key values
function swap(obj){
    const result = {};
    //we use for-in loop in objects
    for(let key in obj){

        // const value = obj[key];
        // result[value] = key;

        const newKey = obj[key];
        const newValue = key;
        result[newKey] = newValue;
    }
    return result;
} 
console.log(swap({green: 'peace', blue: 'tranquality'}));
//o/p: {peace: 'green', tranquality: 'blue'}

/*
Iteration BreakDown 

ite  key      obj[key]        newKey        newValue       result
1    green     peace           peace         green         { peace: 'green' }
2    blue      tranquality     tranquality   blue          { peace: 'green', tranquality: 'blue' }
*/


//Ques) find the sum of all values
function total(cart){
    let sum = 0;
    for(let value in cart){

        console.log(cart[value]); //with give all the values 
        sum = sum + cart[value];

    }
    return sum;
}
console.log(total({marker:50, scale:25, box:100})); //o/p: 175


/*
=> Iteration breakdown:- 

Iteration	value	 cart[value]	 sum
1           marker    50             50
2           scale     25             75
3           box       100            175
*/

//using reduce 
function total(cart){
    const result = Object.values(cart).reduce((acc,cv) => {
        return acc+cv;
    }, 0);
    return result;
}
console.log(total({marker:50, scale:25, box:100}));  //175