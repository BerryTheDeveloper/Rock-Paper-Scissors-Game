// import Form from "./Game/form";
import TooltipMain from "./Game/tooltip-main";
import TooltipChoice from "./Game/tooltip-choice";
import Game from "./Game/game";

// get form
// const container = document.querySelector(".container");
// const playerOneName = new Form(container);
// playerOneName.init();

// show tooltip -> main
const tooltipMain = document.querySelector(".tooltip");
if (tooltipMain) {
  const showTooltipMain = new TooltipMain(tooltipMain);
  showTooltipMain.init();
}

// show tooltip -> choice
const tooltipChoice = document.querySelector(".main .tooltip-title");
if (tooltipChoice) {
  const showTooltipChoice = new TooltipChoice(tooltipChoice);
  showTooltipChoice.init();
}

// show congratulations
const playersScore = document.querySelector(".players-score");
const images = document.querySelectorAll(".game img");
const congratulations = document.querySelector(".congratulations-section");
if (images) {
  const playerMove = new Game(playersScore, images, congratulations);
  playerMove.init();
}
