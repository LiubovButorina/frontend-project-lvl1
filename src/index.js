import readlineSync from 'readline-sync';
import isEven from './games/isEven.js';
import calc from './games/calc.js';
import gcd from './games/gcd.js';
import progression from './games/progression.js';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getGameExpressionCorrectAnswer = (gameName) => {
  let [expression, correctAnswer] = [];
  switch (gameName) {
    case 'isEven':
      [expression, correctAnswer] = isEven();
      break;
    case 'calc':
      [expression, correctAnswer] = calc();
      break;
    case 'gcd':
      [expression, correctAnswer] = gcd();
      break;
    case 'progression':
      [expression, correctAnswer] = progression();
      break;
    default:
      break;
  }
  return [expression, correctAnswer];
};

const checkAnswers = (userAnswer, correctAnswer, userName) => {
  if (userAnswer === String(correctAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

const games = (gameName, gameQuestion) => {
  let userAnswer;
  let expression;
  let correctAnswer;
  const maxRounds = 3;
  let success;

  const userName = greeting();
  console.log(gameQuestion);

  for (let counter = 1; counter <= maxRounds; counter += 1) {
    [expression, correctAnswer] = getGameExpressionCorrectAnswer(gameName);
    console.log(`Question: ${expression}`);
    userAnswer = readlineSync.question('Your answer: ');
    success = checkAnswers(userAnswer, correctAnswer, userName);
    if (!success) {
      break;
    }
    if (counter === maxRounds) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default games;
