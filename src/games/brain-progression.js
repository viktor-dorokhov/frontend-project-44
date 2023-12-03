import _ from 'lodash';
import { getProgression } from '../utilities.js';
import startGame from '../index.js';

const getRoundSettings = () => {
  const progression = getProgression();
  const missedNumberPosition = _.random(0, progression.length - 1);
  const missedNumber = progression[missedNumberPosition];
  progression[missedNumberPosition] = '..';

  return {
    question: progression.join(' '),
    answer: missedNumber.toString(),
  };
};

const game = () => {
  startGame({
    description: 'What number is missing in the progression?',
    getRoundSettings,
  });
};

export default game;
