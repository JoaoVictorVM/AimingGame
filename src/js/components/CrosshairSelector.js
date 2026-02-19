export class CrosshairSelector {
  constructor(crosshair) {
    this.crosshair = crosshair;
    this.cards = document.querySelectorAll(".crosshair-card");

    this.init();
  }

  init() {
    this.cards.forEach((card) => {
      card.addEventListener("click", () => {
        const type = card.dataset.type;

        this.crosshair.setType(type);
        this.updateActive(card);
      });
    });

    // Ativa padrão inicial
    this.cards[0].classList.add("active");
  }

  updateActive(selectedCard) {
    this.cards.forEach((card) => card.classList.remove("active"));
    selectedCard.classList.add("active");
  }
}
