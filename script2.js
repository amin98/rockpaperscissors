const choiceButton = document.querySelectorAll(".choice-button");

const transformations = {
  paper: "translateY(0px)",
  rock: "translateX(100px)",
  scissors: "translateX(-100px)",
};

choiceButton.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Chosen:", button.dataset.choice);

    button.style.transform = transformations[button.dataset.choice] || "";

    choiceButton.forEach((btn) => {
      if (btn !== button) {
        console.log("Not chosen:", btn.dataset.choice);
        btn.classList.add("disappear");
      }
    });
  });
});
