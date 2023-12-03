import { getRandomNumber } from '../utilities.js';
import startGame from '../index.js';

const getRoundSettings = () => {
  const number = getRandomNumber();
  return {
    question: number.toString(),
    answer: number % 2 === 0 ? 'yes' : 'no',
  };
};

const game = () => {
  startGame({
    description: 'Answer "yes" if the number is even, otherwise answer "no".',
    getRoundSettings,
  });
};

export default game;
