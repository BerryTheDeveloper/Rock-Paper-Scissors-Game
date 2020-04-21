import "./styles/animation-game.css";

class Game {
  constructor(playersScore, img, congrats, buttonKick) {
    this.playersScore = playersScore;
    this.player = this.playersScore.querySelector(".playerOne-score span");
    this.comp = this.playersScore.querySelector(".playerTwo-score span");
    this.img = img;
    this.congrats = congrats;
    this.congratsH3 = this.congrats.querySelector("h3");
    this.congratsH2 = this.congrats.querySelector("h2");
    this.buttonKick = buttonKick;
  }
  init() {
    this.img.forEach((element) => {
      this.rotate(element);
    });
  }
  congratulation(scoreP) {
    if (scoreP) {
      this.congratsH3.innerHTML = "Congratulations :)";
      this.congratsH2.innerHTML = "You Won!";
      this.congrats.classList.remove("d-none");
    } else {
      this.congratsH3.innerHTML = "Unfortunately :(";
      this.congratsH2.innerHTML = "Computer Won!";
      this.congrats.classList.remove("d-none");
      console.log("Computer Won!");
    }
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
  draw() {}
  logic(element) {
    const compRandChoice = this.computerMove();
    const choosed = element.alt;
    let count = true;

    if (choosed === compRandChoice) {
      this.draw();
    } else if (choosed !== compRandChoice) {
      if (choosed === "Rock" && compRandChoice === "Scissors") {
        count = true;
      } else if (choosed === "Rock" && compRandChoice === "Papper") {
        count = false;
      } else if (choosed === "Scissors" && compRandChoice === "Papper") {
        count = true;
      } else if (choosed === "Scissors" && compRandChoice === "Rock") {
        count = false;
      } else if (choosed === "Papper" && compRandChoice === "Rock") {
        count = true;
      } else if (choosed === "Papper" && compRandChoice === "Scissors") {
        count = false;
      }
      this.counter(count);
    }
  }
  rotate(eachImg) {
    eachImg.addEventListener("click", (event) => {
      const scoreP = Number(this.player.textContent) === 5 ? true : false;
      const scoreC = Number(this.comp.textContent) === 5 ? true : false;

      if ((scoreP || scoreC) === false) {
        event.target.classList.add("rotate");
        setTimeout(() => {
          event.target.classList.remove("rotate");
        }, 1500);
        this.logic(event.target);
      } else {
        this.congratulation(scoreP);
      }
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
