const fruits = ['mango', 'orange'];
function addFruit(fruit, fruitName){
    fruit.push(fruitName);
    return fruit;
}
console.log(addFruit(fruits, 'chikko')); //[ 'mango', 'orange', 'chikko' ]

console.log(fruits); //[ 'mango', 'orange', 'chikko' ]

console.log(addFruit(fruits, 'chikko')); //[ 'mango', 'orange', 'chikko', 'chikko' ]
console.log(addFruit(fruits, 'chikko')); //[ 'mango', 'orange', 'chikko', 'chikko', 'chikko' ]