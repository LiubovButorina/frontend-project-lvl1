import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

// random number from 1 to 100
export const getRandomValue = () => Math.floor(Math.random() * 100) + 1;

const checkAnswers = (userAnswer, correctAnswer, userName) => {
  if (userAnswer === String(correctAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

export const games = (gameQuestion, results) => {
  let userAnswer;
  let success;
  let maxRounds = 1;
  const userName = greeting();
  console.log(gameQuestion);

  // eslint-disable-next-line no-restricted-syntax
  for (const [expression, correctAnswer] of results) {
    console.log(`Question: ${expression}`);
    userAnswer = readlineSync.question('Your answer: ');
    success = checkAnswers(userAnswer, correctAnswer, userName);
    if (!success) {
      break;
    }
    if (maxRounds === 3) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      maxRounds += 1;
    }
  }
};
