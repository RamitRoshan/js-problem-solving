//Q) find the keys 

//without using Object.keys( )
// function getKeys(obj){
//     const result = [];
//     for(let key in obj){
//         result.push(key);
//     }
//     return result;
// }
// console.log(getKeys({a:1, b:2,c:3})); // ['a', 'b', 'c']


  // Using Object.keys()
// function getKeys(obj){
//     return Object.keys(obj);
// }
// console.log(getKeys({a:1, b:2,c:3})); // ['a', 'b', 'c']



// Ques) find the values 

//without using Object.values(), print the value (not keys)
// function getValues(obj){
//     const result = [];
//     for(let value in obj){
//         result.push(obj[value]);
//     }
//     return result;
// }
// console.log(getValues({a:1, b:2,c:3})); // [1, 2, 3]



// Ques) function check props if present then true else false

// without using hasOwnProperty
// function checkProp(obj, prop){
//     for(let key in obj){
//         if(key === prop){
//             return true;
//         }
//     }
//     return false;
    
// }
// console.log(checkProp({a:1, b:2}, 'a')); //true
// console.log(checkProp({a:1, b:2}, 'z')); //false

// //using hasOwnProperty() methods
// const a = {a:1, b:2};
// console.log(a.hasOwnProperty('z')); //true
// console.log(a.hasOwnProperty('a')); //false

// //3rd methods 
// function checkProp(obj, prop){
//     return obj.hasOwnProperty(prop);
// }
// console.log(checkProp({a:1, b:2}, 'a')); //true
// console.log(checkProp({a:1, b:2}, 'z')); //false



//build pairs
//here we use for-of loop in object because we took input as a 
//string so. 
// function pair(str){
//     const result = {};
//     for(let char of str){
//         result[char] = char.toUpperCase();
//     }
//     return result;
// }
// console.log(pair('dct')); //{d: 'D', c: 'C', t:'T'}

/*
ite   char   result[char]        result
1      d     result['d']= 'D'    {d: 'D'}
2      c     result['c']= 'C'    {d: 'D'}
3      t     result['t']= 'T'    {c: 'C'}


🔁 Step-by-step Execution Table:
Iteration	char	char.toUpperCase()	 Operation	        result after this step
1	         'd'	'D'	                 result['d'] = 'D'	 { d: 'D' }
2	         'c'	'C'	                 result['c'] = 'C'	 { d: 'D', c: 'C' }
3	         't'	'T'	                 result['t'] = 'T'	 { d: 'D', c: 'C', t: 'T' }

📦 Final Output:
{
d: D
c: C
t: T
}
*/

//Q). charAscii
function charAscii(str){
    const result = {};
    for(let char of str){
        result[char] = char.charCodeAt(0);
    }
    return result;
}
console.log(charAscii('abc'));  //{a:97, b:98, c:99}


//Q) String length
// const strLength = (arr) => {
//     const result = {};
//     for(let str of arr){
//         result[str] = str.length;
//     }
//     return result;
// }
// console.log(strLength(['abc', 'ab', 'a', 'abcd'])) //{abc:3, ab:2, a:1, abcd:4}
 
//solve using reduce
// const strLength = (arr) => {
//     return arr.reduce((result, str) => {
//         result[str] = str.length;
//         return result;
//     }, {});
// }

// console.log(strLength(['abc', 'ab', 'a', 'abcd']));
// Output: { abc: 3, ab: 2, a: 1, abcd: 4 }


// const strLength = (arr) => {
//     const result = arr.reduce(function(acc,cv){
//         acc[cv] = cv.length;
//         return acc;
//     }, {});
//     return result;
// }

// console.log(strLength(['abc', 'ab', 'a', 'abcd']));



//Q) Return all products whose price is greater than or equal to 10000
const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Smartphone", price: 25000 },
  { id: 3, name: "Headphones", price: 2000 },
  { id: 4, name: "Keyboard", price: 1200 },
  { id: 5, name: "Mouse", price: 800 }
];

function filterProducts(products){
    const result = products.filter(function(ele){
        return (ele.price >= 10000);
    });
    return result;
}
console.log(filterProducts(products));
// [{id: 1, name: "Laptop", price: 55000}, {id: 2, name: "Smartphone", price: 25000} ]


//Q) find the max in the array
function findMax(arr){
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([100,50,60,125,1,10])); //125


//Ques) Return key with the max value
// obj = {a:1, b:20, c:3} o/p: 'b'
// const obj = {a:1, b:20, c:3};

// console.log(Object.keys(obj).length == 0);

function getMax(obj){
    let maxKey = null;
    let maxValue = null;
    //used for-in loop
    for(let key in obj ){
        if(obj[key] > maxValue){
            maxValue = obj[key];
            maxKey = key;
        }
    }
    return maxKey;
}
console.log(getMax({a:1, b:20, c:30})); //'b'