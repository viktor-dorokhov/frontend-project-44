import readlineSync from 'readline-sync';

//TODO
// if the function will be alone need to make this to defaut
const getNameUser = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`); // may be need to move in another function?
  return name;
}

export { getNameUser }