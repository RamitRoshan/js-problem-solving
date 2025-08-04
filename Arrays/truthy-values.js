//Q)find truthy values 

// function truthy(values){
//     return values.filter(Boolean);
// }

// console.log(truthy([false,true,0,1,undefined,NaN, 'dct','',[],[10]]));

// [true,1, 'dct', [], [10]];
//falsy values:  '', 0, false, undefined , NaN, null

function truthy(values){
    const result = values.filter(function(ele){
        return  Boolean(ele);
    })
    return result;
}

console.log(truthy([false,true,0,1,undefined,NaN, 'dct','',[],[10]]));


 
