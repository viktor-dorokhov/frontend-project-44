import _ from 'lodash';
import startGame from '../src/index.js';

const getTask = () => {
  const randomBegin = 1;
  const randomEnd = 100;
  const randomNumber = _.random(randomBegin, randomEnd);
  return {
    text: randomNumber.toString(),
    answer: randomNumber % 2 === 0 ? 'yes' : 'no',
  };
};

const game = () => {
  startGame({
    taskCondition: 'Answer "yes" if the number is even, otherwise answer "no".',
    taskGet: getTask,
  });
};

export default game;
