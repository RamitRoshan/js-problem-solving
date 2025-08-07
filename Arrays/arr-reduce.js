/*
reduce() - applies a function to an accumulator and each
element of the array, reducing it to a single value.
*/

//Q). find sum of the array using reduce.

// const arr = [100,150,200,250];

// const result = arr.reduce(function(acc,cv){  //cv-current value
//     return acc + cv;
// },0);
// console.log(result);


//Q). Find the total length of character/String in the array
//output: 9

/*

const arrStr = [ 'abc', 'de', 'fghi'];
const result = arrStr.reduce(function(acc,cv){
    return acc + cv.length;
},0);
console.log(result);

*/


//Ques) find the total
/*
function cartTotal(arr){
    const result = arr.reduce(function(acc, cv){
        return acc+ cv;
    },0);
    return result;
}
console.log(cartTotal([45,45,60])); //150



//Ques) find the sum in the array,where some items might be strings (like '45')

// 1st methods -  tradition methods
function cartTotl(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += Number(arr[i]);
    }
    return total;
}
console.log(cartTotl([45, '45', 60]));  // Output: 150

//🧠 Explanation: Number(arr[i]) safely converts both numbers and numeric strings (like '45') to numbers


//2nd methods - modern methods
function cartTotl(arr){
    const result = arr.reduce(function(acc, cv){
        return acc + Number(cv); 
    }, 0);
    return result;
}
console.log(cartTotl([45,'45', 60]));
//Note: Number(curr) converts string numbers like '45' to actual numbers.

*/

//Ques) Find the even numbers in given array using reduce methods (recommendation: always use filter, its for practice)
function getEvens(arr){
    const result = arr.reduce(function(acc,cv){
        if(cv % 2 === 0){
            acc.push(cv);  // Add even numbers to accumulator
        }
        return acc;
    },[]); //initial value is empty array([]):beacuse we want the answer in the form of an array
    return result;
}
console.log(getEvens([10,11,12,13,14])); // [10, 12, 14]