'use strict';
const max = 6;
const min = 1;
let randNum = 0;
let currentPlayer = 1;
let currentScore = 0;
let score1 = 0;
let score2 = 0;
let playing = true;

document.querySelector('.btn--roll').addEventListener('click', function () {
  if (playing) {    
    randNum = Math.trunc(Math.random() * (max - min + 1) + min);
    document.querySelector('.dice').src = "dice-" + randNum + ".png";
    if (randNum == 1) {
      switchPlayer();
    } else {
      currentScore = currentScore + randNum;
      displayScore(currentScore);
    }
  }
});
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playing) {
    if (currentPlayer == 1) {
      score1 = score1 + currentScore;
      displayScore(score1, true);
      checkWin(score1);
    } else {
      score2 = score2 + currentScore;
      displayScore(score2, true);
      checkWin(score2);
    }
  }
});
document.querySelector('.btn--new').addEventListener('click', function () {
  document.querySelector('.player--' + currentPlayer).classList.remove('player--winner');
  document.querySelector('.player--' + currentPlayer).classList.add('player--active');
  newGame();
});

const displayScore = function(score, showScore = false) {
  if (showScore) {
    document.querySelector('#score--' + currentPlayer).innerHTML = score;
  } else {
    document.querySelector('#current--' + currentPlayer).innerHTML = score;
  }
}

const switchPlayer = function() {
  currentScore = 0;
  displayScore(currentScore);
  currentPlayer = currentPlayer == 1 ? 2 : 1;
  document.querySelector('.player--1').classList.toggle('player--active');
  document.querySelector('.player--2').classList.toggle('player--active');
}

const checkWin = function (score) {
  if(score >= 20 ){
    playing = false;
    document.querySelector('.player--' + currentPlayer).classList.remove('player--active');
    document.querySelector('.player--' + currentPlayer).classList.add('player--winner');
  } else{
    switchPlayer();
  }
}

const newGame = function () {
  currentPlayer = 1;
  currentScore = 0;
  score1 = 0;
  score2 = 0;
  playing = true;
  document.querySelector('#current--1').innerHTML = 0;
  document.querySelector('#current--2').innerHTML = 0;
  document.querySelector('#score--1').innerHTML = 0;
  document.querySelector('#score--2').innerHTML = 0;
}