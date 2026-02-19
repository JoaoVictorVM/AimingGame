import { Timer } from "./Timer.js";
import { Score } from "./Score.js";
import { Target } from "../components/Target.js";
import { Crosshair } from "../components/Crosshair.js";

export class Game {
  constructor() {
    this.timer = new Timer(30);
    this.score = new Score();
    this.crosshair = new Crosshair();
    this.target = new Target(this.handleHit.bind(this));

    this.isRunning = false;
    this.startButton = document.getElementById("start");
  }

  start() {
    if (this.isRunning) return;

    this.isRunning = true;

    this.score.reset();
    this.timer.start(this.end.bind(this));
    this.target.show();

    this.startButton.textContent = "Finalizar";
  }

  stop() {
    if (!this.isRunning) return;

    this.isRunning = false;

    this.timer.stop();
    this.score.reset();
    this.timer.reset();
    this.target.hide();

    this.startButton.textContent = "Iniciar";
  }

  handleHit() {
    if (!this.isRunning) return;

    this.score.increment();
    this.target.move();
  }

  end() {
    this.stop();
    alert(`Fim de jogo! Pontuação: ${this.score.value}`);
  }
}
