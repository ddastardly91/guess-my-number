'use strict';

const randomNumber = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

let message = document.querySelector('.message');
let number = document.querySelector('.number');
let score = document.querySelector('.score');
let btnAgain = document.querySelector('.again');
let btnCheck = document.querySelector('.check');
let guess = document.querySelector('.guess');
let highScore = document.querySelector('.highscore');

let secretNumber = 0;
let scoreCount = 20;
let highScoreCount = window.localStorage.getItem('localHighScore');

secretNumber = randomNumber();
highScore.textContent = highScoreCount;

btnCheck.addEventListener('click', () => {
  if (!Number(guess.value)) {
    message.textContent = '⛔ No number!';
  } else if (Number(guess.value) === secretNumber) {
    number.textContent = secretNumber;
    document.body.style.backgroundColor = 'green';
    message.textContent = '🎉 Correct number!';
  } else if (Number(guess.value) > secretNumber) {
    scoreCount--;
    score.textContent = scoreCount;
    message.textContent = '📈 Number too high!';
  } else if (Number(guess.value) < secretNumber) {
    scoreCount--;
    score.textContent = scoreCount;
    message.textContent = '📉 Number too low!';
  } else {
    message.textContent = '💥 You lost the game!!!';
    document.body.style.backgroundColor = 'red';
  }
});

btnAgain.addEventListener('click', () => {
  document.body.style.backgroundColor = '#222';
  guess.value = '';

  if (Number(highScore.textContent) < scoreCount) {
    highScore.textContent = scoreCount;
    highScoreCount = scoreCount;
    window.localStorage.setItem('localHighScore', highScoreCount);
    scoreCount = 20;
    score.textContent = 20;
    message.textContent = 'Start guessing...';
    number.textContent = '?';
  } else {
    scoreCount = 20;
    score.textContent = 20;
    message.textContent = 'Start guessing...';
    number.textContent = '?';
  }
});
