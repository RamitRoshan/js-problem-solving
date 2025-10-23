/* Q) Solve this question using String concatenation i.e using "+" operator and also do this using template/string literals (` `)

O/P: The distance between bangalore and mysore is 140 kms and the time taken to travel is 2 hours, 30mins.
*/

const source = "bangalore", destination = "mysore", distance = 140, time = "2 hours, 30 mins";

//using template/string literals
console.log(`The distance between ${source} and ${destination} is ${distance} kms and the time taken to travel is ${time}.`);


//using String concatenation i.e using "+" operator
console.log('The distance between ' + source + ' and ' + destination + ' is ' + distance + ' kms and the time taken to travel is ' + time + '.');