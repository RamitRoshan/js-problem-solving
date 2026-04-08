/*
Check if string contains all unique characters

Input:
"abcdefa"

Output:
false
*/

const str = "abcdefa";
let isResult = true;

for (let i = 0; i < str.length; i++) {
  for (let j = i + 1; j < str.length; j++) {
    if (str[i] === str[j]) {
      isResult = false;
      break;
    }
  }
  // If duplicate is already found, no need to continue checking further
  // This breaks the outer loop early and avoids unnecessary comparisons
  if (!isResult) break;
}

console.log(isResult);
