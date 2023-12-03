import _ from 'lodash';
import { getProgression } from '../utilities.js';
import startGame from '../index.js';

const getTask = () => {
  const progression = getProgression();
  const missedNumberPosition = _.random(0, progression.length - 1);
  const missedNumber = progression[missedNumberPosition];
  progression[missedNumberPosition] = '..';

  return {
    text: progression.join(' '),
    answer: missedNumber.toString(),
  };
};

const game = () => {
  startGame({
    taskCondition: 'What number is missing in the progression?',
    taskGet: getTask,
  });
};

export default game;
