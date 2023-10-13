// If the user wants, they can enter their name here.
let userName = 'Matthew';

// If the user enters a name or not, we use a ternary operator with string interpolation to log two different statements.
userName ? console.log(`Hello ${userName}!`) : console.log('Hello');

// Question that the user wants to ask the Magic Eight Ball
const userQuestion = 'Will I become a good Full Stack engineer?';
console.log(`${userName} wants to ask the Magic Eight Ball this question: ` + userQuestion);

// We use the Math object to generate a random number between 0 and 7. Math floor rounds the random number down to the nearest whole number.
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

// Magic 8 ball using switch statements
// switch (randomNumber) {
//   case 0:
//     eightBall = 'It is certain';
//     break;
//   case 1:
//     eightBall = 'It is decidely so';
//     break;
//   case 2:
//     eightBall = 'Reply hazy try again';
//     break;
//   case 3:
//     eightBall = 'Cannot predict now';
//     break;
//   case 4:
//     eightBall = 'Do not count on it';
//     break;
//   case 5:
//     eightBall = 'My sources say no';
//     break;
//   case 6:
//     eightBall = 'Outlook not so good';
//     break;
//   case 7:
//     eightBall = 'Signs point to yes';
//     break;
// }

if (randomNumber === 0) {
  eightBall = 'It is certain';
} else if (randomNumber === 1) {
  eightBall = 'It is decidely so';
  } else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again';
  } else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
  } else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
  } else if (randomNumber === 5) {
    eightBall = 'My sources say no';
  } else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
  } else if (randomNumber === 7) {
    eightBall = 'Signs point to yes';
  } else {
    console.log('Please try again.')
  }



console.log(`The Magic 8 ball says, ${eightBall}!`)


