let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
   }
   
   const compareGuesses = function(human, computer, secretNumber) {
   
     const humanCloseness = Math.abs(human - secretNumber)
     const computerCloseness = Math.abs(computer - secretNumber)
     if (human === computer) {
       return true;
     } else if (humanCloseness < computerCloseness) {
       return true;
     } else if (computerCloseness < humanCloseness) {
       return false;
     }
   }
   
   const updateScore = winner => {
     if (winner === 'human') {
       humanScore += 1;
     } else if (winner === 'computer') {
       computerScore += 1;
     }
   }
   
   const advanceRound = () => {
       currentRoundNumber += 1;
   }