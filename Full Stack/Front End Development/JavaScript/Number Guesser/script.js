let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// This function returns a random integer between 0 and 9
// This function is called at the start of each new round so we can generate a new secret target number.
const generateTarget = () => {
  return Math.floor(Math.random() * 10);

};

// Determines which player wins based on the guess that is closer to the target number, if both players tie, the human should win.
// Returns true if the human player wins, and false if the computer player wins.
const compareGuesses = (human, computer, target) => {
  const humanResult = Math.abs(target - human); 
  const computerResult = Math.abs(target - computer);

  // if (humanResult <= computerResult) {
  //       return true 
  // } else {
  //      return false;
  // }
  return humanResult <= computerResult;

};
  


// Increases the score variable by 1 depending on the winner passed in to updateScore.
const updateScore = (winner) => {
  winner === 'human' ? humanScore++ : computerScore++; 

  // if (winner === 'human') {
  //   humanScore++;
  // } else {
  //   computerScore++;
  // }

};

//Increases the value of the currentRoundNumber by 1, update the round number after each round.
const advanceRound = () => {
  currentRoundNumber++;



};