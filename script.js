'use strict';

// Global Variable to capture the scores
let playerScore = 0;
let computerScore = 0;

//Function to get computers choice - Rock, Paper or Scissor
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

//Function to sanitize the user input to Capitalize the first letter
const capitalize = function (playerChoice) {
  const playerChoiceLowerCase = playerChoice.toLowerCase();
  return (
    playerChoiceLowerCase.charAt(0).toUpperCase() +
    playerChoiceLowerCase.slice(1)
  );
};

//Function to play one round of game
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

// Function to check the winner of 5 rounds
const winner = function (playerScore, computerScore) {
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

const game = function () {
  for (let i = 1; i < 6; i++) {
    const computerSelection = getComputerChoice(); //Invoking Function for computer choice

    const playerSelection = capitalize(prompt('Enter your choice:')); // Prompting the user for users choice

    playRound(playerSelection, computerSelection); //Invoking function to play a round of game
  }

  winner(playerScore, computerScore); //Invoking function to check winner of 5 rounds
};

game();
