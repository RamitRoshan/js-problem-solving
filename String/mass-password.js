const str = "secret@123";
let output = "";

for (let i = 0; i < str.length; i++) {
  output += "*";
}

console.log(output);


const str1 = "secret@123";
const output1 = "*".repeat(str1.length);
console.log(output1); // **********
