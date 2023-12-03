import _ from 'lodash';
import startGame from '../index.js';
import range from '../config.js';

const getTask = () => {
  const number1 = _.random(range.from, range.to);
  const number2 = _.random(range.from, range.to);
  const numberOper = _.random(1, 3);
  let answer = '';
  let oper = '';
  switch (numberOper) {
    case 1:
      oper = '+';
      answer = number1 + number2;
      break;
    case 2:
      oper = '-';
      answer = number1 - number2;
      break;
    case 3:
      oper = '*';
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
