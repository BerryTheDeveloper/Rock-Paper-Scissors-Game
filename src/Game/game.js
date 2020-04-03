import "./styles/animation-game.css";

class Game {
  constructor(img, congrats) {
    this.img = img;
    this.congrats = congrats;
  }
  init() {
    console.log(this.img);
    console.log(this.congrats);
  }
}

export { Game as default };
