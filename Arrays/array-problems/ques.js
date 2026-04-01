/*
Write a program :

const arr1 = [5, 10, 15, 20, 25];
const arr2 = [1, 2, 3, 5, 5, 10, 20, 20, 20, 25, 25, 20, 10];

output: 
5 appears 2 times
10 appears 2 times
15 appears 0 times
20 appears 4 times
25 appears 2 times

*/

const arr1 = [5, 10, 15, 20, 25];
const arr2 = [1, 2, 3, 5, 5, 10, 20, 20, 20, 25, 25, 20, 10];

for (let i = 0; i < arr1.length; i++) {

  let count = 0; // reset for each element

  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      count++;
    }
  }

  console.log(arr1[i] + " appears " + count + " times");
}
