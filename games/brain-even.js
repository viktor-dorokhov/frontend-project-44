import _ from 'lodash';
import startGame from '../src/index.js';
import range from '../src/config.js';

const getTask = () => {
  const randomNumber = _.random(range.begin, range.end);
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
