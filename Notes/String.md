# String

Strings are nothing, but arrays of character.


- Every character at the string present at certain index.
   
          let str = "javascript";
                     0123456789 


## Camel casing convention
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

# Primitive and non-primitive data types in JavaScript:
## 🧩 Primitive Data Types

- String

- Number

- Boolean

- Undefined

- Null

- Symbol

- BigInt

## 🧠 Non-Primitive (Reference) Data Types

- Object

- Array

- Function
  
## Note:

1. Primitive datatype are immutable(in immutable values, we cannot change the original value once it’s created).
           
           let name = "Ramit";
           name[0] = "K";  // ❌ This won’t change the string
           console.log(name); // Output: Ramit

   
2. Non-primitive datatype(an Object) are mutable.
3. **Include** methods return boolean value(i.e true or false).
                

                const str = "javascript";
                let vowels = "aeiou";
                let count = 0;
                
                for(let i=0; i<str.length; i++){
                    if(vowels.includes(str[i])){
                        count++;
                    }
                }
                console.log(count);


4. If you declare a variable and you don't give any value to it, then it is gonna be undefined.
   
                let count;
                console.log(count);
                o/p: undefined

                undefined + 1 => NaN

5. JS is a client side programming language (UI).


Q).If I have declared an array as a **const**, will I be able to make changes to that particular array? <br>
ans: Yes!, bcz end of the day arrays are mutable. <br> const will be applied here i.e no new value will be assigned, but whatever within that particular arrays, you can still make changes to it. <br>

> The rules of const is still applicable here, **const** says you cannot reassign a new value, but we can change in that particular arrays.<br>
e.g: 

             const players = ["sanu", "ramit"];
             players[0] = "sinni";
             //o/p: ["sinni", "ramit"]


# for-of loop
unlike for-loop, here we don't have to take care of **initialization , condition and operation** , all of this done internally here.

- It always traverse through beginning to end.
syntax:
            
            const str = "javascript";

            //char is a variable name
            for(let char of str){
                console.log(char);
            } //javascript


- same above thing we do like this using for-loop:
                 

                const str = "javascript";
             
                for(let i=0; i<str.length; i++){
                    console.log(str[i]);
                }




# truthy and falsy values:

1. falsy value:
        
        - 0, '', null, NaN, undefined, false.

2. truthy value: 
        
        - any thing which is not falsy is truthy
  

convert any value it to boolean, it either return true or false.