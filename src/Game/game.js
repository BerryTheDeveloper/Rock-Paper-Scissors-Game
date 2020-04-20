import "./styles/animation-game.css";

class Game {
  constructor(playersScore, img, congrats, buttonKick) {
    this.playersScore = playersScore;
    this.player = this.playersScore.querySelector(".playerOne-score span");
    this.comp = this.playersScore.querySelector(".playerTwo-score span");
    this.img = img;
    this.congrats = congrats;
    this.buttonKick = buttonKick;
  }
  init() {
    this.img.forEach((item) => {
      this.rotate(item);
    });
  }
  congratulation() {
    this.congrats.classList.remove("d-none");
    this.reset();
  }
  computerMove() {
    const compChoice = new Array("Rock", "Papper", "Scissors");
    const randomNumber = Math.floor(Math.random() * 3);
    return compChoice[randomNumber];
  }
  counter(count) {
    if (count) {
      this.player.innerHTML = Number(this.player.textContent) + 1;
    } else {
      this.comp.innerHTML = Number(this.comp.textContent) + 1;
    }
  }
  logic(element) {
    const compRandChoice = this.computerMove();
    const choosed = element.alt;
    let count = true;
    const check =
      (Number(this.player.textContent) || Number(this.comp.textContent)) >= 3
        ? "up"
        : "down";

    if (check === "down") {
      if (choosed === compRandChoice) {
        console.log("It's a Draw!");
      } else if (choosed !== compRandChoice) {
        if (choosed === "Rock" && compRandChoice === "Scissors") {
          count = true;
        } else if (choosed === "Rock" && compRandChoice === "Papper") {
          count = false;
          // this.counter(count);
        } else if (choosed === "Scissors" && compRandChoice === "Papper") {
          count = true;
          // this.counter(count);
        } else if (choosed === "Scissors" && compRandChoice === "Rock") {
          count = false;
          // this.counter(count);
        } else if (choosed === "Papper" && compRandChoice === "Rock") {
          count = true;
          // this.counter(count);
        } else if (choosed === "Papper" && compRandChoice === "Scissors") {
          count = false;
          // this.counter(count);
        }
        this.counter(count);
      }
    } else {
      this.congratulation();
    }
  }
  rotate(eachImg) {
    eachImg.addEventListener("click", (event) => {
      event.target.classList.add("rotate");
      setTimeout(() => {
        event.target.classList.remove("rotate");
      }, 1500);
      this.logic(event.target);
    });
  }
  reset() {
    this.buttonKick.addEventListener("click", (event) => {
      this.player.innerHTML = "0";
      this.comp.innerHTML = "0";
      this.congrats.classList.add("d-none");
    });
  }
}

export { Game as default };
