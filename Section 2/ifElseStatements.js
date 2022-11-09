// Section 2
// 18. Taking decisions: if / else statements

// Let's say we want to write a program which checks whether a person is allowed to start taking a driver's license or not
// and if she is, then it will print that to the console

const age = 15;
const isOldEnough = age >= 18;

// if the condition is true, this block will be executed
// and with condition i mean something with a boolean value
if (isOldEnough) {
    console.log('Eduarda can start driving license!')
} else {
    const yearsLeft = 18 - age;
    console.log(`Eduarda cannot start driving! There are ${yearsLeft} years left to that happen!`);
};
// this is very important because we take decisions in programming all the time


// Now lets create a variable condititonally instead of using console.log
const birthYear = 1999;
// and now we are going to create a variable called 'century' in which this person was born
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
// any variable that we declare inside of one of there blocks will not be accessible outside of them