'use strict';

let playerScore = 0;
let computerScore = 0;

const rpsButton = document.querySelectorAll('.btn-key');
const result = document.querySelector('.result');
const reset = document.querySelector('.reset');
const playerScores = document.querySelector('.playerscore');
const cpuScores = document.querySelector('.cpuscore');
const modal = document.querySelector('.modal-container');
const overlay = document.querySelector('.overlay');
const gameOverMessage = document.querySelector('.gameover-message');

const getComputerChoice = function () {
  const computerChoice = Math.trunc(Math.random() * 3);

  if (computerChoice === 0) {
    return 'Rock';
  } else if (computerChoice === 1) {
    return 'Paper';
  } else if (computerChoice === 2) {
    return 'Scissor';
  }
};

const playRound = function (playerChoice, computerChoice) {
  if (
    (playerChoice === 'Rock' && computerChoice === 'Scissor') ||
    (playerChoice === 'Scissor' && computerChoice === 'Paper') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock')
  ) {
    result.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    playerScore++;
  } else if (playerChoice === computerChoice) {
    result.textContent = `Tie! You both choose ${computerChoice}`;
  } else {
    result.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    computerScore++;
  }
};

const resetGame = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  playerScore = 0;
  computerScore = 0;
  updateScore();
  result.textContent = `Click on any buttons`;
};

const checkWinner = function () {
  if (computerScore === 5 && playerScore === 5) {
    gameOverMessage.textContent = 'Tie';
  } else if (computerScore === 5 && playerScore < 5) {
    gameOverMessage.textContent = 'You Lost!';
  } else if (computerScore < 5 && playerScore === 5) {
    gameOverMessage.textContent = 'You Won!';
  }
};

const endGame = function () {
  if (computerScore === 5 || playerScore === 5) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }

  checkWinner();
};

const updateScore = function () {
  playerScores.innerHTML = `PLAYER SCORE <br>${playerScore}`;
  cpuScores.innerHTML = `CPU SCORE <br>${computerScore}`;
};

for (let i = 0; i < rpsButton.length; i++) {
  rpsButton[i].addEventListener('click', function () {
    playRound(rpsButton[i].textContent, getComputerChoice());
    updateScore();
    endGame();
  });
}

reset.addEventListener('click', resetGame);
