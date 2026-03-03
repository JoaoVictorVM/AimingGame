export class EndModal {
  constructor() {
    this.overlay = document.createElement("div");
    this.overlay.className = "end-modal-overlay";

    this.sheet = document.createElement("div");
    this.sheet.className = "end-modal-sheet";

    const title = document.createElement("p");
    title.className = "end-modal-title";
    title.textContent = "Tempo esgotado!";

    const description = document.createElement("p");
    description.className = "end-modal-message";
    description.textContent = "O tempo acabou e o desafio terminou.";

    this.scoreLine = document.createElement("p");
    this.scoreLine.className = "end-modal-score";
    this.scoreValue = document.createElement("strong");
    this.scoreValue.textContent = "0";
    this.scoreLine.append("Pontuação final:", this.scoreValue);

    this.sheet.append(title, description, this.scoreLine);
    this.overlay.appendChild(this.sheet);
    this.overlay.addEventListener("click", (event) => {
      if (event.target === this.overlay) {
        this.hide();
      }
    });

    document.body.appendChild(this.overlay);
  }

  show(score) {
    this.scoreValue.textContent = score;
    this.overlay.classList.add("end-modal-overlay--visible");
    this.sheet.classList.add("end-modal-sheet--visible");
  }

  hide() {
    this.overlay.classList.remove("end-modal-overlay--visible");
    this.sheet.classList.remove("end-modal-sheet--visible");
  }
}
