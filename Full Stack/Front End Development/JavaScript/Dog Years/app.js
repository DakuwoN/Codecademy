// My current age 
const myAge = 35;

// The first two years of a dog's life count as 10.5 dog years each.
let earlyYears = 2;
earlyYears *= 10.5;

// Each following year equates to 4 dog years. 
let laterYears = myAge - 2;
laterYears *= 4;

// Checking the values we have so far. 
console.log(earlyYears, laterYears);

// Calculation for my age in Dog Years 
myAgeInDogYears = earlyYears + laterYears;

// String method after variable assignmnet 
let myName = 'Matthew'.toLowerCase();

// String interpolation 
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)