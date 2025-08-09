# Array.reduce()

## Definition
The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value.

reduce() - applies a function to an accumulator and each element of the array, reducing it to a single value.

## Syntax
```javascript
array.reduce((accumulator, currentValue, index, array) => {
    // logic
}, initialValue);
