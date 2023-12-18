import _ from 'lodash';
import { getRandomProgression } from '../util.js';
import startGame from '../index.js';

const getRoundData = () => {
  const progression = getRandomProgression();
  const missedNumberPosition = _.random(0, progression.length - 1);
  const missedNumber = progression[missedNumberPosition];
  progression[missedNumberPosition] = '..';

  return {
    question: progression.join(' '),
    answer: missedNumber.toString(),
  };
};

const playGame = () => {
  startGame(
    'What number is missing in the progression?',
    getRoundData,
  );
};

export default playGame;
