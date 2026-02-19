import { randomPosition } from "../utils/randomPosition.js";

export class Target {
  constructor(onHit) {
    this.el = document.getElementById("target");
    this.gameArea = document.getElementById("game-area");

    this.el.addEventListener("click", onHit);
  }

  show() {
    this.el.style.display = "block";
    this.move();
  }

  hide() {
    this.el.style.display = "none";
  }

  move() {
    const { x, y } = randomPosition(this.gameArea, this.el);
    this.el.style.left = `${x}px`;
    this.el.style.top = `${y}px`;
  }
}
