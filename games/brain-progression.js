import _ from 'lodash';
import startGame from '../src/index.js';
import range from '../src/config.js';

const getProgression = (start, length, step) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result[i] = start + step * i;
  }

  return result;
};

const getTask = () => {
  const progressionStart = _.random(range.begin, range.end);
  const minProgressionLength = 5;
  const maxProgressionLength = 15;
  const progressionLength = _.random(minProgressionLength, maxProgressionLength);
  const minProgressionStep = 1;
  const maxProgressionStep = 10;
  const progressionStep = _.random(minProgressionStep, maxProgressionStep);
  const missedNumberPosition = _.random(0, progressionLength - 1);
  const progression = getProgression(progressionStart, progressionLength, progressionStep);
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
