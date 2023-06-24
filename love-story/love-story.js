// Array of image sources in the correct sequence
const correctSequence = [
  "../images/1.jpg",
  "../images/11.jpg",
  "../images/2.jpg",
  "../images/3.jpg",
  "../images/12.jpg",
  "../images/4.jpg",
  "../images/6.jpg",
  "../images/5.jpg",
  "../images/7.jpg",
  "../images/13.jpg",
  "../images/8.jpg",
  "../images/14.jpg",
  "../images/9.jpg",
  "../images/10.jpg",
  "../images/16.jpg",
  "../images/15.jpeg",
  // Add more image sources here
];

let shuffledSequence = []; // Shuffled sequence of images

    // Shuffle the image sequence array
    function shuffleImages() {
      shuffledSequence = correctSequence.slice(); // Make a copy of the correct sequence
      for (let i = shuffledSequence.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledSequence[i], shuffledSequence[j]] = [shuffledSequence[j], shuffledSequence[i]];
      }
    }

    // Handle drag start event
    function dragStart(event) {
      event.dataTransfer.setData("text/plain", event.target.id);
    }

    // Handle drag over event
    function dragOver(event) {
      event.preventDefault();
    }

    // Handle drop event
    function drop(event) {
      event.preventDefault();
      const sourceId = event.dataTransfer.getData("text/plain");
      const sourceElement = document.getElementById(sourceId);
      const targetElement = event.target;

      if (targetElement.tagName === "IMG" && targetElement !== sourceElement) {
        const sourceIndex = Array.from(imageContainer.children).indexOf(sourceElement);
        const targetIndex = Array.from(imageContainer.children).indexOf(targetElement);

        // Swap the images in the shuffled sequence
        [shuffledSequence[sourceIndex], shuffledSequence[targetIndex]] = [shuffledSequence[targetIndex], shuffledSequence[sourceIndex]];

        // Re-display the updated images
        displayImages();

        // Check if the sequence is correct
        if (checkSequence()) {
          alert("Congratulations! You arranged the images correctly.");
        }
      }
    }

    // Handle click event on images
    function imageClick(event) {
      const clickedImage = event.target;
      if (!clickedImage.classList.contains("selected")) {
        // Select the clicked image
        clickedImage.classList.add("selected");
        // Check if two images are selected
        const selectedImages = Array.from(imageContainer.getElementsByClassName("selected"));
        if (selectedImages.length === 2) {
          // Swap the two selected images
          const firstImage = selectedImages[0];
          const secondImage = selectedImages[1];
          const firstIndex = Array.from(imageContainer.children).indexOf(firstImage);
          const secondIndex = Array.from(imageContainer.children).indexOf(secondImage);
          [shuffledSequence[firstIndex], shuffledSequence[secondIndex]] = [shuffledSequence[secondIndex], shuffledSequence[firstIndex]];
          // Re-display the updated images
          displayImages();
          // Reset selection
          selectedImages.forEach(image => image.classList.remove("selected"));
          // Check if the sequence is correct
          if (checkSequence()) {
            alert("Congratulations! You arranged the images correctly.");
          }
        }
      }
    }

    // Display the shuffled images on the page
    function displayImages() {
      const imageContainer = document.getElementById("image-container");
      imageContainer.innerHTML = ""; // Clear existing images

      for (let i = 0; i < shuffledSequence.length; i++) {
        const img = document.createElement("img");
        img.src = shuffledSequence[i];
        img.draggable = true;
        img.addEventListener("dragstart", dragStart);
        img.addEventListener("click", imageClick); // Add click event listener
        img.setAttribute("id", "image" + i); // Set the id attribute
        imageContainer.appendChild(img);
      }
    }

    // Check if the images are in the correct sequence
    function checkSequence() {
      for (let i = 0; i < shuffledSequence.length; i++) {
        if (shuffledSequence[i] !== correctSequence[i]) {
          return false;
        }
      }
      return true;
    }

    // Initialize the game
    function initializeGame() {
      shuffleImages();
      displayImages();

      const startButton = document.getElementById("start-button");
      startButton.textContent = "Restart Game";
      startButton.removeEventListener("click", initializeGame);
      startButton.addEventListener("click", restartGame);
    }

    // Restart the game
    function restartGame() {
      initializeGame();
    }

    // Add event listener to the start button
    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", initializeGame);

    // Add event listeners for drag and drop
    const imageContainer = document.getElementById("image-container");
    imageContainer.addEventListener("dragover", dragOver);
    imageContainer.addEventListener("drop", drop);