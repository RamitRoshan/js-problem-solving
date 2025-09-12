/*
=====================================
Assignment: Sum of Resistance in Series Circuits
=====================================

When resistors are connected in series, the total resistance is the sum of all resistors.

Create a function that takes an array of resistance values and returns a string 
of the total resistance followed by "ohm" or "ohms".

Function Signature:
function seriesResistance(resistances): string

Examples:
seriesResistance([1, 5, 6, 3]) => "15 ohms"
seriesResistance([16, 3.5, 6]) => "25.5 ohms"
seriesResistance([0.5, 0.5]) => "1.0 ohm"

Hints:
- First try solving it using a traditional for loop:
  1. Initialize a total variable to 0.
  2. Loop through the array and add each value to total.
- Optionally, try using `.reduce()` for a one-liner summation.
- If the total is exactly 1, use "ohm", otherwise use "ohms".

Step-by-Step Algorithm:
1. Initialize `total` as 0.
2. Loop through the array and accumulate the sum of resistances.
3. Check if total is equal to 1 (for singular "ohm").
4. Return the total with appropriate unit.
*/

function seriesResistance(resistances) {
    // Your code here

}
  
module.exports = seriesResistance;
  