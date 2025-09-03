function removeLastEle(){
    const original = [1, 2, 3];
    //using deep copy 
    const modified = [...original]; //copy by reference or shallow copy
    modified.pop();

    return {original: original, modified:modified};
}
console.log(removeLastEle()); //{original: [1,2,3], modified: [1,2]}


//if we dont use deep copy[... orginal] then the original also got change 
// and will give [1,2] becuase of pop();