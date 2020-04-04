import "./styles/animation-game.css";

class Game {
  constructor(img, congrats) {
    this.img = img;
    this.congrats = congrats;
  }
  init() {
    this.img.forEach(item => {
      this.rotate(item);
    });
  }
  computerMove() {
    console.log("Comp move");
  }
  counter() {
    console.log("counter func");
  }
  rotate(eachImg) {
    eachImg.addEventListener("click", event => {
      event.target.classList.add("rotate");
      setTimeout(() => {
        event.target.classList.remove("rotate");
      }, 1500);
    });
  }
  reset() {
    console.log("reset after someone wins");
  }
}

export { Game as default };
