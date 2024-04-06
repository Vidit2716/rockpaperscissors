const rock = document.querySelector("#user-rock");
const paper = document.querySelector("#user-paper");
const scissors = document.querySelector("#user-scissors");

const comprock = document.querySelector("#computer-rock");
const comppaper = document.querySelector("#computer-paper");
const compscissors = document.querySelector("#computer-scissors");
const result = document.getElementById("myresult");
const scr = document.getElementById("scorecard");

function clicked() {
  console.log("clicked");
}
var score = {
  player: 0,
  computer: 0,
};

function selectrock() {
  console.log("Rock is selected");
  const compchoice = computerChoice();
  console.log(compchoice);
  if (compchoice == "paper") {
    console.log("YOU Lose");
    result.innerHTML = "YOU LOSE";
    score.computer++;
    console.log(score);
    scr.innerHTML =
      "Scores Player : " + score.player + " Computer : " + score.computer;
  } else if (compchoice == "rock") {
    console.log("tie");
    result.innerHTML = "DRAW";
    console.log(score);
    scr.innerHTML =
      "Scores Player : " + score.player + " Computer : " + score.computer;
  } else {
    console.log("you win");
    result.innerHTML = "YOU WIN";

    score.player++;

    console.log(score);
    scr.innerHTML =
      "Scores Player : " + score.player + " Computer : " + score.computer;
  }
}

function selectpaper() {
  console.log("Paper is selected");
  const compchoice = computerChoice();
  console.log(compchoice);
  if (compchoice == "scissor") {
    console.log("YOU Lose");
    result.innerHTML = "YOU LOSE";

    score.computer++;

    console.log(score);
    scr.innerHTML =
      "Scores Player : " + score.player + " Computer : " + score.computer;
  } else if (compchoice == "paper") {
    console.log("tie");
    result.innerHTML = "DRAW";
    console.log(score);
    scr.innerHTML =
      "Scores Player : " + score.player + " Computer : " + score.computer;
  } else {
    console.log("you win");
    result.innerHTML = "YOU WIN";

    score.player++;

    console.log(score);
    scr.innerHTML =
      "Scores Player : " + score.player + " Computer : " + score.computer;
  }
}
function selectscissor() {
  console.log("scissor is selected");
  const compchoice = computerChoice();
  console.log(compchoice);
  if (compchoice == "rock") {
    console.log("YOU Lose");
    result.innerHTML = "YOU LOSE";

    score.computer++;

    console.log(score);
    scr.innerHTML =
      "Scores Player : " + score.player + " Computer : " + score.computer;
  } else if (compchoice == "scissor") {
    console.log("tie");
    result.innerHTML = "DRAW";
    console.log(score);
    scr.innerHTML =
      "Scores Player : " + score.player + " Computer : " + score.computer;
  } else {
    console.log("you win");
    result.innerHTML = "YOU WIN";

    score.player++;

    console.log(score);
    scr.innerHTML =
      "Scores Player : " + score.player + " Computer : " + score.computer;
  }
}

rock.addEventListener("click", selectrock);
paper.addEventListener("click", selectpaper);
scissors.addEventListener("click", selectscissor);
const computerChoice = () => {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};
