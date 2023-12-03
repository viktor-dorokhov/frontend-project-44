import _ from 'lodash';
import * as config from './config.js';

export const getRandomNumber = () => _.random(config.numberRange.from, config.numberRange.to);

export const getProgression = () => {
  const progressionStart = getRandomNumber();
  const progressionLength = _.random(config.minProgressionLength, config.maxProgressionLength);
  const progressionStep = _.random(config.minProgressionStep, config.maxProgressionStep);
  const result = [];
  for (let i = 0; i < progressionLength; i += 1) {
    result[i] = progressionStart + progressionStep * i;
  }

  return result;
};
