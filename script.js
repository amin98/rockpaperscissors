let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
  deferredPrompt = e;
});

const installApp = document.getElementById("download-button");
installApp.addEventListener("click", async () => {
  if (deferredPrompt !== null) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      deferredPrompt = null;
    }
  }
});

const choices = ["rock", "paper", "scissors"];
const choiceButton = document.querySelectorAll(".choice-button");
const buttonImage = document.querySelectorAll(".button-image");
const result = document.getElementById("result-status");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");

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

function playRound(playerChoice, computerChoice) {
  let computerChoiceStatus = document.getElementById("computer-choice-status");
  let computerChoiceImage = document.getElementById("computer-choice-image");
  let playerScore = document.getElementById("player-score");
  let computerScore = document.getElementById("computer-score");

  computerChoiceImage.src = `./assets/loader.gif`;

  console.log("You chose:", playerChoice);

  setTimeout(() => {
    console.log("PC chose:", computerChoice);
    // computerChoiceStatus.textContent = `${capitalizeFirstLetter(computerChoice)}`;
    computerChoiceImage.src = `./assets/black/${computerChoice}.png`;
    computerChoiceImage.classList.add("increase-size");
  }, 1650);

  setTimeout(() => {
    if (playerChoice === computerChoice) {
      console.log("It's a tie!");
      computerChoiceStatus.textContent = `It's a tie!`;
    } else if (winsAgainst[playerChoice] === computerChoice) {
      console.log(`You win! ${playerChoice} beats ${computerChoice}`);
      computerChoiceStatus.textContent = `You win! ${capitalizeFirstLetter(
        playerChoice
      )} beats ${capitalizeFirstLetter(computerChoice)}`;
      playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else {
      console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
      computerChoiceStatus.textContent = `You lose! ${capitalizeFirstLetter(
        computerChoice
      )} beats ${capitalizeFirstLetter(playerChoice)}`;
      computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }
  }, 2500);

  setTimeout(() => {
    resetGame();
    if (playerScore.textContent === "5" || computerScore.textContent === "5") {
      playerScore.textContent = "0";
      computerScore.textContent = "0";
    }
  }, 3500);
}

function resetGame() {
  choiceButton.forEach((button) => {
    button.classList.remove("disappear");
    button.style.transform = "";
  });

  const computerChoiceImage = document.getElementById("computer-choice-image");
  computerChoiceImage.src = "assets/opponent.png";
  computerChoiceImage.classList.remove("increase-size");

  document.getElementById("computer-choice-status").textContent = "Opponent";
}

choiceButton.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    button.style.transform = transformations[button.dataset.choice] || "";

    choiceButton.forEach((btn) => {
      if (btn !== button) {
        btn.classList.add("disappear");
      }
    });

    const computerChocie = getcomputerChoice();
    playRound(playerChoice, computerChocie);
  });
});
