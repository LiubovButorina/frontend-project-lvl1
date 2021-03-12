import { getRandomValue, games } from '../index.js';

const getExpression = () => {
  const arr = [];
  const firstNumber = getRandomValue();
  const difference = Math.floor(Math.random() * 10) + 1;
  const progressionLength = 10;
  let tmp = firstNumber;
  let expression = '';

  arr.push(tmp);
  for (let i = 1; i < progressionLength; i += 1) {
    tmp += difference;
    arr.push(tmp);
  }
  const missingNumber = arr[Math.floor(Math.random() * arr.length)];
  // eslint-disable-next-line no-restricted-syntax
  for (const element of arr) {
    if (element === missingNumber) {
      expression += '.. ';
    } else {
      expression += `${element} `;
    }
  }
  return [missingNumber, expression];
};

const progression = () => {
  let missingNumber;
  let expression;
  let correctAnswer;
  const rounds = 3;
  const gameQuestion = 'What number is missing in the progression?';
  const results = [];

  for (let counter = 1; counter <= rounds; counter += 1) {
    [missingNumber, expression] = getExpression();
    correctAnswer = missingNumber;
    results.push([expression, correctAnswer]);
  }
  games(gameQuestion, results);
};

export default progression;
