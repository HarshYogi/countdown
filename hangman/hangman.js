const words = [
  { word: "yogu", hint: "Short form of your name that I generally used." },
  { word: "chudail", hint: "One of the first nicknames i gave to you" },
  { word: "kumbhkaran", hint: "First nickname you gave to me" },
  { word: "harshi", hint: "Updated female version of my real name you gave to me" },
  { word: "chuhia", hint: "Based on a small animal name that i gave to you" },
  { word: "chingu", hint: "you saved my number as 'namja' + 'word'" },
  { word: "patlu", hint: "Name related to my body shape that you gave to me" },
  { word: "bhutni", hint: "One of the first nicknames i gave to you" },
  { word: "harshu", hint: "Updated male version of my real name you gave to me which i liked the most" },
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

// Function to update the hint
function updateHintDisplay() {
  const hintDisplay = document.getElementById("hintDisplay");
  hintDisplay.textContent = `${hint}`;
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
  updateHintDisplay();

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
updateHintDisplay();
updateMessage();
