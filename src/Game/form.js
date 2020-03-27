import "./styles/form.css";

class Form {
  constructor(container) {
    this.container = container;
    this.form = this.container.querySelector("form");
    this.playerName = this.form.querySelector("input");
    this.button = this.form.querySelector(".btn-submit");
  }
  init() {
    this.form.addEventListener("submit", event => {
      event.preventDefault();
      const name = this.form.player1.value.trim();
      name ? this.hideForm(name) : this.form.reset();
    });
  }
  hideForm(name) {
    this.container.classList.add("display");
    setTimeout(() => {
      this.container.classList.remove("display");
      this.container.classList.add("display-none");
    }, 2000);
    // const ele = this.container.parentElement.CreateElement("div");
    // ele.textContent = name;
    // document.appendChild(ele);
  }
}

export { Form as default };
