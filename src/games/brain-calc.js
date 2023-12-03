import _ from 'lodash';
import { getRandomNumber } from '../utilities.js';
import startGame from '../index.js';

const getRoundSettings = () => {
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

const game = () => {
  startGame({
    description: 'What is the result of the expression?',
    getRoundSettings,
  });
};

export default game;
