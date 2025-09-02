//practicing Questions 


/*
Q1). Reverse a String in J.S
*/
// const str = "java";
// const reverse = str.split("").reverse().join("");
// console.log(reverse);


//Q2) Split the string
// const str1 = "js, react, java";
// const splitStr = str1.split(",");
// console.log(splitStr);

//Q3). Reverse a String without in-build methods
// const str = "mullayam";
// let result = "";
// for(let i= str.length-1; i>=0; i--){
//     result = result + str[i];
// }
// console.log(result);


//Q4). Remove Dublicates
// const str = "aabbcdeabec";
// let result = ""
// for(let i=0; i<str.length-1; i++){
//      let char = str[i];

//      if(!result.includes(char)){
//         result += char;
//      }
// }
// console.log(result);


//Q5). sum of digits
// let n = 1234;
// let sum = 0;

// while(n>0){
//    sum += n%10;
//    n = Math.floor(n/10);
// }
// console.log(sum);
  
//Q6). Toggle cases(if char is capital, make it small and vice versa)
// const str = "rEaCT";
// let result = "";
// for(let i=0; i<str.length; i++){
//    let char = str[i];
//    if(char === char.toUpperCase()){
//       result += char.toLowerCase();
//    }else{
//       result += char.toUpperCase();
//    }
// }
// console.log(result);


//Q7). Print alphabet from 97 to 102(abcdef)
// let result = "";
// for(let i=97; i<=102; i++){
//    result = result + String.fromCharCode(i);
// }
// console.log(result);



//Arrays

// const fruits = ["apple", "orange", "banana"];
// const person = {name:"Ramji", role:"owner of world"};

// console.log(typeof fruits);
// console.log(typeof person);

// console.log(Array.isArray(person));
// console.log(Array.isArray(fruits));




//Function

// function greet(){
//    console.log("hii");
// }
// greet();


// function greet(username){
//    const msg = 'welcome' + " " + username;
//    return msg ;
// }
// console.log(greet('mahadev'))


//Q) count characters
// function countCharacters(str, char){
//    let count = 0;
//    for(let i=0; i<str.length; i++){
//       if(str[i] === char){
//          count++;
//       }
//    }
//    return count;
// }
// console.log(countCharacters('dddddddrfrfsdr', 'f'));



// function getEvens(arr){
//    const result = [];
//    for(let i=0; i<arr.length; i++){
//       if(arr[i] % 2 === 0){
//          result.push(arr[i]);
//       }
//    }
//    return result;
// }
// console.log(getEvens([10,2,3,1,7,8]));



// function allPositive(numbers){
//    const result = [];
//    for(let i=0; i<numbers.length; i++){
//       if(numbers[i] >0){
//          result.push(numbers[i]);
//       }
//    }
//    return result;
// }
// console.log(allPositive([-1,-44,3,-345]));

// function allPositive(numbers){
//    const result = numbers.filter(function(ele){
//       return ele>0;
//    });
//    return result;
// }
// console.log(allPositive([-1,-44,3,-3, 45]));


// function add(a,b){
//    const sum = a+b;
//    return sum;
// }
// console.log(add(-1,-44));


// const subs = (c,d) => {
//    const subtract = c-d;
//    return subtract;
// }
// console.log(subs(44,3));

// const arrowF = (a,b) => {
//    const sum = a+b;
//    return sum;
// }
// console.log(arrowF(2,3));
 


// function strongPassword(passwords){
//    const result = passwords.filter(function(ele){
//       return ele.length >=8;
//    })
//    return result;
// }
// console.log(strongPassword(['secret', 'sec3@123', 'set123']));


// const arrStr = ['cdc', 'eer', 'fre'];

// const result = arrStr.reduce(function(acc, cv){
//    return acc + cv.length;
// },0);
// console.log(result);


//Closure Function
function outerFunction(){
   var outerVariable = "Hello ";

   function innerFunction(name){
      console.log(outerVariable + name);
   }
   return innerFunction;
}
var inner = outerFunction();
inner("john");