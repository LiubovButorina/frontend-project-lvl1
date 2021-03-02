import { getRandomValue, games } from '../index.js';

const getExpression = () => {
  const value = getRandomValue();
  const expression = `${value}`;
  return [value, expression];
};

const getCorrectAnswer = (value) => {
  if (value % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const isEven = () => {
  let value;
  let expression;
  let correctAnswer;
  const rounds = 3;
  const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  const results = [];

  for (let counter = 1; counter <= rounds; counter += 1) {
    [value, expression] = getExpression();
    correctAnswer = getCorrectAnswer(value);
    results.push([expression, correctAnswer]);
  }
  games(gameQuestion, results);
};

export default isEven;
