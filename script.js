'use strict';

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

const capitalize = function (playerChoice) {
  const playerChoiceLowerCase = playerChoice.toLowerCase();
  return (
    playerChoiceLowerCase.charAt(0).toUpperCase() +
    playerChoiceLowerCase.slice(1)
  );
};

const playRound = function (playerChoice, computerChoice) {
  if (
    (playerChoice === 'Rock' && computerChoice === 'Scissor') ||
    (playerChoice === 'Scissor' && computerChoice === 'Paper') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock')
  ) {
    return `You Win! ${playerChoice} beats ${computerChoice}`;
  } else if (playerChoice === computerChoice) {
    return `Tie! You both choose ${computerChoice}`;
  } else {
    return `You Lose! ${computerChoice} beats ${playerChoice}`;
  }
};

const computerSelection = getComputerChoice(); //Invoking Function for computer choice

const playerSelection = capitalize(prompt('Enter your choice:')); // Prompting the user for users choice

console.log(playRound(playerSelection, computerSelection));
