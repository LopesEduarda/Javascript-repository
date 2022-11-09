// Section 2
// 14. Basic Operators

// Let's start with what is an operator: basically allows us to transform values or combine multiple values and really do all kinds of work with values
// There are many categories of operators, like mathematical operators, comparison operators, logical operators, assignment operators and many more

// Let's start with the mathematical operators
// We are going to use the minus operator to calculate ages based on a person's birth year
const currentYear = 2037;
const ageMaria = currentYear - 1999;
const ageJoao = currentYear - 1996;
console.log(ageMaria);
console.log(ageJoao);
// notice that we are using great variable names here
// we can also do different calculations
console.log(ageMaria * 2, ageMaria / 2);
// let's also use the exponentiation operator
console.log(ageMaria / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 * 2 * 2 * 2


// We can use the plus operator to join strings or concatenate different strings
const firstName = 'Maria';
const secondName = 'Eduarda';
const fullName = `My first name is ${firstName} and my second name is ${secondName}!`;
console.log(firstName + ' ' + secondName);


// Assignment operators
// the most straightforward assignment operator is just the equal sign
let x = 10 + 5; // 15
x += 10; // what does plus equal actually mean? 
// it means: x = x + 10. its just a smaller way to write it
// at this point the result is 25
x *= 4; // it means: x = x * 4 = 100
x++; // it means: x = x + 1
x--; // it means: x = x - 1
console.log(x);


// Comparison operators
// basically we use comparison operators to produce boolean values
console.log(ageMaria > ageJoao); // >, <, >=, <=
// the result either is true or false
