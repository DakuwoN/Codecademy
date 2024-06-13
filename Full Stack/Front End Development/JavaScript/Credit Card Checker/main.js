// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
// Boolean function, returns true if credit card is legit, and false otherwise. Function should NOT MUTATE the values of original array.
const validateCred = myArray => {
  // Sum of digits 
  let sum = 0;
  // Start from second to last digit (CheckDigit) and move left in steps of 2
  for (let checkDigit = myArray.length - 2; checkDigit >= 0; checkDigit -= 2){
    // Double the value of the current digit 
    let doubled = myArray[checkDigit] * 2;
    // If doubling results in a number greater than 9, subtract 9
    if (doubled > 9){
      doubled -= 9
    }
    // Add the doubled number to the sum 
    sum += doubled; 
  }
 
  // Start from the last digit and move left in steps of 2 
  for (let i = myArray.length - 1; i >= 0; i -= 2) {
    // Add the current digit to the sum 
    sum += myArray[i];
  }
  // Check if the sum is a multiple of 10 
  return sum % 10 === 0;
};


const findInvalidCards = nestedArray => {
  // Array stores invalid card 
  let invalidCards = [];
  // For each method to iterate the nestedArray 
  nestedArray.forEach(card => {
    // Check the validity of each card using validateCred function 
    if (validateCred(card) === false) {
      // If the card is invalid, add it to the invalidCard array 
      invalidCards.push(card);
     }
   });
  // Return the array of invalid cards
  return invalidCards  
};



const idInvalidCardCompanies = nestedArrayCompany => {
  // Stores the companies with invalid cards 
  let badCompanies = [];

  for (const card of nestedArrayCompany){
    // check for card validation
    if (validateCred(card) === false) {
      const firstDigit = card[0]; // Get the first digit of the card 

      // Switch statement to map the first digit to the company 
      let companyName = "";
      switch (firstDigit) {
        case 3:
          companyName = "Amex (American Express)";
          break;
        case 4:
          companyName = "Visa";
          break;
        case 5:
          companyName = "Mastercard";
          break;
        case 6:
          companyName = "Discover";
          break;
        default:
          companyName = "Company not found";
      }

    // Check if the company is not already in the badCompanies array 
    if (badCompanies.indexOf(companyName) === -1) {
      badCompanies.push(companyName);
    }
    }
  }
return badCompanies; 
 
};

console.log(idInvalidCardCompanies(batch));






