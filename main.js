const pickUserHand = (hand) => {
  let player = document.querySelector(".player");
  player.style.display = "none";

  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
  let player = ["rock", "paper", "scissors"];
  let com = player[Math.floor(Math.random() * 3)];
  referee(hand, com);
};

const referee = (player, com) => {
  if (player == "paper" && com == "scissors") {
    setDecision("YOU LOSE!");
  }
  if (player == "paper" && com == "rock") {
    setDecision("YOU WIN!");
  }
  if (player == "paper" && com == "paper") {
    setDecision("It's a tie!");
  }
  if (player == "rock" && com == "scissors") {
    setDecision("YOU WIN!");
  }
  if (player == "rock" && com == "paper") {
    setDecision("YOU LOSE!");
  }
  if (player == "rock" && com == "rock") {
    setDecision("It's a tie!");
  }
  if (player == "scissors" && com == "scissors") {
    setDecision("It's a tie!");
  }
  if (player == "scissors" && com == "rock") {
    setDecision("YOU LOSE!");
  }
  if (player == "scissors" && com == "paper") {
    setDecision("YOU WIN!");
  }
};

const setDecision = (decision) => {
  document.querySelector(".decision").innerText = decision;
};
