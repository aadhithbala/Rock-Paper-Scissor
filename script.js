'use strict';

// Global Variable to capture the scores
let playerScore = 0;
let computerScore = 0;

const threeButtons = document.querySelectorAll('button');
const result = document.querySelector('.result');

const playerScores = document.querySelector('.playerscore');
const cpuScores = document.querySelector('.cpuscore');

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
    playerScore++;
    computerScore++;
  } else {
    result.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    computerScore++;
  }
};

const checkWinner = function (playerScore, computerScore) {
  if (playerScore > computerScore) {
    result.textContent = `You won the game`;
  } else if (playerScore < computerScore) {
    result.textContent = `You lost the game`;
  } else result.textContent = `You both tied the game`;
};

for (let i = 0; i < threeButtons.length; i++) {
  threeButtons[i].addEventListener('click', function () {
    playRound(threeButtons[i].textContent, getComputerChoice());

    playerScores.innerHTML = `PLAYER SCORE <br>${playerScore}`;
    cpuScores.innerHTML = `CPU SCORE <br>${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
      checkWinner(playerScore, computerScore);
    }
  });
}
