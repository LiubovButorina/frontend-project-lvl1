import { getRandomValue, games } from '../index.js';

const getExpression = () => {
  const arr = ['+', '-', '*'];
  const value1 = getRandomValue();
  const value2 = getRandomValue();
  const operand = arr[Math.floor(Math.random() * arr.length)];
  const expression = `${value1} ${operand} ${value2}`;
  return [value1, value2, operand, expression];
};

const getCorrectAnswer = (value1, value2, operand) => {
  switch (operand) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    default:
      return NaN;
  }
};

const calc = () => {
  let value1;
  let value2;
  let operand;
  let expression;
  let correctAnswer;
  const rounds = 3;
  const gameQuestion = 'What is the result of the expression?';
  const results = [];

  for (let counter = 1; counter <= rounds; counter += 1) {
    [value1, value2, operand, expression] = getExpression();
    correctAnswer = getCorrectAnswer(value1, value2, operand);
    results.push([expression, correctAnswer]);
  }
  games(gameQuestion, results);
};

export default calc;
