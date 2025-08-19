function getVowels(arr){
    const vowels = "aeiou";
    const result = arr.filter(function(ele){
        return vowels.includes(ele);
    });
    return result;
}
console.log(getVowels(['a', 'b', 'c', 'e', 'i', 'k'])); //['a','e','i']
// console.log(vowels);  //reference error