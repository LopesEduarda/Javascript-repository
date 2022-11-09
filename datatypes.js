// Section 2
// 12. Data Types

// Let's take a look in all the types that we have in JavaScript
// It's important to remember that in javascript every value is either an object or a primitive value

// This is an object
let me = { 
    name: 'Eduarda'
};

// This is a primitive value
let firstName = 'Maria';
let age = 30;
// A value is only a primitive when it's not an object


// Let's focus on the primitives: there are seven primitive data types
// 1- number, 2- string, 3- boolean, 4- undefined, 5- null, 6- symbol, 7- big int

// 1- Number: floating point numbers, used for decimals and integers
// they always have decimals, even if we don't see them or don't define them
// all numbers are simnply of the type number
let myAge = 23;

// 2- String: sequence of characters, used for text
// always put them in quotes, no matter if double quotes or single quotes
let myFirstName = 'Maria'

// 3- Boolean: logical type that can only be true or false, used for taking decisions
let fullAge = true;

// 4- Undefined: value taken by a variable that is not yet defined('empty value')
// a variable that is not yet defined is simply just a variable that we declared but without assigning a value
// basically we can say that undefined means empty value
let children;

// 5- Null: also means 'empty value'

// 6- Symbol(ES2015): value that is unique and cannot be changed

// 7- BigInt(ES2020): larger integers than the number type can hold
// basically it's another type before numbers 

// There is another fundamental thing to know about types which is the fact that javascript has a feature
// called dynamic typing: this means that when you create a new variable you do not have to manually define
// the data type of the value that it contains
// Javascript automatically determines the data type of a value when it's stored into a variable 
// and this distinction between value and variable is pretty important because in javascript it's the value that has a type, not the variable
// Value has type, NOT variable!!!
// variables simply store values that have a type

// Another important thing is that later in our code we can assign a different value for a variable
// it can start as a number and then become a string

// We can use this to comment our code: 
/* 

*/

// Typeof its and operator just like the plus or the minus operator that we can use to show he type of a value 
let javascriptIsFun = true;
console.log(typeof javascriptIsFun); // boolean
console.log(typeof true); // boolean
console.log(typeof 23); // number
console.log(typeof 'Maria'); // string

// We can change the value of a variable just like this:
javascriptIsFun = 'YES!';
// and what matters is that we do not write the 'let' again
// the first time that we declare a new variable we need to do it using let, but then when we want to change the value of the variable,
// we simply write it again like this but without the let 

// Remember that undefined is the value taken by a variable that is not yet defined, so basically undefined means empty value
// so every time we declare a variable without a value, it means undefined
let year;
// in this case, undefined is the variable AND the value!!!

year = 1999;
// again, we can reassign the value without the let





