import readlineSync from 'readline-sync';
import greeting from './cli.js';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1; // random number from 1 to 100

const getCorrectAnswer = (randomNumber) => {
  if (randomNumber % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const checkIsEven = () => {
  let randomNumber;
  let userAnswer;
  let correctAnswer;
  let counter;

  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (counter = 1; counter <= 3; counter += 1) {
    randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);

    userAnswer = readlineSync.question('Your answer: ');
    correctAnswer = getCorrectAnswer(randomNumber);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (counter === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default checkIsEven;
