'use strict';

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const inputGuess = document.querySelector('.guess');
const secretNumber = document.querySelector('.number');
const ELscore = document.querySelector('.score');
const ELhighscore = document.querySelector('.highscore');
const message = document.querySelector('.message');

let secretNum;
let score = 20;
let highscore = 0;

// create a secret 1 to 20
const createRamdomNum = function () {
  secretNum = Math.floor(Math.random() * 20) + 1;
};
createRamdomNum();

// HELPER FUNCTIONS
const check = function () {
  // get the input number
  const guessNum = Number(inputGuess.value);

  // check if player filled input
  if (guessNum === '' || guessNum === 0 || guessNum < 0) {
    message.textContent = 'Invalid input ❌';
    inputGuess.value = '';
    return;
  }

  // clear input
  inputGuess.value = '';

  // if player is wrong
  if (guessNum !== secretNum && score > 0) {
    guessNum > secretNum
      ? (message.textContent = 'Too high 📈')
      : (message.textContent = 'Too low 📉');

    // decrease player score
    score--;
    ELscore.textContent = score;
  }

  // if player loose
  if (score === 0 || score < 0) {
    message.textContent = '❌ YOU LOOSE ❌';
    return;
  }

  // if player win
  if (guessNum === secretNum) {
    message.textContent = '🏆 CONGRATULATIONS 🏆';
    secretNumber.textContent = `${secretNum}`;
    document.querySelector('body').style.backgroundColor = '#60b347';

    // set highscore
    score > highscore ? (highscore = score) : highscore;
    console.log(highscore);
    ELhighscore.textContent = highscore;
  }
};

const reset = function () {
  // clear input value
  inputGuess.value = '';

  // get the initial scores
  score = 20;
  ELscore.textContent = score;
  ELhighscore.textContent = highscore;

  // get initial message
  message.textContent = 'Start guessing...';

  // get the initial backgroundColor
  document.querySelector('body').style.backgroundColor = '#222';

  // hide secret number
  secretNumber.textContent = '?';

  // chenge the secret number
  createRamdomNum();
};

// EVENT LISTENERS
btnCheck.addEventListener('click', check);
inputGuess.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') check();
});

btnAgain.addEventListener('click', reset);
