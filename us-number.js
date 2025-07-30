const mobile = "9740411567";
//o/p- (97) 4041-1567

const num1 = mobile.slice(0,2) 
const num2 =  mobile.slice(2,6);
const num3 = mobile.slice(6);

const formatted = "(" + num1 + ") " + num2 + "-" + num3;
//const formatted = `(${num1}) ${num2} - ${num3}`;
console.log(formatted);






