const person = {id:1, name:'Nathuram Godse'};
console.log(typeof person);  //object

//Convert Object to String(stringifying)
const strObj = JSON.stringify(person);
console.log(strObj);
console.log(typeof strObj);  //string


//convert String Object back to j.s Object (parsing)
const parsedObj = JSON.parse(strObj);
console.log(typeof parsedObj);   //object


//Deepcopy of nested objects
console.log(JSON.parse(JSON.stringify(strObj)));
// new approach -> structuredClone()