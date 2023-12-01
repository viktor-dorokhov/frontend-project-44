import _ from 'lodash';
import startGame from '../src/index.js';
import range from '../src/config.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getTask = () => {
  const number = _.random(range.begin, range.end);
  return {
    text: number.toString(),
    answer: isPrime(number) ? 'yes' : 'no',
  };
};

const game = () => {
  startGame({
    taskCondition: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    taskGet: getTask,
  });
};

export default game;