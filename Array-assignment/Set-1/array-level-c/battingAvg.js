/*
=====================================
Assignment: Baseball Batting Average
=====================================

A baseball player's batting average (BA) is calculated as:
BA = totalHits / totalAtBats

Return the average as a string:
- Rounded to the nearest thousandth (e.g. 0.286)
- No leading zero, so it should be ".286"

Function Signature:
function battingAvg(season): string

Examples:
battingAvg([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]]) => ".286"
battingAvg([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]]) => ".350"
battingAvg([[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]]) => ".273"

Hints:
- Use a for loop to sum up hits and at-bats separately.
- Make sure to handle division by 0 (e.g. ".000").
- Use `toFixed(3)` to round to 3 decimal places.

Step-by-Step Algorithm:
1. Initialize `totalHits` and `totalAtBats` to 0.
2. Loop through the array and add each game's hits and at-bats to totals.
3. If `totalAtBats` is 0, return ".000".
4. Calculate the batting average: totalHits / totalAtBats.
5. Use `.toFixed(3)` and remove the leading zero.
*/

function battingAvg(season) {
    // Your code here
    
}
  
module.exports = battingAvg;
  