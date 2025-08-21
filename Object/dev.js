const developer = {
    name: 'sam',
    skills: ['js', 'java', 'react', 'python'],
    //method using function keywords
    details: function(){
        //forEach=array methods
        //ele- each element in the array 
        this.skills.forEach((ele) => { //fixed (here we use arrow fn which borrow the value of this keyword from outer scope)
            console.log(`${this.name} knows ${ele}`);
        })
        // this.skills.forEach(function(ele){ //Bug
        //     console.log(`${this.name} knows ${ele}`);  //bcoz of function expression, this refers to global object.
        // })
    }

}
developer.details();


/*
sam knows js
sam knows java
sam knows react
sam knows python
*/