const getExpression = () => {
  const progresElements = [];
  const firstElement = Math.floor(Math.random() * 50) + 1;
  const difference = Math.floor(Math.random() * 10) + 1;
  const progressionLength = 10;
  let tmp = firstElement;
  let expression = '';

  // progresElements.push(tmp);
  for (let i = 0; i < progressionLength; i += 1) {
    progresElements.push(tmp);
    tmp += difference;
    // arr.push(tmp);
  }
  const missingElement = progresElements[Math.floor(Math.random() * progresElements.length)];
  // eslint-disable-next-line no-restricted-syntax
  for (const element of progresElements) {
    if (element === missingElement) {
      expression += '.. ';
    } else {
      expression += `${element} `;
    }
  }
  return [missingElement, expression];
};

const getProgressionElement = () => {
  const [missingElement, expression] = getExpression();
  const correctAnswer = missingElement;
  return [expression, correctAnswer];
};

export default getProgressionElement;
