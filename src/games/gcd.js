const getExpression = () => {
  const value1 = Math.floor(Math.random() * 50) + 1;
  let value2 = Math.floor(Math.random() * 50) + 1;
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
  const [value1, value2, expression] = getExpression();
  const correctAnswer = getCorrectAnswer(value1, value2);
  return [expression, correctAnswer];
};

export default gcd;
