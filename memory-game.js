// Memory Game JavaScript code
document.addEventListener("DOMContentLoaded", () => {
  const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];
  let flippedCards = [];
  let matchedCards = [];

  // Shuffle the images
  shuffle(images);

  // Display the cards
  const interactiveSection = document.getElementById("interactive-section");
  images.forEach((image) => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");

    const front = document.createElement("img");
    front.src = image;
    front.alt = "Card Front";
    front.classList.add("front");

    const back = document.createElement("img");
    back.src = "card-back.jpg";
    back.alt = "Card Back";
    back.classList.add("back");

    cardContainer.appendChild(back);
    cardContainer.appendChild(front);
    interactiveSection.appendChild(cardContainer);

    cardContainer.addEventListener("click", () => {
      flipCard(cardContainer, front);
    });
  });

  // Function to shuffle the images
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Function to flip the card
  function flipCard(cardContainer, front) {
    if (cardContainer.classList.contains("flipped")) {
      return;
    }

    cardContainer.classList.add("flipped");
    flippedCards.push({ cardContainer, front });

    if (flippedCards.length === 2) {
      disableAllCards();
      setTimeout(checkMatch, 1000);
    }
  }

  // Function to disable all cards temporarily
  function disableAllCards() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.style.pointerEvents = "none";
    });
  }

  // Function to enable all cards
  function enableAllCards() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.style.pointerEvents = "auto";
    });
  }

  // Function to check if the flipped cards match
  function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.front.src === card2.front.src) {
      matchedCards.push(card1.cardContainer, card2.cardContainer);
      if (matchedCards.length === images.length * 2) {
        alert("Congratulations! You've completed the game!");
      }
    } else {
      card1.cardContainer.classList.remove("flipped");
      card2.cardContainer.classList.remove("flipped");
    }

    flippedCards = [];
    enableAllCards();
  }
});
