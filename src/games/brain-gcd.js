import { getRandomNumber, gcd } from '../util.js';
import startGame from '../index.js';

const getRoundData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const answer = gcd(number1, number2);

  return {
    question: `${number1} ${number2}`,
    answer: answer.toString(),
  };
};

const playGame = () => {
  startGame(
    'Find the greatest common divisor of given numbers.',
    getRoundData,
  );
};

export default playGame;
