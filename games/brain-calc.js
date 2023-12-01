import _ from 'lodash';
import startGame from '../src/index.js';

const getTask = () => {
  const randomBegin = 1;
  const randomEnd = 100;
  const randomNumber1 = _.random(randomBegin, randomEnd);
  const randomNumber2 = _.random(randomBegin, randomEnd);
  const randomNumberOper = _.random(1, 3);
  let answer = '';
  let oper = '';
  switch (randomNumberOper) {
    case 1:
      oper = '+';
      answer = randomNumber1 + randomNumber2;
      break;
    case 2:
      oper = '-';
      answer = randomNumber1 - randomNumber2;
      break;
    case 3:
      oper = '*';
      answer = randomNumber1 * randomNumber2;
      break;
    // no default
  }

  return {
    text: `${randomNumber1} ${oper} ${randomNumber2}`,
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
