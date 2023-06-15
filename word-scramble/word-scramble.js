// Define an array of words for the game
const words = ["party", "wish", "bestie", "love", "gifts", "birthday", "balloon", "dance", "chingu", "chingi"];
  
// Get DOM elements
const scrambledWordElement = document.getElementById("scrambled-word");
const guessInputElement = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const messageElement = document.getElementById("message");

let currentWord = "";

// Function to scramble a word
function scrambleWord(word) {
  const wordArray = word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  return wordArray.join("");
}

// Function to select a new word for the game
function selectWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord = words[randomIndex];
  const scrambledWord = scrambleWord(currentWord);
  scrambledWordElement.textContent = scrambledWord;
  messageElement.textContent = "";
  guessInputElement.value = "";
  guessButton.disabled = false;
}

// Process the player's guess
function processGuess() {
  const guess = guessInputElement.value.toLowerCase();
  if (guess === currentWord) {
    messageElement.textContent = "Congratulations! You guessed the word correctly.";
    guessButton.disabled = true;
  } else {
    messageElement.textContent = "Incorrect guess. Try again.";
  }
  guessInputElement.value = "";
}

// Event listener for the guess button
guessButton.addEventListener("click", processGuess);

// Initialize the game when the page loads
selectWord();