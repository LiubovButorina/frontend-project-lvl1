#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let randomNumber;
let userAnswer;
let correctAnswer;
let counter;

for (counter = 1; counter <= 3; counter += 1) {
  randomNumber = Math.floor(Math.random() * 100) + 1; // returns random number from 1 to 100
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  console.log(`Question: ${randomNumber}`);
  userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
