const getExpression = () => {
  const value = Math.floor(Math.random() * 100) + 1;
  const expression = `${value}`;
  return [value, expression];
};

export default getExpression;
