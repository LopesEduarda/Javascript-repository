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