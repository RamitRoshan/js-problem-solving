/*
Given a word(String), create an object that stores the indexes of each letter in an array.

mapLetters("dodo") -> { d: [0,2], o: [1,3] }

mapLetters("froggy") -> {f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
*/

//solve using for-loop

// function mapLetters(str) {
//   let result = {};
  
//   for(let i=0; i<str.length; i++){
    
//     const char  = str[i];
    
//     if(!result[char]){
//       result[char] = [];
//     }
    
//     result[char].push(i);   
//   }
  
//   return result;
  
// }
// console.log(mapLetters("dodo"));

//solve using for-of loop
function mapLetters(str) {
  
  const result = {};
  
  let idx = 0;

  for (const char of str) {
    if (!result[char]) {
      result[char] = [];
    }

    result[char].push(idx);
    idx++;
  }

  return result;
}
console.log(mapLetters("dodo"));
console.log(mapLetters("froggy"));