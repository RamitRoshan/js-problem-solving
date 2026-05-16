/* Pattern Printing (Right Triangle)

Question: Print a right-angled triangle pattern.

Input: 5

Output:

*
**
***
****
*****

*/

const n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}
