function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock.");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper.");
    } else {    
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
    }
    
}

function getComputerChoice() {
  // const choices = ['rock', 'paper', 'scissors'];
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("Enter your choice: rock, paper, or scissors");
    // const choice = "rock";
  return choice;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// console.log("PC Choice: ", getComputerChoice()); // 0, 1, 2
// console.log("Human Choice: ", getHumanChoice()); // 0, 1, 2
