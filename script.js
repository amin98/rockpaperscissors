const choices = ["rock", "paper", "scissors"];

const winsAgainst = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function getcomputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (winsAgainst[humanChoice] === computerChoice) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

document.querySelectorAll(".choice-button").forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = choices[parseInt(button.value) - 1];
    const computerChocie = getcomputerChoice();
    playRound(humanChoice, computerChocie);
  });
});
