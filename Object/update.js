const cart = [
    {prodId:101, name:'marker', qty:1},
    {prodId:211, name:'scale', qty:2}
];
//update the quantity by 1 of prodId 211

//find the product
const product = cart.find((ele)=>{
    return ele.prodId == 211;
});
console.log(product);


//update the qty(quantity)
/* 
Any changes made to the variable, will reflect within the array because 
of 'copy by reference'
*/
product.qty += 1;
console.log(product);
console.log(cart);