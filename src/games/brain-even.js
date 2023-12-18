import { getRandomNumber } from '../util.js';
import startGame from '../index.js';

const getRoundData = () => {
  const number = getRandomNumber();
  return {
    question: number.toString(),
    answer: number % 2 === 0 ? 'yes' : 'no',
  };
};

const playGame = () => {
  startGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    getRoundData,
  );
};

export default playGame;
