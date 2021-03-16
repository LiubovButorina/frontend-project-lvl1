const getExpression = () => {
  const arr = [];
  const firstNumber = Math.floor(Math.random() * 50) + 1;
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
  const [missingNumber, expression] = getExpression();
  const correctAnswer = missingNumber;
  return [expression, correctAnswer];
};

export default progression;
