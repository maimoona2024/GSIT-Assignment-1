// Tests for equality and inequality with strings
let city = 'Los Angeles';

console.log("Is city == 'Los Angeles'? I predict True.");
console.log(city == 'Los Angeles');

console.log("Is city != 'New York'? I predict True.");
console.log(city != 'New York');

// Tests using the lower case function
let country = 'United States';

console.log("Is country.toLowerCase() == 'united states'? I predict True.");
console.log(country.toLowerCase() == 'united states');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let userAge = 25;
let retirementAge = 65;

console.log("Is userAge == 25? I predict True.");
console.log(userAge == 25);

console.log("Is userAge != 30? I predict True.");
console.log(userAge != 30);

console.log("Is userAge < retirementAge? I predict True.");
console.log(userAge < retirementAge);

console.log("Is retirementAge > userAge? I predict True.");
console.log(retirementAge > userAge);

console.log("Is userAge >= 25? I predict True.");
console.log(userAge >= 25);

console.log("Is retirementAge <= 65? I predict True.");
console.log(retirementAge <= 65);

// Tests using "and" and "or" operators
let isStudent = true;
let isEmployed = false;

console.log("Is userAge > 18 and isStudent true? I predict True.");
console.log(userAge > 18 && isStudent);

console.log("Is userAge > 30 or isStudent true? I predict True.");
console.log(userAge > 30 || isStudent);

// Test whether an item is in an array
let groceryList = ['apple', 'banana', 'orange'];

console.log("Is 'banana' in groceryList array? I predict True.");
console.log(groceryList.indexOf('banana') !== -1);

// Test whether an item is not in an array
console.log("Is 'grape' not in groceryList array? I predict False.");
console.log(groceryList.indexOf('grape') === -1);
