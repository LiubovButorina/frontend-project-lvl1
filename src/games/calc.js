const getExpression = () => {
  const arr = ['+', '-', '*'];
  const value1 = Math.floor(Math.random() * 50) + 1;
  const value2 = Math.floor(Math.random() * 50) + 1;
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
  const [value1, value2, operand, expression] = getExpression();
  const correctAnswer = getCorrectAnswer(value1, value2, operand);
  return [expression, correctAnswer];
};

export default calc;
