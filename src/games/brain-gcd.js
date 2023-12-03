import { getRandomNumber, gcd } from '../utilities.js';
import startGame from '../index.js';

const getRoundSettings = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const answer = gcd(number1, number2);

  return {
    question: `${number1} ${number2}`,
    answer: answer.toString(),
  };
};

const game = () => {
  startGame({
    description: 'Find the greatest common divisor of given numbers.',
    getRoundSettings,
  });
};

export default game;
