# String

Strings are nothing, but arrays of character.


- Every character at the string present at certain index.
   
          let str = "javascript";
                     0123456789 


## camel casing convention
eg: **userDetails** <br>
we use camel casing convention in c influenced language - C, C++, Java, JavaScript.


## snake casing
e.g: **user_details** <br>
we use this in basic influenced language - python, ruby.


## pascal casing
e.g: **UserDetails** <br>
Here every first letter will be in capital - We basically used this when, we are creating class.(it's application everywhere like: c++, python , java, javascript)


## kebab casing
e.g: **user-details** <br>
we use this to create a file names.


- In String use, either **for-loop or for of loop**
 
<br>


Q) What is NaN(not a number) in JavaScript? <br>
ans: When an arithmetic operation cannot be performed, JS returns NaN. <br>
e.g:

                let c = 10/"a";
                console.log(c);
                O/P: NaN


TO determine is this NaN or not :
                 
                 let c = 10/"a";
                 console.log(c);
                 Number.isNaN(c); // true


# ES6 features -> Template literal or String literal
The purpose of this particular concept is, whenever you want to do a **String concatenation** especially which involves formatting of the string, then we can use this. <br>

e.g: here we will use **backtick** (``): 


                console.log(`plus - ${plusCount}`);

                code: 
                 
                const source = "bangalore", destination = "mysore", distance = 140, time = "2 hours, 30 mins";

                //using template/string literals

                console.log(`The distance between ${source} and ${destination} is ${distance} kms and the time taken to travel is ${time}`);




## String concatenation i.e using "+" operator

e.g: 

                const source = "bangalore", destination = "mysore", distance = 140, time = "2 hours, 30 mins";

                console.log('The distance between ' + source + ' and ' + destination + ' is ' + distance + ' kms and the time taken to travel is ' + time);


# Ternary Operator
The Ternary Operator in JavaScript is a conditional operator that evaluates a condition and returns one of two values based on whether the condition is true or false. <br>

It does the same thing, which is basically done by If-ELSE statement.

Syntax:

        condition ? trueExpression : falseExpression

Example
If the value of age is < 18, set the value of text to "Minor", otherwise to "Adult":

        let text = (age < 18) ? "Minor" : "Adult";


        //same code using if-else
        let text;

        if (age < 18) {
           text = "Minor";
        } else {
           text = "Adult";
        }
