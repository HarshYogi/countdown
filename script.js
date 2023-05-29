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
  // Clear the interactive section
  document.getElementById("interactive-section").innerHTML = "";

  // Display different interactive elements based on the remaining days
  if (days == 1) {
    document.getElementById("interactive-section").innerHTML = "No interactive element for today!";
  } else if (days === 5) {
    document.getElementById("interactive-section").innerHTML = "Day 5: Trivia question - What is your friend's favorite movie?";
  } else if (days === 4) {
    document.getElementById("interactive-section").innerHTML = "Day 4: Quiz - Test your knowledge about your friend!";
  } else if (days === 3) {
    document.getElementById("interactive-section").innerHTML = "Day 3: Guess the Picture - Identify the hidden object!";
    document.getElementById("interactive-section").innerHTML += "<br><br><img src='hidden-object.jpg' alt='Hidden Object' id='hiddenObject'>";
    document.getElementById("interactive-section").innerHTML += "<br><br>Answer: <input type='text' id='answerInput'>";
    document.getElementById("interactive-section").innerHTML += "<button onclick='checkAnswer()'>Check</button>";
  } else if (days === 2) {
    document.getElementById("interactive-section").innerHTML = "Day 2: Trivia question - What is your friend's favorite book?";
  } else if (days > 5) {
    document.getElementById("interactive-section").innerHTML = "Today's Game : Solve the puzzle!";
    document.getElementById("interactive-section").innerHTML += "<br><br><button onclick='memoryGame()'>Start Game</button>";
  }
}

function checkAnswer() {
  const userAnswer = document.getElementById("answerInput").value.toLowerCase();
  const correctAnswer = "sunglasses";

  if (userAnswer === correctAnswer) {
    document.getElementById("interactive-section").innerHTML = "Congratulations! You guessed it right!";
  } else {
    document.getElementById("interactive-section").innerHTML = "Oops, that's incorrect. Try again!";
  }
}

function memoryGame() {
  // Stop the countdown
  clearInterval(countdownInterval);

  // Open the game in a new window or tab
  const newWindow = window.open("../puzzle-game/puzzle.html", "_blank");
}

// Start the countdown
const countdownInterval = setInterval(countdown, 1000);
