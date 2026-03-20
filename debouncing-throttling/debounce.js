/* we will create a function that returns the debounce 
version of anything 
*/

//fns for debounce and give me delay, after how many secs 
// should the API call be made
function debounce(fn, delay){
    let timerId;

    return function(...args){
        clearTimeout(timerId); //Cancel the last call
        timerId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const search = (query) => {
    console.log(`Searching for`, query);
} 
const searchWithDebounce = debounce(search, 1000);

//searching "Hard JS"
searchWithDebounce('Ha');
searchWithDebounce('Har');
searchWithDebounce('Hard');
searchWithDebounce('Hard J');
searchWithDebounce('Hard JS');
 