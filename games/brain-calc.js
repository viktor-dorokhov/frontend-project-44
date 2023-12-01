import _ from 'lodash';
import startGame from '../src/index.js';
import range from '../src/config.js';

const getTask = () => {
  const randomNumber1 = _.random(range.begin, range.end);
  const randomNumber2 = _.random(range.begin, range.end);
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
