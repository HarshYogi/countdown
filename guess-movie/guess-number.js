const movies = [
    { emoji: "🌟🌠", word: "stardust" },
    { emoji: "🦁👑", word: "the lion king" || "lion king" },
    { emoji: "🧙‍♂️🧹", word: "harry potter" },
    { emoji: "🦇", word: "batman" },
    { emoji: "🌹👹", word: "beauty and the beast" },
    { emoji: "🕷️🕸️", word: "spiderman" },
    { emoji: "🦸‍♂️", word: "superman" },
    { emoji: "⚓🏴‍☠️", word: "pirates" || "pirate" || "pirates of the carribean" },
    { emoji: "🇰🇷🎬", word: "k-drama" || "k drama" },
    { emoji: "⚡🔨", word: "thor" || "thor and thunder" },
    { emoji: "🐼💪", word: "kung-fu-panda" || "kung fu panda" },
    { emoji: "💎💉", word: "blood diamond" },
    { emoji: "🚢💔", word: "titanic" },
  ];

  let currentMovie;
  let message = "";

  // Function to randomly select a movie
  function selectRandomMovie() {
    currentMovie = movies[Math.floor(Math.random() * movies.length)];
  }

  // Function to update the displayed emojis
  function updateEmojiDisplay() {
    const emojiDisplay = document.getElementById("emoji-display");
    emojiDisplay.textContent = currentMovie.emoji;
  }

  // Function to handle the user's guess
  function handleGuess() {
    const guessInput = document.getElementById("guessInput");
    const guess = guessInput.value.trim().toLowerCase();
    guessInput.value = "";

    if (guess === currentMovie.word) {
      message = "Correct! You guessed it!";
    } else {
      message = "Oops! Wrong guess. Try again!";
    }

    updateMessage();
    selectRandomMovie();
    updateEmojiDisplay();
  }

  // Function to update the message displayed to the player
  function updateMessage() {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
  }

  // Event listener for the submit button
  document.getElementById("guessButton").addEventListener("click", handleGuess);

  // Initialize the game
  selectRandomMovie();
  updateEmojiDisplay();