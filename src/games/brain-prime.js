import { getRandomNumber, isPrime } from '../utilities.js';
import startGame from '../index.js';

const getRoundSettings = () => {
  const number = getRandomNumber();
  return {
    question: number.toString(),
    answer: isPrime(number) ? 'yes' : 'no',
  };
};

const game = () => {
  startGame({
    description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    getRoundSettings,
  });
};

export default game;
