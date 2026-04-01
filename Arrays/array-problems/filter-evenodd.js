const prices = [100,125,250];

function getTotal(arr){
    let result = [];
    for(let i=0; i<arr.length; i++){
        result.push(arr[i]);
    }
    return result;
}
console.log(getTotal(prices));

