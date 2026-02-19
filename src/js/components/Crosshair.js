export class Crosshair {
  constructor() {
    this.type = "cross";
    this.gameArea = document.getElementById("game-area");

    this.el = document.createElement("div");
    this.el.classList.add("crosshair", "crosshair--cross");
    this.el.style.display = "none";

    document.body.appendChild(this.el);

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.gameArea.addEventListener("mousemove", this.handleMouseMove);
    this.gameArea.addEventListener("mouseenter", this.handleMouseEnter);
    this.gameArea.addEventListener("mouseleave", this.handleMouseLeave);
  }

  handleMouseMove(e) {
    this.el.style.left = `${e.clientX}px`;
    this.el.style.top = `${e.clientY}px`;
  }

  handleMouseEnter() {
    this.el.style.display = "block";
  }

  handleMouseLeave() {
    this.el.style.display = "none";
  }

  setType(type) {
    this.el.classList.remove("crosshair--cross", "crosshair--dot");

    if (type === "dot") {
      this.el.classList.add("crosshair--dot");
    } else {
      this.el.classList.add("crosshair--cross");
    }

    this.type = type;
  }
}
