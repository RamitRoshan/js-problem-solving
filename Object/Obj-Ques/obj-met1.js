//object literals
const player = {
    name: 'virat',
    country: 'India',
    runs: [40, 60, 50],
    matchPlayed: function(){  //only inside the method if we wants to refer to the properties then we use 'this' methods
        return this.runs.length;  //3
    },
    totalRuns: function(){
        const total = this.runs.reduce((acc, cv) => {
            return acc + cv;
        }, 0);
        return total;
    },
}
console.log(player.matchPlayed()); //3
console.log(player.totalRuns());  //150