import "./styles/tooltip-main.css";

class TooltipMain {
  constructor(element) {
    this.tooltip = element;
    this.pTag = this.tooltip.querySelector(".underline-show");
    this.elementShow = this.tooltip.querySelector(".tooltip-content-main");
  }
  init() {
    this.pTag.addEventListener("mouseenter", () => {
      this.pTag.classList.remove("underline-show");
      this.pTag.classList.add("underline-hide");
      this.elementShow.classList.add("show");
    });

    this.pTag.addEventListener("mouseleave", () => {
      this.pTag.classList.remove("underline-hide");
      this.elementShow.classList.remove("show");
      this.pTag.classList.add("underline-show");
    });
  }
}

export { TooltipMain as default };
