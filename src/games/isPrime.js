const getExpression = () => {
  const value = Math.floor(Math.random() * 100) + 1;
  const expression = `${value}`;
  return [value, expression];
};

const getCorrectAnswer = (value) => {
  if (value === 1) {
    return 'no';
  }
  for (let counter = 2; counter <= value / 2; counter += 1) {
    if (value % counter === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const isPrime = () => {
  const [value, expression] = getExpression();
  const correctAnswer = getCorrectAnswer(value);
  return [expression, correctAnswer];
};

export default isPrime;
