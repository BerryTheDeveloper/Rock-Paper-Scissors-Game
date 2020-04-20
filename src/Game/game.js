import "./styles/animation-game.css";

class Game {
  constructor(playersScore, img, congrats) {
    this.playersScore = playersScore;
    this.img = img;
    this.congrats = congrats;
  }
  init() {
    this.img.forEach((item) => {
      this.rotate(item);
    });
  }
  computerMove() {
    const compChoice = new Array("Rock", "Papper", "Scissors");
    const randomNumber = Math.floor(Math.random() * 3);
    return compChoice[randomNumber];
  }
  counter(count) {
    const player = this.playersScore.querySelector(".playerOne-score span");
    const comp = this.playersScore.querySelector(".playerTwo-score span");
    if (count) {
      player.innerHTML = Number(player.textContent) + 1;
    } else {
      comp.innerHTML = Number(comp.textContent) + 1;
    }
    console.log(
      "comp score:",
      comp.textContent,
      "\nplayer score:",
      player.textContent
    );
  }
  logic(element) {
    const compRandChoice = this.computerMove();
    const choosed = element.alt;
    let count = true;
    console.log("Comp choice:", compRandChoice, "\nPlayer choice:", choosed);
    if (choosed === compRandChoice) {
      console.log("It's a Draw!");
    } else if (choosed !== compRandChoice) {
      if (choosed === "Rock" && compRandChoice === "Scissors") {
        count = true;
        this.counter(count);
      } else if (choosed === "Rock" && compRandChoice === "Papper") {
        count = false;
        this.counter(count);
      } else {
        count = false;
        this.counter(count);
      }
    }
  }
  rotate(eachImg) {
    eachImg.addEventListener("click", (event) => {
      // console.log(event);
      event.target.classList.add("rotate");
      setTimeout(() => {
        event.target.classList.remove("rotate");
      }, 1500);
      this.logic(event.target);
    });
  }
  reset() {
    console.log("reset after someone wins");
  }
}

export { Game as default };
