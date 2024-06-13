// console.log('hi');

// User should be able to choose 'rock', 'paper', or 'scissors' when the game starts.
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  // Verify if user input is valid.
  if (userInput === 'rock') {
    return userInput;
  } else if (userInput === 'paper') {
    return userInput;
  } else if (userInput === 'scissors') {
    return userInput;
  } else if (userInput === 'bomb') {
      return userInput;
  } else {
    console.log('Please enter valid input.');
  }
};

// Computer's choice 
const getComputerChoice = () => {
  let compChoice = Math.floor(Math.random() * 3);
  switch (compChoice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
    return 'scissors';
      break;
    // default:
    //   console.log('Please select a valid option.'); 
  }
};

// Determine a winner, compares two choices played and then returns if the human player won, lost, or tied.
const determineWinner = (userChoice, computerChoice) => {
  // if userinput is bomb (cheat code)
  if (userChoice === 'bomb') {
    return 'You automatically win! (Cheatcode enabled)';
  }
  // checks for tie 
  if (userChoice === computerChoice) {
    return 'This game ends in a tie.';
  }
  // if not a tie, we determine a winner
  if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return 'The computer wins!';
    } else {
      return 'You win!';
    }
  }

  // checks for winner in second situation
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer wins!';
    } else {
      return 'You win!';
    }
  }

  // checks for winner in third situation 
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer wins!';
    } else {
      return 'You win!';
    }
  }

};

// This starts the game 
const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);
  // Determine the winner 
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();

