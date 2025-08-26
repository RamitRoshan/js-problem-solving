
/* 
VERSION 1
fetch all the todos belonging to a user
url - https://jsonplaceholder.typicode.com/users/1/todos

Total Todos - 20
Completed Todos - 12
Pending Todos - 8
*/
const axios = require('axios');
const url = "https://jsonplaceholder.typicode.com/users/1/todos";

axios.get(url)
     .then((response)=> {
        const userTodos = response.data;

        const completedTodos = userTodos.filter((ele) => {
            return ele.completed;
        });

        const pendingTodos = userTodos.filter((ele) => {
            return !ele.completed;
        });
        console.log(`Total Todos - ${userTodos.length}`)
        console.log(`Completed Todos- ${completedTodos.length}`);
        console.log(`Pending Todos- ${pendingTodos.length}`);
        console.log("\n");
        console.log(`Listing Completed Todos - ${completedTodos.length} `)
        completedTodos.forEach(ele => console.log(ele.title));
        pendingTodos.forEach(ele => console.log(ele.title));
 

        // const completedTodos  = userTodos.filter(todo => todo.completedTodos).length;
        // const pendingTodos  = userTodos.filter(todo => !todo.completedTodos).length;
     })
     .catch((err) => {
        console.log(err.message);
     })




/*
VERSION 2
Listing Completed Todos -12
* T1
* T3
...

Listing Pending Todos - 8
* T2
* T4
*/

