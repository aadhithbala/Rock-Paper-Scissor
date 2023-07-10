'use strict';

// Global Variable to capture the scores
let playerScore = 0;
let computerScore = 0;

const threeButtons = document.querySelectorAll('button');
const result = document.querySelector('.result');

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
    return playerScore++;
  } else if (playerChoice === computerChoice) {
    result.textContent = `Tie! You both choose ${computerChoice}`;
  } else {
    result.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    return computerScore++;
  }
};

const checkWinner = function (playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log(
      `You Win! Your Score: ${playerScore}, Computer Score: ${computerScore}`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `You Lose! Your Score: ${playerScore}, Computer Score: ${computerScore}`
    );
  } else
    console.log(
      `Tie! Your Score: ${playerScore}, Computer Score: ${computerScore}`
    );
};

for (let i = 0; i < threeButtons.length; i++) {
  threeButtons[i].addEventListener('click', function () {
    playRound(threeButtons[i].textContent, getComputerChoice());
  });
}
