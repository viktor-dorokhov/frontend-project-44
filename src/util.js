import _ from 'lodash';
import * as config from './config.js';

export const getRandomNumber = () => _.random(config.numberRange.from, config.numberRange.to);

export const getRandomProgression = () => {
  const progressionStart = getRandomNumber();
  const progressionLength = _.random(config.minProgressionLength, config.maxProgressionLength);
  const progressionStep = _.random(config.minProgressionStep, config.maxProgressionStep);
  const result = [];
  for (let i = 0; i < progressionLength; i += 1) {
    result[i] = progressionStart + progressionStep * i;
  }

  return result;
};

// greatest common divisor
// recursive solution, using the Euclidean algorithm
export const gcd = (number1, number2) => {
  if (!number2) {
    return number1;
  }

  return gcd(number2, number1 % number2);
};

export const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const sqrt = Math.sqrt(number);
  for (let i = 2; i <= sqrt; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};
