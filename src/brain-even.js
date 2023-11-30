import readlineSync from 'readline-sync';

const round = () => {
  let result = false;
  const randomLength = 100;
  const randomStart = 1;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // get random int number from randomStart to (randomStart + maxRandom - 1)
  const randomNumber = Math.floor(Math.random() * randomLength) + randomStart;
  const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ').trim().toLowerCase();
  if (isEven !== answer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'.`);
    result = false;
  } else {
    console.log('Correct!');
    result = true;
  }

  return result;
};

const app = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const roundsNumber = 3;
  let success = true;
  let i = 1;
  while (i <= roundsNumber) {
    success = round();
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

export default app;
