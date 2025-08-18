//practicing objects 


/*
I/P: 'dct'
O/P: //{d:'D', c:'C', t: 'T'}
*/
function pair(str){
    const result = {};
    for(let i=0; i<str.length; i++){
        let char = str[i];
        result[char] = char.toUpperCase();
    }
    return result;
}
console.log(pair('dct')); 
