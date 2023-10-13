// Race numbers are assigned randomly.
let raceNumber = Math.floor(Math.random() * 1000);

// Variable for if the runner registered early or late 
const registeredEarly = true; 

// Runners age 
const runnerAge = 18;

// Check if the runner is an adult and registered early.
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
};

// Check if runner is an adult and registered early.
// Then we check if runner is adult and did not register early.
// Next we check if the runner is below 18.
// If the runner is exactly 18, we send them to the registration desk.
if (runnerAge > 18 && registeredEarly) {
  console.log(`${raceNumber}, you will race at 9:30AM.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`${raceNumber}, you will race at 11:00AM`);
} else if (runnerAge < 18) {
  console.log(`${raceNumber}, you will race at 12:30PM`)
} else {
  console.log('Please see the registration desk.')
}

