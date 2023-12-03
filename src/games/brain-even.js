import { getRandomNumber } from '../utilities.js';
import startGame from '../index.js';

const getTask = () => {
  const number = getRandomNumber();
  return {
    text: number.toString(),
    answer: number % 2 === 0 ? 'yes' : 'no',
  };
};

const game = () => {
  startGame({
    taskCondition: 'Answer "yes" if the number is even, otherwise answer "no".',
    taskGet: getTask,
  });
};

export default game;
