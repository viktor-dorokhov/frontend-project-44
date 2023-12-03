import readlineSync from 'readline-sync';
import { roundsNumber } from './config.js';

const round = (getRoundSettings) => {
  let result = false;
  const roundSettings = getRoundSettings();
  console.log(`Question: ${roundSettings.question}`);
  const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();
  const roundAnswer = roundSettings.answer.toLowerCase();
  if (roundAnswer === userAnswer) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${roundAnswer}'.`);
    result = false;
  }

  return result;
};

const startGame = (settings) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(settings.description);
  let success = true;
  let i = 1;
  while (i <= roundsNumber) {
    success = round(settings.getRoundSettings);
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
