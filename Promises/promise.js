/*

 * Whenever, we are working with promises, 
 then there are 2 parts to Promise code.

1. promise producing code

it is, producing the promise.

2. promise consuming code

it is, consuming the promise.

90 -95% of the time, we will be working with 
*promise consuming code.

we do an API call: 
(here, we are consuming promise code)
axios.get()
    .then()
    .catch()

- using post method, to create .then & .catch
axios.post()
    .then()
    .catch()



    Product.find()
        .then()
        .catch()

    Product.save()
        .then()
        .catch()


- try & catch and then & catch both are same
 */