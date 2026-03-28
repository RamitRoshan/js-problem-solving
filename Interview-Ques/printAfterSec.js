/* Interv.Ques
Print 1 after 1 sec, 2 after 2 sec, 3 after 3 sec, 4 after 4 seconds and 5 after 5 seconds..
*/

function x(){
    for(let i=1; i<=5; i++){
        setTimeout(function() {
            console.log(i);
        }, i*1000);
    }
}
x();