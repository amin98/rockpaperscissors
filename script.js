const choices = ["rock", "paper", "scissors"];
const choiceButton = document.querySelectorAll(".choice-button");
const buttonImage = document.querySelectorAll(".button-image");
const result = document.getElementById("result-status");


const transformations = {
  paper: "translateY(0px)",
  rock: "translateX(100px)",
  scissors: "translateX(-100px)",
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


const winsAgainst = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function getcomputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
  // let computerChoiceStatus = document.getElementById("computer-choice-status");
  let computerChoiceImage = document.getElementById("computer-choice-image");
  computerChoiceImage.src = `./assets/loader.gif`;
  
  console.log("You chose:", humanChoice);

  setTimeout(() => {

    console.log("PC chose:", computerChoice);
    // computerChoiceStatus.textContent = `${capitalizeFirstLetter(computerChoice)}`;
    computerChoiceImage.src = `./assets/black/${computerChoice}.png`;
    computerChoiceImage.classList.add('increase-size');
  }, 1650);

  setTimeout(() => {
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
      result.textContent = `It's a tie!`;

    } else if (winsAgainst[humanChoice] === computerChoice) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;

    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
  }, 2500);
}

choiceButton.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.dataset.choice;
    button.style.transform = transformations[button.dataset.choice] || "";
    
    choiceButton.forEach((btn) => {
      if (btn !== button) {
        btn.classList.add('disappear');
      }
    });


    const computerChocie = getcomputerChoice();
    playRound(humanChoice, computerChocie);
  });
});
