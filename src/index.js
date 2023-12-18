import readlineSync from 'readline-sync';
import { roundsNumber } from './config.js';

const startRound = (fnGetRoundData) => {
  let result = false;
  const { question: roundQuestion, answer: roundAnswer } = fnGetRoundData();
  console.log(`Question: ${roundQuestion}`);
  const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();
  if (roundAnswer.toLowerCase() === userAnswer) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${roundAnswer}'.`);
    result = false;
  }

  return result;
};

const startGame = (description, fnGetRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  let success = true;
  let i = 1;
  while (i <= roundsNumber) {
    success = startRound(fnGetRoundData);
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
