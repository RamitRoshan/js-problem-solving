// const p3 = {
//     name: 'rohit',
//     runs: [100, 50, 80],
//     calcAvg: function(){
//         const total = this.runs.reduce((acc, cv) => acc + cv);
//         return total/this.runs.length;
//     }
// }
// console.log(p3.name);


//Constructor Function -> here we use to give the name of the fuction capital letter so that
// it would be easy for us to identify , this is a constructor fn ..

//name - should be in capital letter
function Player(){
}
const p1 = Player();
//without new keywords constructor will return undefined
console.log(p1);  //undefined


//What will constructor return with new keywords
const p2 = new Player();
console.log(p2); //{} i.e Player {}