export class Timer {
  constructor(duration) {
    this.duration = duration;
    this.timeLeft = duration;
    this.interval = null;
    this.timeEl = document.getElementById("time");
  }

  start(onEnd) {
    this.timeLeft = this.duration;
    this.timeEl.textContent = this.timeLeft;

    this.interval = setInterval(() => {
      this.timeLeft--;
      this.timeEl.textContent = this.timeLeft;

      if (this.timeLeft <= 0) {
        this.stop();
        onEnd();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  reset() {
    this.timeLeft = this.duration;
    this.timeEl.textContent = this.timeLeft;
  }
}
