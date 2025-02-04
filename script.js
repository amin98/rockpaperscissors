const choices = ["rock", "paper", "scissors"];
const choiceButton = document.querySelectorAll(".choice-button");


const winsAgainst = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function getcomputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
  console.log("You chose:", humanChoice);

  setTimeout(() => {
    console.log("PC chose:", computerChoice);
  }, 1000);

  setTimeout(() => {
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (winsAgainst[humanChoice] === computerChoice) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }, 2000);
}

choiceButton.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = choices[parseInt(button.value) - 1];
    button.classList.add("increaseSize");

    choiceButton.forEach((btn) => {
      if (btn !== button) {
        btn.classList.add('disappear');
        setTimeout(() => {
          btn.remove();
        }, 900);
      }
    });


    const computerChocie = getcomputerChoice();
    playRound(humanChoice, computerChocie);
  });
});
