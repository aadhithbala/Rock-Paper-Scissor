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

getComputerChoice();
