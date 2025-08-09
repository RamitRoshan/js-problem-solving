// where and which loops we can use 
// for-loop - String + Array (fastested loop)
// forEach - Array (2nd fastested loop) in terms of seconds
// for of - String + Array (3rd fastested loop)

// for in - Object

const fruits = [ 'mango', 'orange', 'banana'];
fruits.forEach((ele) => {
    console.log(ele.toUpperCase());
});