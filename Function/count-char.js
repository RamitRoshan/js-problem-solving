function countCharacters(str, char){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] == char){
            count = count +1;
        }
    }
    return count;
}
const r1  = countCharacters('abcadcab', 'a'); //3
console.log(r1);
console.log(countCharacters('ddddd', 'd')); //5