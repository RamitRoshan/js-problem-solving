const arr = [{name:'savarkar'}, {name:'Godse'}];

const user = arr[1]; //copy by reference/shallow copy
console.log(user);  //name:'Godse'

user.name = 'veer';
console.log(user);
console.log(arr);

