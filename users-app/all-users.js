const axios = require('axios');
const url = "https://jsonplaceholder.typicode.com/users/100";

/*
    1. using axios make a request to the server
    2. once fullfiled
        * first console log to see the response.data
        * after than assign response.data to a variable called as users
        * log - Total Users - length of the array
        * loop over the array and print just the username
        * using the forEach
    3. If any error log the error message 

*/

axios.get(url)  //initial state
    .then((response) => {  // fulfiled state
        console.log(response.data)
    })
    .catch((err) => {   //rejected state
        console.log(err.message)
    })

// axios.get(url)
//      .then((response) => {  //fullfiled
//         const users = response.data;

//         //Total users (length of the array)
//         console.log("Total users: " , users.length);

//         // loop over the array and print usernames
//         users.forEach((user) => {
//             console.log(user.username);
//         });  
//      })
//      .catch((err) => {
//         console.log(err.message);
//      })