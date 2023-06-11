const story = {
  start: {
    text: "You wake up and find a bike near you. What do you do?",
    choices: [
      {
        text: "Go on a long trip to a beautiful valley",
        outcome: "You reach a beautiful valley."
      },
      {
        text: "Come to see me",
        outcome: "You find me."
      },
      {
        text: "Explore the surroundings",
        outcome: "You enter a cafe."
      },
      {
        text: "Do nothing and go back to sleep",
        outcome: ""
      }
    ]
  },
  valley: {
    text: "You find yourself in a beautiful valley. What would you like to do?",
    choices: [
      {
        text: "Settle down in the valley",
        outcome: "You decide to settle down in the valley."
      },
      {
        text: "You see a person who looks familiar, and now you go to see him",
        outcome: "You find me."
      },
      {
        text: "You see a group of people partying and dancing",
        outcome: "You join the party at the cafe."
      },
      {
        text: "You explore the valley and get tired, so you go to sleep",
        outcome: "You go back to the starting point."
      }
    ]
  },
  me: {
    text: "You find me near you. What should we do?",
    choices: [
      {
        text: "Go on a romantic getaway",
        outcome: "We travel to a picturesque destination and create everlasting memories together."
      },
      {
        text: "Stay with me",
        outcome: "We snuggle up on the couch, enjoying each other's company and watching our favorite movies."
      },
      {
        text: "We go to a cafe",
        outcome: "We prepare a gourmet feast and savor every bite, creating a culinary masterpiece."
      },
      {
        text: "We have a fun game night, and now you go to get some sleep",
        outcome: "We gather our friends for an evening filled with laughter, competition, and unforgettable moments."
      }
    ]
  },
  cafe: {
    text: "You find all of your friends there, and you go to see them",
    choices: [
      {
        text: "You join them for a trip",
        outcome: "You travel to a picturesque destination and create everlasting memories together."
      },
      {
        text: "You leave them and come back to me",
        outcome: "We snuggle up on the couch, enjoying each other's company and watching our favorite movies."
      },
      {
        text: "You guys keep talking and sharing stories",
        outcome: "We prepare a gourmet feast and savor every bite, creating a culinary masterpiece."
      },
      {
        text: "You go back to your home and get some sleep",
        outcome: "We gather our friends for an evening filled with laughter, competition, and unforgettable moments."
      }
    ]
  }
  // Add more steps, choices, and outcomes here
};

// Get DOM elements
const storyElement = document.getElementById("story");
const choice1Button = document.getElementById("choice1");
const choice2Button = document.getElementById("choice2");
const choice3Button = document.getElementById("choice3");
const choice4Button = document.getElementById("choice4");

// Set up the initial state
let currentStep = "start";
renderStep(currentStep);

// Function to render the current step
function renderStep(step) {
  const currentStepData = story[step];
  storyElement.textContent = currentStepData.text;

  choice1Button.textContent = currentStepData.choices[0].text;
  choice2Button.textContent = currentStepData.choices[1].text;
  choice3Button.textContent = currentStepData.choices[2].text;
  choice4Button.textContent = currentStepData.choices[3].text;

  choice1Button.disabled = false;
  choice2Button.disabled = false;
  choice3Button.disabled = false;
  choice4Button.disabled = false;
}

// Function to handle choices
function makeChoice(choice) {
  const currentStepData = story[currentStep];
  const outcome = currentStepData.choices[choice].outcome;
  storyElement.textContent = outcome;

  choice1Button.disabled = true;
  choice2Button.disabled = true;
  choice3Button.disabled = true;
  choice4Button.disabled = true;

  // Move to the next step
  currentStep = choice === 0 ? "valley" : choice === 1 ? "me" : choice === 2 ? "cafe" : "start";
  renderStep(currentStep);
}

// Event listeners for choices
choice1Button.addEventListener("click", () => makeChoice(0));
choice2Button.addEventListener("click", () => makeChoice(1));
choice3Button.addEventListener("click", () => makeChoice(2));
choice4Button.addEventListener("click", () => makeChoice(3));