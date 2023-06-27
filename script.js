'use strict';

let playerScore = 0;
let computerScore = 0;

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
    console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
    return playerScore++;
  } else if (playerChoice === computerChoice) {
    console.log(`Tie! You both choose ${computerChoice}`);
  } else {
    console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
    return computerScore++;
  }
};

const game = function () {
  for (let i = 1; i < 6; i++) {
    const computerSelection = getComputerChoice(); //Invoking Function for computer choice

    const playerSelection = capitalize(prompt('Enter your choice:')); // Prompting the user for users choice

    playRound(playerSelection, computerSelection);
  }
};

game();
