'use strict';
const max = 20;
const min = 0;
let randNum = 0;
let score = 20;
let highScore = 0;

window.onload = (event) => {
  freshStart();
};

document.querySelector('.again').addEventListener('click', function(e) {
  freshStart();
});

document.querySelector('.check').addEventListener('click', function(e) {
  const guess = Number(document.querySelector('.guess').value);
  if (Number.isInteger(guess)) {
    checkGuess(guess);        
  } else {
    displayMessage('Please enter a valid number ⛔');
  }
});

function displayMessage(message) {
  document.querySelector('.message').textContent = message; 
}

function checkGuess(guess) {
  score--;
  if (guess > randNum) {
    displayMessage('Try Lower Number 😐');
  } else if(guess < randNum) {
    displayMessage('Try Higher Number 😐');
  } else {
    document.querySelector('.check').value = '';
    document.querySelector('.check').disabled = true;
    displayMessage('Perfect  👏👏👏');
    document.querySelector('.number').textContent = guess;
    score++;
    if (score > highScore) {
      highScore = score;      
    }    
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = 'green';
  }
  document.querySelector('.score').textContent = score;
}
const max = 20;
const min = 0;
let randNum = 0;
let score = 20;
let highScore = 0;

window.onload = (event) => {
  freshStart();
};

document.querySelector('.again').addEventListener('click', function(e) {
  freshStart();
});

document.querySelector('.check').addEventListener('click', function(e) {
  const guess = Number(document.querySelector('.guess').value);
  if (Number.isInteger(guess)) {
    checkGuess(guess);        
  } else {
    displayMessage('Please enter a valid number ⛔');
  }
});

function displayMessage(message) {
  document.querySelector('.message').textContent = message; 
}

function checkGuess(guess) {
  score--;
  if (guess > randNum) {
    displayMessage('Higher Number 😐');
  } else if(guess < randNum) {
    displayMessage('Lower Number 😐');
  } else {
    document.querySelector('.check').value = '';
    document.querySelector('.check').disabled = true;
    displayMessage('Perfect  👏👏👏');
    document.querySelector('.number').textContent = guess;
    score++;
    if (score > highScore) {
      highScore = score;      
    }    
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = 'green';
  }
  document.querySelector('.score').textContent = score;
}
