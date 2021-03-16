const getExpression = () => {
  const value = Math.floor(Math.random() * 100) + 1;
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
  const [value, expression] = getExpression();
  const correctAnswer = getCorrectAnswer(value);
  return [expression, correctAnswer];
};

export default isEven;
