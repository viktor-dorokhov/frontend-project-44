import readlineSync from 'readline-sync';

const getNameUser = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`); // may be need to move in another function?
  return name;
};

export default getNameUser;
