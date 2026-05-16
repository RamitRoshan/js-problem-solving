/* Sum to Target (Pair Problem)

Question: Find pairs whose sum equals a given target.

Input:
arr = [2, 7, 11, 15]
target = 9

Output: [2, 7]
*/

const arr = [2, 7, 11, 15];

const target = 9;

let result = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      result.push(arr[i], arr[j]);
    }
  }
}
console.log(result); //[ 2, 7 ]


