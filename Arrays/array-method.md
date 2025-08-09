# Choosing the Right JavaScript Array Method

## We will decide which method (`reduce`, `filter`, `find`, `map`) to use based on the given scenarios.

```

1. You have an array of numbers and want a new array with only the even numbers. 
-> Which method should you use? 
Ans: filter methods


2. You have an array of numbers and want to find the first number greater than 100. 
-> Which method should you use? 
Ans: find methods



3. You have an array of Strings and want to create a new array where each string is in uppercase.
-> Which method should you use? 
Ans: map methods


4. You have an array of numbers and want to get the total sum.
-> Which method should you use?
Ans: reduce methods

5. You have an array of Strings and want to return the first one that starts with the letter "A" .
-> Which method should you use?
Ans: find methods

- Reason: map transforms all elements and always returns an array of the same length.
- find is used when you want just the first matching element.
  
✅ Example:
const arr = ["Banana", "Apple", "Avocado"];
const result = arr.find(str => str.startsWith("A"));
console.log(result); // "Apple"

6. You have an array of Strings and want to remove all the empty strings. 
-> Which method should you use?
Ans: filter methods

- Reason: filter is used to remove (or keep) elements based on a condition.
- map transforms values but cannot remove elements.

✅ Example:
const arr = ["Hello", "", "World", ""];
const result = arr.filter(str => str !== "");
console.log(result); // ["Hello", "World"]

7. You have an array of numbers and want a new array where each number is squared.
-> Which method should you use?
Ans: map methods 
( Because you’re transforming each number (square) but keeping the same length array.)

8. You have an array of numbers and want to calculate the product of all the numbers. 
-> Which method should you use?
Ans: reduce methods
(Because you’re combining all numbers into a single value (product).)

✅Examples:
const arr = [2, 3, 4];
const result = arr.reduce((product, num) => product * num, 1);
console.log(result); // 24


9. You have an array of numbers and want a new array that contains only the numbers greater than 50. 
-> Which method should you use?
Ans: filter methods
(Because you’re keeping only those numbers that meet the condition (>50).)

```

