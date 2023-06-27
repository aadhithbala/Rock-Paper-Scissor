'use strict';

const getComputerChoice = function () {
  const computerChoice = Math.trunc(Math.random() * 3);

  if (computerChoice === 0) {
    console.log('Rock');
  } else if (computerChoice === 1) {
    console.log('Paper');
  } else if (computerChoice === 2) {
    console.log('Scissor');
  }
};

const capitalize = function (playerChoice) {
  const playerChoiceLowerCase = playerChoice.toLowerCase();
  return (
    playerChoiceLowerCase.charAt(0).toUpperCase() +
    playerChoiceLowerCase.slice(1)
  );
};

getComputerChoice(); //Invoking Function for computer choice

const playerSelection = capitalize(prompt('Enter your choice:')); // Prompting the user for users choice
