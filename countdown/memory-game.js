// Memory Game JavaScript code
document.addEventListener("DOMContentLoaded", () => {
    const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg" ];
    let flippedCards = [];
    let matchedCards = [];

    // Shuffle the images
    shuffle(images);

    // Display the cards
    const gameBoard = document.getElementById("game-board");
    images.forEach((image) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const inner = document.createElement("div");
        inner.classList.add("inner");

        const front = document.createElement("div");
        front.classList.add("front");
        const frontImg = document.createElement("img");
        frontImg.src = image;
        frontImg.alt = "Card Front";
        front.appendChild(frontImg);

        const back = document.createElement("div");
        back.classList.add("back");
        const backImg = document.createElement("img");
        backImg.src = "card-back.jpg";
        backImg.alt = "Card Back";
        back.appendChild(backImg);

        inner.appendChild(front);
        inner.appendChild(back);
        card.appendChild(inner);
        gameBoard.appendChild(card);

        card.addEventListener("click", () => flipCard(card));
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
function flipCard(card) {
    if (card.classList.contains("flipped")) {
        return;
    }

    card.classList.add("flipped");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

// Function to check if the flipped cards match
function checkMatch() {
    const card1 = flippedCards[0];
    const card2 = flippedCards[1];
  
    if (card1.lastElementChild.src === card2.lastElementChild.src) {
      card1.removeEventListener("click", handleCardClick);
      card2.removeEventListener("click", handleCardClick);
      matchedCards.push(card1, card2);
      checkGameCompletion();
    } else {
      setTimeout(() => {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1.addEventListener("click", handleCardClick);
        card2.addEventListener("click", handleCardClick);
        card1.style.pointerEvents = "auto";
        card2.style.pointerEvents = "auto";
        card1.classList.add("unmatched");
        card2.classList.add("unmatched");
        setTimeout(() => {
          card1.classList.remove("unmatched");
          card2.classList.remove("unmatched");
        }, 1000);
      }, 1000);
    }
  
    flippedCards = [];
  }

// Function to check if all cards are matched
function checkGameCompletion() {
    if (matchedCards.length === 12) {
        alert("Congratulations! You've completed the game!");
    }
}
