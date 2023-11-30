import readlineSync from 'readline-sync';

const app = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const roundsNumber = 3;
  const randomLength = 100;
  const randomStart = 1;
  let success = true;
  let i = 1;
  while (i <= roundsNumber) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    // get random int number from randomStart to (randomStart + maxRandom - 1)
    const randomNumber = Math.floor(Math.random() * randomLength) + randomStart;
    const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ').trim().toLowerCase();
    if (isEven !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'.`);
      console.log(`Let's try again, ${userName}!`);
      success = false;
      break;
    } else {
      console.log('Correct!');
    }
    i += 1;
  }
  if (success) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default app;
