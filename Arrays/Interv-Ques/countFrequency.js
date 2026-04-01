/*
Count frequency of each element in an Array: 
Input: [1, 2, 2, 3, 1, 4, 2]
Output:
1 → 2 times
2 → 3 times
3 → 1 time
4 → 1 time
*/

const arr = [1, 2, 2, 3, 1, 4, 2];

//Create an empty object, to store elements
let freq = {};
for (let i = 0; i < arr.length; i++) {
  //checking this element already exist in object
  if (freq[arr[i]]) {
    //If already present → increase count
    freq[arr[i]]++;
  } else {
    //If element comes first time, set count = 1
    freq[arr[i]] = 1;
  }
}
//freq object becomes: {1: 2, 2: 3, 3: 1, 4: 1}  -> O(n)

//Loop through object keys, key = element (1,2,3,4) (using for in loop only in object)
for (let key in freq) {
  console.log(key + " → " + freq[key] + (freq[key] > 1 ? " times" : " time")); //freq[key] = count
}
