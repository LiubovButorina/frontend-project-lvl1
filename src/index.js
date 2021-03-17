import readlineSync from 'readline-sync';
import isEvenNumber from './games/isEven.js';
import calc from './games/calc.js';
import getGcd from './games/gcd.js';
import getProgressionElement from './games/progression.js';
import isPrimeNumber from './games/isPrime.js';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getGameExpressionCorrectAnswer = (gameName) => {
  let [expression, correctAnswer] = [];
  switch (gameName) {
    case 'even':
      [expression, correctAnswer] = isEvenNumber();
      break;
    case 'calc':
      [expression, correctAnswer] = calc();
      break;
    case 'gcd':
      [expression, correctAnswer] = getGcd();
      break;
    case 'progression':
      [expression, correctAnswer] = getProgressionElement();
      break;
    case 'prime':
      [expression, correctAnswer] = isPrimeNumber();
      break;
    default:
      break;
  }
  return [expression, correctAnswer];
};

const isAnswersMatch = (userAnswer, correctAnswer, userName) => {
  if (userAnswer === String(correctAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

const playBrainGames = (gameName, gameQuestion) => {
  let expression;
  let userAnswer;
  let correctAnswer;
  const maxRounds = 3;
  let answersMatch;

  const userName = greeting();
  console.log(gameQuestion);

  for (let i = 1; i <= maxRounds; i += 1) {
    [expression, correctAnswer] = getGameExpressionCorrectAnswer(gameName);
    console.log(`Question: ${expression}`);
    userAnswer = readlineSync.question('Your answer: ');
    answersMatch = isAnswersMatch(userAnswer, correctAnswer, userName);
    if (!answersMatch) {
      break;
    }
    if (i === maxRounds) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default playBrainGames;
