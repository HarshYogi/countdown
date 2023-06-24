// Set the birthday date (YYYY, M-1, D)
const birthday = new Date(2023, 7, 28);

// Countdown function
function countdown() {
  const now = new Date().getTime();
  const distance = birthday - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))-31;
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Check if it's the birthday
  if (distance <= 0) {
    document.getElementById("countdown").innerHTML = "Happy Birthday!";
    document.getElementById("interactive-section").innerHTML = "Let's celebrate!";
    return;
  }

  // Display interactive elements
  displayInteractiveElements(days);
}

// Function to display interactive elements based on the remaining days
function displayInteractiveElements(days) {
  document.getElementById("interactive-section").innerHTML = "";
    document.getElementById("interactive-section").innerHTML = "Solve the puzzle!";
    document.getElementById("interactive-section").innerHTML += "<br><button onclick='puzzleGame()'>Start Game</button>";
    document.getElementById("interactive-section2").innerHTML = "Guess the picture!";
    document.getElementById("interactive-section2").innerHTML += "<br><button onclick='memoryGame()'>Start Game</button>";
    document.getElementById("interactive-section3").innerHTML = "Hangman Game!";
    document.getElementById("interactive-section3").innerHTML += "<br><button onclick='hangmanGame()'>Start Game</button>";
    document.getElementById("interactive-section4").innerHTML = "Guess the Movie!";
    document.getElementById("interactive-section4").innerHTML += "<br><button onclick='movieGame()'>Start Game</button>";
    document.getElementById("interactive-section5").innerHTML = "Treasure Hunt!";
    document.getElementById("interactive-section5").innerHTML += "<br><button onclick='treasureHunt()'>Start Game</button>";
    document.getElementById("interactive-section6").innerHTML = "Word Search Game!";
    document.getElementById("interactive-section6").innerHTML += "<br><button onclick='wordSearch()'>Start Game</button>";
    document.getElementById("interactive-section7").innerHTML = "Interactive Story Game!";
    document.getElementById("interactive-section7").innerHTML += "<br><button onclick='story()'>Start Game</button>";
    document.getElementById("interactive-section8").innerHTML = "Word Scramble Game!";
    document.getElementById("interactive-section8").innerHTML += "<br><button onclick='wordScramble()'>Start Game</button>";
    document.getElementById("interactive-section9").innerHTML = "Love Story Timeline Game!";
    document.getElementById("interactive-section9").innerHTML += "<br><button onclick='loveStory()'>Start Game</button>";
}

function memoryGame() {
  clearInterval(countdownInterval);
  const newWindow = window.open("../memory-game/memory-game.html", "_blank");
}

function hangmanGame() {
  clearInterval(countdownInterval);
  const newWindow = window.open("../hangman/hangman.html", "_blank");
}

function puzzleGame() {
  clearInterval(countdownInterval);
  const newWindow = window.open("../puzzle-game/puzzle.html", "_blank");
}

function movieGame() {
  clearInterval(countdownInterval);
  const newWindow = window.open("../guess-movie/guess-number.html", "_blank");
}

function treasureHunt() {
  clearInterval(countdownInterval);
  const newWindow = window.open("../treasureHunt/index.html", "_blank");
}

function wordSearch() {
  clearInterval(countdownInterval);
  const newWindow = window.open("../word-search/word-search.html", "_blank");
}

function story() {
  clearInterval(countdownInterval);
  const newWindow = window.open("../story/story.html", "_blank");
}

function wordScramble() {
  clearInterval(countdownInterval);
  const newWindow = window.open("../word-scramble/word-scramble.html", "_blank");
}

function loveStory() {
  clearInterval(countdownInterval);
  const newWindow = window.open("../love-story/love-story.html", "_blank");
}

// Start the countdown
const countdownInterval = setInterval(countdown, 1000);
