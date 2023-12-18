import { getRandomNumber, isPrime } from '../util.js';
import startGame from '../index.js';

const getRoundData = () => {
  const number = getRandomNumber();
  return {
    question: number.toString(),
    answer: isPrime(number) ? 'yes' : 'no',
  };
};

const playGame = () => {
  startGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    getRoundData,
  );
};

export default playGame;
