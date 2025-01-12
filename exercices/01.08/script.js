const cards = document.querySelectorAll(".card");
let flippedCards = [];
let guessedCards = 0;

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (flippedCards.length >= 2) {
      return;
    } else {
      card.classList.add("flipped");
      flippedCards.push(card);
    }

    if (flippedCards.length == 2) {
      checkforMatch();
    }
  });
});
function checkforMatch() {
  const [card1, card2] = flippedCards;
  const img1 = card1.querySelector(".back-view img").src;
  const img2 = card2.querySelector(".back-view img").src;

  if (img1 == img2) {
    flippedCards = [];
    guessedCards++;
  } else {
    setTimeout(() => {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      flippedCards = [];
    }, 500);
  }
  if (guessedCards == 8) {
    const result = document.getElementById("result");
    result.textContent = "Congratulations!You WIN!!!";
  }
}
