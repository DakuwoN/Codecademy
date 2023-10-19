// Text thats being translated
let input = 'Hi, Human';

// Whales only speak using vowels 
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Array used to store the vowels from the input string 
let resultArray = [];

// Loop through each letter of input 
for (let i = 0; i < input.length; i++) {
  // console.log(i);
  // Checks if each letter in the input string is equal to 'e', if so, we push this letter to the resultsArray, to handle the double letters.
  if (input[i] === 'e') {
      resultArray.push(input[i]);
    }
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  // Loop through vowels, this will enable us to check each input letter against the vowels 
  for (let j = 0; j < vowels.length; j++){
    // console.log(j);
    // Compares the input letter to every letter in vowels array 
    if (input[i] === vowels[j]) {
      // console.log(input[i]);
      // Adds the letters to the results array 
      resultArray.push(input[i]);
      // console.log(resultArray);
    }
    
  }
  // console.log(resultArray);
  // This variable takes our resultsArray and mutates the array into a single string and capitalizes all of the letters. 
  let resultString = resultArray.join(' ').toUpperCase();
  console.log(resultString)
}