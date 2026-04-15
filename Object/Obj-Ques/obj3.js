const username = "raj", email = "raj@gmail.com";
const user = {
    //key: value
    username:  username,
    email:email
};
console.log(user); //{username:'raj', email:'raj@gmail.com'}

//es6 feature - concise property(short hand property)
//when the property name and the variable is the same, omit property(here we don't have to metion property name, just use variable)
const person={
    username,
    email
};
console.log(person);   //{username:'raj', email:'raj@gmail.com'}