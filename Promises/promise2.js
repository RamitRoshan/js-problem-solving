/*

   India Vs Australia
   India won the toss and decide to batting

   4 hours
   200 - 150
   india win by 50

   200 - 201(2 wickets down)
   australia win by 8 wickets

   
*/

const match = new Promise((resolve, reject) => {
    let indiaWon;
    setTimeout(() => {
        indiaWon = true;
        if(indiaWon){
            resolve('india wins by 50 ');
        }else {
            reject(new Error('australia wins by 8 wickets'));
        }
    }, 4000);
});

match
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })


for(let i=1; i<100; i++){
    console.log('match ongoing');
}