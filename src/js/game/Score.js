export class Score {
  constructor() {
    this.value = 0;
    this.scoreEl = document.getElementById("score");
  }

  increment() {
    this.value++;
    this.update();
  }

  reset() {
    this.value = 0;
    this.update();
  }

  update() {
    this.scoreEl.textContent = this.value;
  }
}
