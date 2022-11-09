// Section 2
// 17. Strings and template literals

// let's start creating variables about a person so that we can concatenate them into one big string
const firstName = 'Maria';
const secondName = 'Eduarda';
const birthYear = 1999;
const currentYear = 2022;

const eduarda = `I'm ${firstName} ' ' ${secondName} and I am ${currentYear - birthYear}!`;
// javascript will simply convert this number to a string so that it can concatenate them with the rest of the strings

// without literal strings you write a new line this way
console.log('String with \n\
multiple \n\
lines');
// always means that a new line should be created

// with template strings, it's easier
console.log(`String
multiple
lines`)

