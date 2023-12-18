import _ from 'lodash';
import { getRandomNumber } from '../util.js';
import startGame from '../index.js';

const getRoundData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const oper = _.sample(['+', '-', '*']);
  let answer = '';
  switch (oper) {
    case '+':
      answer = number1 + number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    // no default
  }

  return {
    question: `${number1} ${oper} ${number2}`,
    answer: answer.toString(),
  };
};

const playGame = () => {
  startGame(
    'What is the result of the expression?',
    getRoundData,
  );
};

export default playGame;
