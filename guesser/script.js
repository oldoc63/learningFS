let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
  return Math.floor(Math.random() * 9 + 1);
}

const compareGuesses = (humanGuess, compGuess, secretTarget) => {
  if (Math.abs(secretTarget - humanGuess) === (Math.abs(secretTarget - compGuess))){
    return true
  }
  if (Math.abs(secretTarget - humanGuess) < (Math.abs(secretTarget - compGuess))){
    return true
  } else {
    return false
  }
}

const updateScore = winner => {
  let human = winner;
  if (winner === human) {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}

const advanceRound = winner => {
  currentRoundNumber += 1;
}
