// find the strong passsword which is greater than 8


// function strongPasswords(passwords){
//     const result = [];

//     for(let i=0; i<passwords.length; i++){
//         if(passwords[i].length >=8){
//             result.push(passwords[i]);
//         }
//     }
//     return result;
// }
// console.log(strongPasswords(['secret', 'secret123', 'secret@123', 'pass123']));
// //['secret123', 'secret@123']


function strongPasswords(passwords){
    
    const result = passwords.filter(function(ele){
        return ele.length >=8;
    })
    return result;
}
console.log(strongPasswords(['secret', 'secret123', 'secret@123', 'pass123']));
//['secret123', 'secret@123']