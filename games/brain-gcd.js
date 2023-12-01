import _ from 'lodash';
import startGame from '../src/index.js';
import range from '../src/config.js';

// recursive solution, using the Euclidean algorithm
const gcd = (number1, number2) => {
  if (!number2) {
    return number1;
  }

  return gcd(number2, number1 % number2);
};

const getTask = () => {
  const number1 = _.random(range.begin, range.end);
  const number2 = _.random(range.begin, range.end);
  const answer = gcd(number1, number2);

  return {
    text: `${number1} ${number2}`,
    answer: answer.toString(),
  };
};

const game = () => {
  startGame({
    taskCondition: 'Find the greatest common divisor of given numbers.',
    taskGet: getTask,
  });
};

export default game;
