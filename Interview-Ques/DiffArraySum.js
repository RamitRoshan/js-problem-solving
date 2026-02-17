/*
write a code to find the absolute difference btw two integers x and y is  defined as (x-y)
nums = [1, 15, 6, 3]

I/P: nums = [1, 15, 6, 3]
O/P: 9

Explain:
The element sum of nums is = 1 + 15+ 6+ 3 = 25
The digit sum of nums is  = 1+ 1+ 5+ 6+ 3 = 16
The absolute difference btw the element sum and digit sum is = [25-16] = 9
*/


//Soln using modulo 

// let nums = [1, 15, 6, 3];

// let elementSum = 0;
// let digitSum = 0;

// for(let i=0; i<nums.length; i++){

//     elementSum = elementSum + nums[i];

//     let temp = nums[i];
//     while (temp > 0) {
//         digitSum += temp % 10;            // get last digit
//         temp = Math.floor(temp / 10);     // remove last digit
//     }
// }

// let difference = elementSum - digitSum;

// console.log("Element Sum is:", elementSum);
// console.log("Digit Sum is:", digitSum);
// console.log("The absolute Difference:", difference);


//2nd method using - String

let nums = [1, 15, 6, 3];

let elementSum = 0;
let digitSum = 0;

for (let i = 0; i < nums.length; i++) {

    elementSum += nums[i];

    // Convert current number to string
    let strNum = nums[i].toString();

    // Loop through each digit
    for (let j = 0; j < strNum.length; j++) {
        digitSum += Number(strNum[j]);
    }
}

let difference = elementSum - digitSum;

console.log("Element Sum is:", elementSum);
console.log("Digit Sum is:", digitSum);
console.log("The Absolute Difference:", difference);
