import { Game } from "./game/Game.js";

const startBtn = document.getElementById("start");

const game = new Game();

startBtn.addEventListener("click", () => {
  game.start();
});
