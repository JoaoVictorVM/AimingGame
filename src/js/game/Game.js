import { Timer } from "./Timer.js";
import { Score } from "./Score.js";
import { Target } from "../components/Target.js";

export class Game {
  constructor() {
    this.timer = new Timer(30);
    this.score = new Score();
    this.target = new Target(this.handleHit.bind(this));
  }

  start() {
    this.score.reset();
    this.timer.start(this.end.bind(this));
    this.target.show();
  }

  handleHit() {
    this.score.increment();
    this.target.move();
  }

  end() {
    this.target.hide();
    alert(`Fim de jogo! Pontuação: ${this.score.value}`);
  }
}
