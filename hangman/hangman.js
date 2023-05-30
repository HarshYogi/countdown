// List of words for the game
const words = ["chudail", "bhutni", "chingu", "harshi", "yogu", "kumbhkaran", "patlu", "chuhia"];

// Select a random word from the list
const randomWord = words[Math.floor(Math.random() * words.length)];

// Initialize the game state
let guessedWord = Array.from(randomWord).map(() => "_");
let remainingGuesses = 3;
let message = "";

// Function to update the displayed word
function updateWordDisplay() {
  const wordDisplay = document.getElementById("wordDisplay");
  wordDisplay.textContent = guessedWord.join(" ");
}

// Function to handle the letter guess
function guessLetter() {
  const guessInput = document.getElementById("guessInput");
  const guess = guessInput.value.toLowerCase().trim();
  guessInput.value = "";

  if (guess.length !== 1 || !guess.match(/[a-z]/i)) {
    message = "Please enter a valid single letter.";
  } else if (guessedWord.includes(guess)) {
    message = "You've already guessed that letter.";
  } else {
    let isCorrectGuess = false;

    for (let i = 0; i < randomWord.length; i++) {
      if (randomWord[i].toLowerCase() === guess) {
        guessedWord[i] = randomWord[i];
        isCorrectGuess = true;
      }
    }

    if (isCorrectGuess) {
      message = "Good guess!";
    } else {
      remainingGuesses--;
      message = "Oops! Wrong guess.";
    }
  }

  updateWordDisplay();

  if (guessedWord.join("") === randomWord) {
    message = "Congratulations! You've guessed the word correctly.";
    disableInput();
  } else if (remainingGuesses === 0) {
    message = "Game over. The word was: " + randomWord;
    disableInput();
  }

  updateMessage();
}

// Function to update the message displayed to the player
function updateMessage() {
  const messageElement = document.getElementById("message");
  messageElement.textContent = message;
}

// Function to disable the input and button after the game ends
function disableInput() {
  const guessInput = document.getElementById("guessInput");
  const guessButton = document.querySelector("button");
  guessInput.disabled = true;
  guessButton.disabled = true;
}

// Initialize the game display
updateWordDisplay();
updateMessage();
