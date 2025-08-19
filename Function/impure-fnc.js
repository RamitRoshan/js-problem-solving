const fruits = ['mango', 'orange'];
function addFruit(fruits, fruitName){
    fruits.push(fruitName);
    return fruits;
}
console.log(addFruit(fruits, 'chikko')); //[ 'mango', 'orange', 'chikko' ]

console.log(fruits); //[ 'mango', 'orange', 'chikko' ]

console.log(addFruit(fruits, 'chikko')); //[ 'mango', 'orange', 'chikko', 'chikko' ]
console.log(addFruit(fruits, 'chikko')); //[ 'mango', 'orange', 'chikko', 'chikko', 'chikko' ]