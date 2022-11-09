// Section 2
// 13. Let, const and var

// Let's take a look in the three different ways of declaring variables in JavaScript
// let and const were introduced in ES6, so they are modern javascript, while the var keyword is the old way of declaring variables

// We use the let keyword to declare variables that can change later so basically during the execution of our program
let age = 30;
age = 31;
// In technical terms, we call this reassigning a value to a variable, or also we say that we mutate the age variable in this case
// And that also counts for the case that we want to declare empty variables to reassign the value later


// We use the const keyword to declare variables that are not supposed to change at any point in the future
// so a value in a const variable cannot be changed
// for example, let's say the birth year, 1999 for example
const birthYear = 1999;
// if we tried to reassign that let's say do 1998, it should not work
// we also cannot declare empty const variables

// Should i use let or const to declare a new variable?
// as a best practice for writing clean code, use const by default and let only when you are really sure that the variable needs to change
// for example, the variable age, because it is going to change at some point in the future, so we use let

// The reason for this is that its a good practice to have as little variable mutations or variable changes as possible, because changing
// variables introduces a potential to create bugs


// There is also var keyword to declare variables, but this one should be completely avoided, but we need to know how it works for legacy
// reasons because you will see this maybe in older code basis or some older tutorials

// var is basically the old way of defining variables, prior to ES6
// at first sight, it works actually pretty much the same as let
var job = 'programmer';
job = 'teacher'
// although it looks like var and let are very similar, they are very different