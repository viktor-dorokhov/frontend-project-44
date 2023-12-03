import _ from 'lodash';
import { getRandomNumber } from '../utilities.js';
import startGame from '../index.js';

const getTask = () => {
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
    text: `${number1} ${oper} ${number2}`,
    answer: answer.toString(),
  };
};

const game = () => {
  startGame({
    taskCondition: 'What is the result of the expression?',
    taskGet: getTask,
  });
};

export default game;
