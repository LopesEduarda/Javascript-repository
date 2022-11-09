// Section 2
// 15. Operator precedence

// The question by the end of the last class was why there two subtractions here are executed before this comparison operator?
const currentYear = 2037;
const ageMaria = currentYear - 1999;
const ageJoao = currentYear - 1996;
console.log(currentYear - 1999 > currentYear - 1996);
// so basically the question is: why does this work?
// it works this way because javascript has a well-defined order of operator precedence
// so basically the order in wich operators are executed

// the two calculations are done before the comparison
// its just important to have a general ideia of which operators are executed first
// usually all the math operators are executed before the comparison operators
// there is also operators that are executed left-to-right and right-to-left

// here is something nice: we can declare 2 variables at the same time just like this
let x, y;
x = y = 25 - 10 - 5 ; // x = y = 10

// the one with the highest precedence is grouping, basically using parenthesis, and that works just like in mathematics,
// where operations within parenthesis are also executed first
const averageAge = (ageMaria + ageJoao) / 2

