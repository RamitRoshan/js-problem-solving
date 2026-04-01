const fruits = ['mango', 'orange', 'bannana'];
for(let i=0; i<fruits.length; i++){
    console.log(i, fruits[i]);
}

//reverse
for(let i=fruits.length-1; i>=0; i--){
    console.log(fruits[i]);
}
console.log("_____________");

//for of loop
for(let ele of fruits){
    console.log(ele);
}