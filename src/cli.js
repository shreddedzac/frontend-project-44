import readlineSync from 'readline-sync';

export const thatYourName = () => {
  const userName = readlineSync.question('May I have your name? ');

  console.log('Hello, ' + userName + '!');
};