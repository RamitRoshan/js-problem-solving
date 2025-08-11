//object - unordered, string indexed, collection of values


const dev = {
    // key(properties) : value
    age: 23,
    yearOfPassout: 2025,
    email: 'john@gmail.com',
    firstName: 'john',
    lastName: 'smith',
    contact: ['9798812345', '9931234567'],
    address: {
        temperory: 'banglore',
        permanant: 'Deoghar'
    }
};
console.log(dev);
console.log(dev.email);
//if properties does not exist then it is undefined
console.log(dev.officeAddress); //undefined

//access key: value
console.log(dev.firstName);  //john
console.log(dev['firstName']); //john


// update key:value
dev.firstName = "Joe";
console.log(dev.firstName);



//DSA is based on this
// add key: value pair

//if we have to add anything, then create a properties and asign a value,
//because unlike array we dont have option like(push,..) to add because object
//is unordered i.e there is no begonning and no end 
dev.officeAddress = "Btmlayout-bangalore";
console.log(dev);



//remove a key
// (to  delete in object, we have to use 'delete' operator)
delete dev.age;
console.log(dev);


