import _ from 'lodash';
import startGame from '../index.js';
import range from '../config.js';

const isPrime = (number) => {
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

const getTask = () => {
  const number = _.random(range.from, range.to);
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
