const clues = [
  {
    question: "What's my birth year?",
    answer: "2001"
  },
  {
    question: "Which nickname did I like the most that you gave me?",
    answer: "harshu"
  },
  {
    question: "What is the date of our first online meet or first message?",
    answer: "13"
  },
  {
    question: "What was the name of the restaurant where we had our first date?",
    answer: "saanjh"
  },
  {
    question: "What is my favorite place we've visited together?",
    answer: "garden of five senses"
  },
  {
    question: "What is my dream travel destination with you?",
    answer: "kedarnath"
  },
  {
    question: "What was the first gift I ever gave you?",
    answer: "pillow"
  },
  {
    question: "Which part of your body do I like the most?",
    answer: "nose"
  },
  {
    question: "What is the name of the movie I've been watched recently?",
    answer: "pirates of the carribean"
  },
  {
    question: "What's my UPI Pin",
    answer: "4085"
  },
  {
    question: "When was the first online movie date? (date space month space year)",
    answer: "3 march 2021"
  },
];

let currentClueIndex = 0;

const clueNumberElement = document.getElementById("clue-number");
const clueMessageElement = document.getElementById("clue-message");
const guessInput = document.getElementById("guess-input");
const submitButton = document.getElementById("submit-button");

function displayClue() {
  const currentClue = clues[currentClueIndex];
  clueNumberElement.textContent = `Clue ${currentClueIndex + 1}`;
  clueMessageElement.textContent = currentClue.question;
}

function checkAnswer() {
  const currentClue = clues[currentClueIndex];
  const answer = guessInput.value.trim().toLowerCase();

  if (answer === currentClue.answer) {
    if (currentClueIndex === clues.length - 1) {
      clueNumberElement.textContent = "";
      clueMessageElement.textContent = "Congratulations! You found the treasure!";
      guessInput.disabled = true;
      submitButton.disabled = true;
    } else {
      currentClueIndex++;
      guessInput.value = "";
      clueMessageElement.textContent = "";
      displayClue();
    }
  } else {
    clueMessageElement.textContent = "Sorry, wrong answer. Try again!";
  }
}

submitButton.addEventListener("click", checkAnswer);

displayClue();