const words = [
  { word: "yogu", hint: "Short form of your name that I generally used." },
  { word: "chudail", hint: "One of the first nicknames I gave to you" },
  { word: "kumbhkaran", hint: "First nickname you gave to me" },
  { word: "harshi", hint: "Updated female version of my real name you gave to me" },
  { word: "chuhia", hint: "Based on a small animal name that I gave to you" },
  { word: "chingu", hint: "You saved my number as 'namja' + 'word'" },
  { word: "patlu", hint: "Name related to my body shape that you gave to me" },
  { word: "bhutni", hint: "One of the first nicknames I gave to you" },
  { word: "harshu", hint: "Updated male version of my real name you gave to me which I liked the most" },
  { word: "chingi", hint: "It is the female version of my nickname that you gave to me" }
];

// Select a random word from the list
const randomWordObj = words[Math.floor(Math.random() * words.length)];
const randomWord = randomWordObj.word;
const hint = randomWordObj.hint;

// Initialize the game state
let guessedWord = Array.from(randomWord).map(() => "_");
let remainingGuesses = 6;
let message = "";

// Function to update the displayed word
function updateWordDisplay() {
  const wordDisplay = document.getElementById("wordDisplay");
  wordDisplay.textContent = guessedWord.join(" ");
}

// Function to handle the word guess
function guessWord() {
  const guessInput = document.getElementById("guessInput");
  const guess = guessInput.value.toLowerCase().trim();
  guessInput.value = "";

  if (guess.length === 0) {
    message = "Please enter a word.";
  } else if (guess === randomWord) {
    guessedWord = Array.from(randomWord);
    message = "Congratulations! You've guessed the word correctly.";
    disableInput();
    setTimeout(function() {
      location.reload(); // Reload the page after 3 seconds
    }, 3000);
  } else {
    remainingGuesses--;
    message = "Oops! Wrong guess.";

    if (remainingGuesses === 0) {
      message = "Game over. The word was: " + randomWord;
      disableInput();
      setTimeout(function() {
        location.reload(); // Reload the page after 3 seconds
      }, 3000);
    }
  }

  updateWordDisplay();
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
  const guessButton = document.getElementById("guessButton");
  guessInput.disabled = true;
  guessButton.disabled = true;
}

// Initialize the game display
updateWordDisplay();
updateMessage();

// Display the hint
const hintText = document.getElementById("hintText");
hintText.textContent = hint;

// Event listener for guess button click
document.getElementById("guessButton").addEventListener("click", guessWord);

// Event listener for enter key press
document.getElementById("guessInput").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    guessWord();
  }
});