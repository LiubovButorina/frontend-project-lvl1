import { getRandomValue, games } from '../index.js';

const getExpression = () => {
  const value1 = getRandomValue();
  let value2 = getRandomValue();
  if ((value1 % 2 === 0 && value2 % 2 !== 0) || (value1 % 2 !== 0 && value2 % 2 === 0)) {
    value2 += 1;
  }
  const expression = `${value1} ${value2}`;
  return [value1, value2, expression];
};

const getCorrectAnswer = (value1, value2) => {
  let a = value1;
  let b = value2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const gcd = () => {
  let value1;
  let value2;
  let expression;
  let correctAnswer;
  const rounds = 3;
  const gameQuestion = 'Find the greatest common divisor of given numbers.';
  const results = [];

  for (let counter = 1; counter <= rounds; counter += 1) {
    [value1, value2, expression] = getExpression();
    correctAnswer = getCorrectAnswer(value1, value2);
    results.push([expression, correctAnswer]);
  }
  games(gameQuestion, results);
};

export default gcd;
