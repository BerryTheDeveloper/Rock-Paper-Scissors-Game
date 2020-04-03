import "./styles/tooltip-choice.css";

class TooltipChoice {
  constructor(element) {
    this.title = element;
    this.element = element.parentElement.querySelector(
      ".tooltip-content-choice"
    );
  }
  init() {
    this.title.addEventListener("mouseenter", event => {
      event.target.classList.add("hideAnimate");
      this.element.classList.add("show");
    });
    this.title.addEventListener("mouseleave", event => {
      event.target.classList.remove("hideAnimate");
      this.element.classList.remove("show");
    });
  }
}

export { TooltipChoice as default };
