import readlineSync from 'readline-sync';
import { roundsNumber } from './config.js';

const round = (getTask) => {
  let result = false;
  const task = getTask();
  console.log(`Question: ${task.text}`);
  const answer = readlineSync.question('Your answer: ').trim().toLowerCase();
  if (task.answer.toLowerCase() === answer) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${task.answer}'.`);
    result = false;
  }

  return result;
};

const startGame = (parameters) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(parameters.taskCondition);
  let success = true;
  let i = 1;
  while (i <= roundsNumber) {
    success = round(parameters.taskGet);
    if (!success) {
      break;
    }
    i += 1;
  }
  if (success) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default startGame;
