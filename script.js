function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
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

const getHumanChoice = () => {
    for (let i = 0; i < 3; i++) {
        if (document.getElementsByClassName("choice-button")[i]) {
            document.getElementsByClassName("choice-button")[i].addEventListener("click", function() {
                let humanSelection = parseInt(document.getElementsByClassName("choice-button")[i].value) - 1;
                if (humanSelection === 0) {
                    humanSelection = "rock";
                } else if (humanSelection === 1) {
                    humanSelection = "paper";
                } else {
                    humanSelection = "scissors";
                }
                const computerSelection = getComputerChoice();
                playRound(humanSelection, computerSelection);
            });
        }
    }
}

const humanSelection = getHumanChoice();