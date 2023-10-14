// Determine how many hours of sleep you got each night of the week.
const getSleepHours = day => {


  switch (day) {
    case 'Monday':
      return 8;
      break;
    case 'Tuesday':
      return 7;
      break;
    case 'Wednesday':
      return 6;
      break;
    case 'Thursday':
      return 5;
      break;
    case 'Friday':
      return 4;
      break; 
    case 'Saturday':
      return 3;
      break;
    case 'Sunday':
      return 2;
      break;
    default:
      return 'Please enter a valid day of the week';
    
  }
};

// Calculate the total sleep hours actually slept, using implcit return by removing the curly braces.
// const getActualSleepHours = () => 
//   getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getActualSleepHours = () => 8 + 7 + 6 + 5 + 4 + 3 + 2;



// Calculate the ideal amount of sleep preferred.
// const  getIdealSleepHours = () => {
//   const idealHours = 8;
//   return idealHours * 7;
// }

const getIdealSleepHours = idealHours => idealHours * 7;

// Calculate the amount of sleep debt 
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed. You got ' + (actualSleepHours - idealSleepHours) + 'more sleep than you actually needed, good job!');
  } else {
    console.log('You should get some rest! You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
}; 

calculateSleepDebt();
