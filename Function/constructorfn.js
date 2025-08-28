//constructor function / class - pascal casing
//Player, PlayerDetails

function Player(pName, pCountry, pRuns){
    //1. Implicitly new empty object is assigned to this
    //2. Explicitly properties are assigned to this
    this.name = pName;
    this.country = pCountry;
    this.runs = pRuns;

    //method - defien the methos inside the constructor

    // this.details = function(){
    //     return `${this.name} plays for ${this.country}`;
    // }

    //3. implicitly returns value of this
}

Player.prototype.details = function(){
    return `${this.name} plays for ${this.country}`
}

//totalRuns methods (sums)
Player.prototype.totalRuns = function(){
    return this.runs.reduce((acc, cv) => acc + cv);
}



const p1 = new Player('virat', 'india', [100,50,60]);
console.log(p1);   // Player {name: 'virat', country: 'india', runs: [ 100, 50, 60 ],details: [Function (anonymous)]}
console.log(p1.details()); //virat plays for india'
console.log(p1.totalRuns()) //210

 
console.log(p1 instanceof Player);  //true
console.log(p1 instanceof Array);  //false