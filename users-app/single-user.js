const axios = require('axios');
const id = 2;
axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
     .then((response) => {
        const result = response.data;
        // console.log(result);

        //printing - email - city(latitude(lat), longitude(lng)) - website - company name
        console.log(`
        Username: ${result.username}
        Email: ${result.email}
        City: ${result.address.city}
        lat/lng: ${result.address.geo.lat} , ${result.address.geo.lng}
        Website: ${result.website}
        Company: ${result.company.name}
        `);
     })
     .catch((err) => {
        console.log(err.message); //if applied => Request failed with status code 404
        console.log(err.code);  //if applied => ERR_BAD_REQUEST
     })