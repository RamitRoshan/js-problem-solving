//for loop

/* 
for(initialization; condition; operationn(increment/decr)){
    body
}
*/

//Q) print 12 to 20
let output = "";
for(let i=12; i<=20; i++){
    // console.log(i);
    output += i + " ";
}
console.log(output);


//print 50 - 54
for(let i =50; i<=54; i++){
    console.log(i);
}

/*
DRY RUN:
                       i<=54
iteration     i        condi  c.log    operation(i++)
1             50       true   50         51
2             51       true   51         52
3             52       true   52         53
4             53       true   53         54
5             54       true   54         55
6             55       false
*/


//print 0 to 9
for(let i =0; i<10; i++){
    console.log(i);
}