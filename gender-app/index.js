//IQ) create a registration page where user will give name, email and in the process of typeing mail it should identify the gender ,automaticcaly



//we use require here, to indicate that we are going to use axios
const axios = require('axios')
const userName = "kate";
const url = `https://api.genderize.io/?name=${userName}`;

axios.get(url) //pending == initialized
    .then((response) =>{  //fullfiled == success
        const result  = response.data;
        console.log(`The gender of ${userName} is ${result.gender}`)
    })
    .catch((err) => {  //rejected == failure
        console.log(err.message);
    })


 