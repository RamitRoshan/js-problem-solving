// const arr = [10, 20, 10, 20, 30];
// const unique = arr.filter((val, index) => arr.indexOf(val) === index);
// console.log(unique); //[10, 20, 30]


const array = [10, 20, 10, 20, 30];

const unique = array.filter(function (ele, index) {
  return array.indexOf(ele) === index;
});

console.log(unique); // [10, 20, 30]

/*

indexof = > gives only first elements

ite ele index  array.index(ele)   cond       result
1   10   0      0                 true       [10]
2   20   1      1                 true       [10,20]
3   10   2      0                 false      [10,20]
4   20   3      1                 false      [10, 20]
5   30   4      4                 true       [10, 20, 30]

*/