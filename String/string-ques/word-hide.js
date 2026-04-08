// const str = "UcNFYaFYFYtGINN";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (char >= 'a' && char <= 'z') {
//         result = result + char;
//     }
// }

// console.log(result); // Output: cat


const str = "UcNFYaFYFYtGINN";

function abc(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char >= 'a' && char <= 'z') {
            result = result + char;
        }
    }
    return result;
}

const output = abc(str);
console.log(output); // Output: cat
